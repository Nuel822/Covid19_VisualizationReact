import { combineReducers } from  'redux';
import { TotalStats } from  '../reducer/totalstats.reducer' ;
import { CountryStats } from  '../reducer/countryStats.reducer';


export const reducers = combineReducers ({
    TotalStats,CountryStats
})

