import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './renderForm.css';
import api from './services/api';
const RenderForm = ({ selectedSeats, info, SetSucessInfo }) => {
    const { idSessao } = useParams();
    let navigate = useNavigate();
    const [values, setValues] = useState({ name: '', cpf: '' });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };



    const handleSubimit = (event) => {
        event.preventDefault();
        const data = {
            ids: selectedSeats.map(x => x.id),
            name: values.name,
            cpf: values.cpf,
        };
        api
            .post('/seats/book-many', data)
            .then(res => {

                SetSucessInfo({
                    userName: data.name,
                    cpf: data.cpf,
                    seats: selectedSeats.map(x => x.seat),
                    ...info,
                    idSessao: idSessao
                });

                navigate("../sucesso", { replace: true });
            })
            .catch(err => console.log('Ocorreu um erro: ', err));


    };

    return (
        <form onSubmit={handleSubimit}>
            <div>
                <label htmlFor='name'>Nome do comprador: </label>
                <input type='text' id='name' name='name' value={values.name} onChange={handleChange} placeholder="Digite seu nome" required></input>
            </div>
            <div>
                <label htmlFor='cpf'>CPF do comprador:</label>
                <input type='text' id='cpf' name='cpf' value={values.cpf} onChange={handleChange} placeholder="Digite seu CPF..." required></input>
            </div>


            <button type="submit" className='button' disabled={selectedSeats.length === 0 ? true : false} >Reservar assento(s)</button>
        </form>

    );
}

export default RenderForm;