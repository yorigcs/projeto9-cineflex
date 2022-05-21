import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "./services/api";
import './renderDates.css';
import RenderFooter from "./RenderFooter";
import GoBack from "./GoBack";

const RenderDates = () => {
   
    const [dateTimes, setDateTimes] = useState([]);
    const [info, setInfo] = useState({});
    const { idMovie } = useParams();


    useEffect(() => {
        api
            .get(`/movies/${idMovie}/showtimes`)
            .then((response) => {
                setDateTimes([...response.data.days]);
                setInfo({ title: response.data.title, posterURL: response.data.posterURL });
            })
            .catch((error) => { console.error('Ocorreu um erro: ' + error) });

    }, [idMovie]);

    return (
        <>
            <GoBack to={'../'} />
            <main>
                <h1>Selecione o horário</h1>

                <ul className="days">
                    {dateTimes.map((day) =>
                        <li key={day.id}>
                            <DateItem {...day} />
                        </li>
                    )}
                </ul>
            </main>

            <RenderFooter {...info} />
            
        </>
        );
        

};



const DateItem = ({ weekday, date, showtimes }) => {
    return (
        <>
            <span>{weekday} - {date}</span>
            <ul className="times">
                {showtimes.map((time) =>
                    <Link to={`/assentos/${time.id}`} key={time.id}>
                        <li className="time">
                            {time.name}
                        </li>
                    </Link>
                )}
            </ul>
        </>
    );
};

export default RenderDates;