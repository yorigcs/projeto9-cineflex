import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./services/api";

import './renderList.css';

const RenderList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api
            .get('/movies')
            .then((response) => setList([...response.data]))
            .catch((error) => {
                console.error("Ocorreu um erro" + error);
            });
    }, []);

    return (
        <main>
            <h1>Selecione o Filme</h1>
            <ul className="items">
                {list.map((item) => (
                    <li className="item-border" key={item.id}>
                        <Link to={`/sessoes/${item.id}`} >
                            <Movie {...item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>

    )

};


const Movie = ({ id, title, overview, posterURL, releaseDate }) => {
    return (
        <img style={{ width: '130px', height: '194px' }} src={posterURL} alt={title}></img>
    );
};

export default RenderList;