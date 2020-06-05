import {FETCHING, FETCHED_NATION, FAIL, FETCHED_COUNTRIES, FETCHED_WORLD, SET_CHART} from '../actions/covidActions';

const initialState = {
    nation:  [],
    countries: [],
    world: {},
    chart: [],
    loading: false,
    error: ''
};

export default function trendsReducer(state = initialState, action){
    switch(action.type){
        case FETCHING:
            return{
                ...state,
                loading:true
            };
        case FETCHED_NATION:
            return{
                ...state,
                nation: action.payload,
                loading: false
            };
        case FETCHED_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                loading: false
            }
        case FETCHED_WORLD:
            return{
                ...state,
                world: action.payload,
                loading: false
            }
        case FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            };
        case SET_CHART:
            console.log('hola')
            return{
                ...state,
                chart: action.payload
            }
        default: return state;
    }
}