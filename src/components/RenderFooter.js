import './renderFooter.css';


const RenderFooter = ({ title, posterURL, day, time }) => {
    return (
        <footer>
            <div className='minImg'>
                <img src={posterURL} alt={title}></img>
            </div>
            <div>
                {(day && time)
                    ?
                    <>
                        <p>{title}</p>
                        <span>{day} - {time}</span>
                    </>
                    :
                    <span>{title}</span>
                }
            </div>
        </footer>
    );
};

export default RenderFooter;