import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./services/api";
import './renderSeats.css'
import RenderFooter from "./RenderFooter";
import RenderForm from "./RenderForm";
import GoBack from "./GoBack";

const RenderSeats = ({ SetSucessInfo }) => {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        api
            .get(`/showtimes/${idSessao}/seats`)
            .then((response) => {
                setSeats(response.data.seats);
                setInfo({
                    title: response.data.movie.title,
                    posterURL: response.data.movie.posterURL,
                    date: response.data.day.date,
                    day: response.data.day.weekday,
                    time: response.data.name
                });
            })
            .catch((error) => { console.log('Ocorreu um erro: ' + error) })
    }, [idSessao]);

    return (
        <>
            <GoBack />
            <main>
                <h1>Selecione o(s) assento(s)</h1>

                <Seat seats={seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                <ul className="buttonTypes">
                    <li>
                        <span className="seat selected"></span>
                        <span>Selecionado</span>
                    </li>

                    <li>
                        <span className="seat available"></span>
                        <span>Disponível</span>
                    </li>
                    <li>
                        <span className="seat unavailable"></span>
                        <span>Indisponível</span>
                    </li>
                </ul>
            </main>

            <RenderFooter {...info} />

            <RenderForm selectedSeats={selectedSeats} info={info} SetSucessInfo={SetSucessInfo} />
        </>
    );

};

const Seat = ({ seats, selectedSeats, setSelectedSeats }) => {

    return (
        <ul className="seats">
            {seats.map((seat) => {
                let type = 'seat ';
                seat.isAvailable ? type += 'available' : type += 'unavailable';
                return (
                    <HandleClick key={seat.id}
                        {...seat}
                        type={type}
                        setSelectedSeats={setSelectedSeats}
                        selectedSeats={selectedSeats}

                    />
                );
            })}
        </ul>
    );
};

const HandleClick = ({
    name,
    isAvailable,
    id,
    type,
    selectedSeats,
    setSelectedSeats }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChanges = (id, name) => {
        setIsSelected(!isSelected);
        if (selectedSeats.filter(elem => elem.id === id).length === 1) {

            setSelectedSeats(selectedSeats.filter(elem => elem.id !== id));
        } else {
            setSelectedSeats([...selectedSeats, { id: id, seat: name }]);
        }

    };
    const seatUnavailable = () => { alert('Esse assento não está disponível') };

    return (
        <>
            {isAvailable
                ?
                <li className={isSelected ? 'seat selected' : type} onClick={() => { handleChanges(id, name) }}>
                    <span>{name}</span>
                </li>
                :
                <li className={isSelected ? 'seat selected' : type} onClick={seatUnavailable}>
                    <span>{name}</span>
                </li>

            }

        </>
    );
}

export default RenderSeats;