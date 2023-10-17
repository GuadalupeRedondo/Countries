import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import Paginado from "../Paginado/Paginado"

const CardsContainer = () => {
const Aux = useSelector(state => state.aux)
const Countries = useSelector(state => state.countries)
const [currentPage, setCurrentPage] = useState(1); //Pagina actual - empieza en 1
const [countriesPerPage, setCountriesPerPage] = useState(10); //Cantidad de paises por pagina - 15
const indexOfLastCountry = currentPage * countriesPerPage // 1° pagina: 1 * 15 = 15 // 2° pagina: 2 * 15 = 30 // etc...
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 1° pagina: 15 - 15 = 0 // 2° pagina: 30 - 15 = 15 // etc...
const currentCountries = Countries.slice(indexOfFirstCountry, indexOfLastCountry); //

useEffect(() => {
    setCurrentPage(1)
},[Countries])

const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber);
}
    return(
        <div className={style.container}>
            <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={Countries.length}
            paginado={paginado}
            />
            <div className={style.cards}>
                {currentCountries.map(country => {
                        return <Card
                            key={country.id} 
                            id={country.id}
                            flagImage={country.flagImage}
                            name={country.name}
                            continent={country.continent}
                        />
                    })}
            </div>

        </div>
    )
}

export default CardsContainer