import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Filter.module.css";

const Filter = () => {

    const countries = useSelector(state => state.staticCountries)
    const activities = useSelector(state => state.activities)

    const [filters, setFilters] = useState({
        continent: 'all',
        activity: 'all',
        order: 'all'
    })

    const dispatch = useDispatch()

    let continents = []
    countries?.map(country => {
        continents = [...country?.continent, ...continents]
    })

    continents = [...new Set(continents)]

    const changeHandler = (event) =>{
        const property = event.target.name
        const value = event.target.value
        switch (property) {
            case "continents":
                setFilters((prevState) => {
                    const newState = {...prevState, continent: value}
                    dispatch(filter(countries, newState))
                    return newState
                })
                break;
            case "activities":
                setFilters((prevState) => {
                    const newState = {...prevState, activity: value}
                    dispatch(filter(countries, newState))
                    return newState
                })
            case "order":
                setFilters((prevState) => {
                    const newState = {...prevState, order: value}
                    dispatch(filter(countries, newState))
                    return newState
                })
            default:
                break;
        }
    }

    return(
        <div className={style.filterContainer}>
            <SearchBar/>
            {/*Filtro por continente*/}
            <select
                onChange={changeHandler}
                name="continents"
            >
                <option value='all'>
                    ALL CONTINENT
                </option>
                {
                    continents?.map(continent => (
                        <option value={continent}>
                            {continent}
                        </option>
                    ))
                }
            </select>
            {/*Filtro por actividad*/}
            <select
                onChange={changeHandler}
                name="activities"
            >
                <option value='all'>
                    ALL ACTIVITIES
                </option>
                {
                    activities?.map(activity => (
                        <option value={activity.name}>
                            {activity.name}
                        </option>
                    ))
                }
            </select>
            {/*Ordenamiento */}
            <select
                onChange={changeHandler}
                name="order"
            >
                <option value='all'>
                    ORDER
                </option>
                <option value='a-z'>
                    A - Z
                </option>
                <option value='z-a'>
                    Z - A
                </option>
                <option value='ascP'>
                    - Population
                </option>
                <option value='desP'>
                    + Population
                </option>
            </select>
        </div>
    )
}

export default Filter