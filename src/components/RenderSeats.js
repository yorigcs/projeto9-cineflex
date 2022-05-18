import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./services/api";
import './renderSeats.css'
const RenderSeats = () => {
    const { idSessao } = useParams();
    const [seats,setSeats] = useState([]);

    useEffect(() => {
        api
            .get(`/showtimes/${idSessao}/seats`)
            .then((response) => {
                setSeats(response.data.seats)
            })
            .catch((error) => {console.error('Ocorreu um erro: ' + error)})
    }, [idSessao]);

    return (
        <main>
            <h1>Selecione o(s) assento(s)</h1>

            <ul className="seats">
             {seats.map( (seat) => (
                 <li className="seat available " key={seat.id}>
                     <Seat {...seat} />
                 </li>
             ))}
            </ul>

        </main>
    );

};

const Seat = ({name,isAvailable}) => {
    return (
        <span>{name}</span>
    );
};

export default RenderSeats;