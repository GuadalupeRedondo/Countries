import { useState } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import validation from "./validation"
import { postActivity } from "../../redux/actions";
import style from "./Form.module.css"

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries:[],
    })
    const [errors, setErrors] = useState({})
    
    const countries = useSelector(state => state.countries)

    const dispatch = useDispatch()

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        
        switch (property) {
            case "countries":
                setForm((state) => {
                    const filtered = state.countries.filter(country => country === value);
                    
                    const selected = filtered.length
                    ? state.countries.filter(country => country !== value)
                    : [...state.countries, value]
                    const newState = {...state, countries: selected}

                    setErrors(validation(newState))

                    return newState
                })
                break;
            default:
                setForm({...form, [property]: value})
                setErrors(validation({...form, [property]: value}))
        }    
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(postActivity(form))
    }

    return(
        <form className={style.formContainer} onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    value={form.name} 
                    onChange={changeHandler}
                    name="name"
                    className={style.formInput}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Difficulty</label>
                <input 
                    type="number" 
                    value={form.difficulty}
                    onChange={changeHandler}
                    name="difficulty"
                    className={style.formInput}
                />
                {errors.difficulty && <span>{errors.difficulty}</span>}
            </div>
            <div>
                <label>Duration</label>
                <input 
                    type="number" 
                    value={form.duration}
                    onChange={changeHandler}
                    name="duration"
                    className={style.formInput}
                />
                {errors.duration && <span>{errors.duration}</span>}
            </div>
            <div>
                <label>Season</label>
                <select
                    value={form.season}
                    onChange={changeHandler}
                    name="season"
                    className={style.formInput}
                >
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                </select>
                {errors.season && <span>{errors.season}</span>}
            </div>
            <div>
            <label>Countries</label>
                <select
                    value={form.countries}
                    onChange={changeHandler}
                    name="countries"
                    className={style.formInput}
                >
                {
                    countries.map(country => (
                        <option
                            value={country.id}
                        >
                            {country.name}
                        </option>
                    ))
                }
                </select>
                {form.countries.map(c => (<p>{c}</p>))}
                {errors.countries && <span>{errors.countries}</span>}
            </div>
            <button
                type="submit"
                className={style.formButton}
            >
                Create
            </button>
        </form>

    )
}

export default Form;