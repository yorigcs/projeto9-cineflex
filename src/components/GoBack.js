import { useNavigate } from "react-router-dom";
import './goBack.css';
const GoBack = ({to}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        to ? navigate(to, {replace: true}) : navigate(-1);
    };

    return (
        <button className="goBackButton" onClick={handleClick} type="button">Voltar</button>
    );
};

export default GoBack;