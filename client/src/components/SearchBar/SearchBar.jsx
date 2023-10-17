import { useDispatch } from "react-redux";
import { useState } from "react";
import { search } from "../../redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {

    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()

    const changeHandler = (event) => {
        
        setInputSearch(() => {
            const updateState = event.target.value
            dispatch(search(updateState))
            return updateState
        })
        
    }

    return(
        <div className={style.searchContainer}>
            <input 
            type='text'
            onChange={changeHandler}
            value={inputSearch}
            placeholder="Search"
            >
            </input>
        </div>
    )
}

export default SearchBar