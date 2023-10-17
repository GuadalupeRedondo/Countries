import style from "./Card.module.css";
import {Link} from 'react-router-dom'

const Card = ({
    id,
    name,
    flagImage,
    continent
}) => {

    return(
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <img className={style.image} src={flagImage}/>
                <div className={style.text}>
                    <p>Name: {name}</p>
                    <p>Continente: {continent}</p>
                </div>    
            </Link>
        </div>
    )
}

export default Card