import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getActivities, getCountries } from "../../redux/actions";
import style from "./Home.module.css";
import Filter from "../../components/Filter/Filter";
//import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[dispatch])

    return(
        <div className={style.home}>
            {/*<SearchBar/>*/}
            <Filter/>
            <CardsContainer/>
        </div>
    )
}

export default Home;