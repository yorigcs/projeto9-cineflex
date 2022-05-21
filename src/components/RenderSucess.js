import { useNavigate } from 'react-router-dom';
import './renderSucess.css';
const RenderSucess = ({ sucessInfo }) => {
    let navigate = useNavigate();
    const handleHome = () => navigate("../", { replace: true });

    console.log(sucessInfo);
    return (
        <main >
            <div className='title'>
                <h1 className=''>Pedido feito com sucesso!</h1>
            </div>
            <div className="info">
                <div>
                    <span>Filme e sessão</span>
                    <div>
                        <p>{sucessInfo.title}</p>
                        <p>{sucessInfo.date} {sucessInfo.time}</p>
                    </div>
                </div>

                <div>
                    <span>Ingressos</span>
                    <ul>
                        {sucessInfo.seats.map(seat => {
                            return (
                                <li key={seat}>
                                    <p>Assento {seat}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <span>Comprador</span>
                    <div>
                        <p>Nome: {sucessInfo.userName}</p>
                        <p>CPF: {sucessInfo.cpf}</p>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
            <button onClick={handleHome} className="button" type="button">Voltar pra Home</button>
            </div>
        </main>
    );
};



export default RenderSucess;