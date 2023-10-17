import { FILTER, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY } from "./actions";

const initialState={
    staticCountries: [],
    countries: [],
    country: {},
    activities: [],
    aux:true
};

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ACTIVITIES:
            return {...state, activities: action.payload}
        case FILTER:
            return {...state, countries: action.payload, aux: !state.aux}
        case GET_COUNTRY:
            return {...state, country: action.payload}
        case GET_COUNTRIES:
            return {...state, countries: action.payload, staticCountries: action.payload}
        default: 
        return {...state};
    }
}

export default rootReducer