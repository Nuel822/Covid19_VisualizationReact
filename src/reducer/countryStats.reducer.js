import { ACTION_TYPES } from '../action/countryStats.action';


const initialState = {
    geoData: [],
    allCountryData: []
}

export const CountryStats = (state = initialState, action) => {

    switch (action.type) {
        
        case ACTION_TYPES.FETCHDVDATA:
            return{
                ...state,
                geoData: action.payload
            }
        case ACTION_TYPES.GET:
            return{
                ...state,
                allCountryData: action.payload
            }
        default:
            return state
    }
}