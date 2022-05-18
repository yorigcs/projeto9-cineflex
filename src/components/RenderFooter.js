import './renderFooter.css';


const RenderFooter = ({title,posterURL}) => {
    return (
        <footer>
            <div className='minImg'>
            <img src={posterURL} alt={title}></img>
            </div>
            <div>
                <span>{title}</span>
            </div>
        </footer>
    );
};

export default RenderFooter;