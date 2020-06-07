import {FETCHING, FETCHED_NATION, FAIL, FETCHED_COUNTRIES, FETCHED_WORLD, SET_CHART, SET_SELECTED} from '../actions/covidActions';

const initialState = {
    nation:  [],
    countries: [],
    nations: [],
    selectedNations: [],
    selectedNation: 'Chile',
    world: {},
    chart: {},
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
            let selectedNationsUpdated = [...state.selectedNations, action.payload[0].Country]
            let nationsUpdated = [...state.nations, action.payload]
            return{
                ...state,
                nation: action.payload,
                nations: nationsUpdated,
                selectedNations: selectedNationsUpdated,
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
            return{
                ...state,
                chart: action.payload
            }   
        case SET_SELECTED:
            console.log("llego")
            console.log(action.payload)
            return{
                ...state,
                selectedNation: action.payload,
            }    
        default: return state;
    }
}