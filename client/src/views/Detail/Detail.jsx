import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountry } from "../../redux/actions";
import { useParams } from 'react-router-dom';
import style from "./Detail.module.css"

const Detail = () => {

    const country = useSelector(state => state.country)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch])

    return(
        <div className={style.detail}>
            <div className={style.detailTitle}>
                <h1>{country.name}</h1>
            </div>
            
            <div className={style.detailCard}>
                <img src={country.flagImage}/>
                <div className={style.detailText}>
                <p>Continent: {country.continent}</p>
                <p>Capital: {country.capital}</p>
                <p>Subregion: {country.subRegion}</p>
                <p>Area: {country.area}</p>
                <p>Population: {country.population}</p>
                <p>id: {country.id}</p>
                <p>actividad: {country.Activities?.map(a => (<p>{a.name}</p>))}</p>
                </div>

            </div>
        </div>
    )
}

export default Detail;