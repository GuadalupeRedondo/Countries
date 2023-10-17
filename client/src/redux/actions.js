import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"
export const FILTER = "FILTER"
export const GET_ACTIVITIES = "GET_ACTIVITIES"


export const getCountries = () => {
    return async function(dispatch){
        const apiData = await axios.get(
            "http://localhost:3001/countries"
        );
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
};

export const getCountry = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(
            `http://localhost:3001/countries/${id}`
        );
        const country = apiData.data;
        dispatch({type: GET_COUNTRY, payload: country});
    };
};

export const postActivity = (formData) => {
    return async function(){
        try {
            const apiData = await axios.post(
                `http://localhost:3001/activities`,
                formData
            );
            alert('Actividad creada')
        } catch (error) {
            alert('No se pudo crear')
        }
    }
}

export const getActivities = () => {
    return async function(dispatch){
        const apiData = await axios.get(
            "http://localhost:3001/activities"
        );
        const activities = apiData.data;
        dispatch({type: GET_ACTIVITIES, payload: activities});
    };
};

export const filter = (countries, filter) => {
    let countriesFilter = countries
    
    //Filtro por continente
    if(filter.continent !== 'all'){
        countriesFilter = countriesFilter.filter(country => country.continent[0] === filter.continent)
    }
    //Filtro por actividad
    if(filter.activity !== 'all'){
        countriesFilter = countriesFilter.filter(country => {
            return country.Activities.some(a => a.name === filter.activity)
        })
    }
    //Ordenamiento nombre
    if(filter.order === 'a-z' || filter.order === 'z-a'){
        if(filter.order === 'a-z'){
            countriesFilter = countriesFilter.sort((a,b) => a.name.localeCompare(b.name))
        }else{
            countriesFilter = countriesFilter.sort((a,b) => b.name.localeCompare(a.name))
        }
    }
    //Ordenamiento poblacion
    if(filter.order === 'ascP' || filter.order === 'desP'){
        if(filter.order === 'ascP'){
            countriesFilter = countriesFilter.sort((a,b) => a.population - b.population)
        }else{
            countriesFilter = countriesFilter.sort((a,b) => b.population - a.population)
        }
    }

    return async function(dispatch){
        dispatch({type: FILTER, payload:countriesFilter});
    }
    
};

export const search = (name) => {
    return async function(dispatch){
        const apiData = await axios.get(
            `http://localhost:3001/countries?name=${name}`
        );
        const countries = apiData.data;
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
};