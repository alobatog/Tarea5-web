import {FETCHING, FETCHED_NATION, FAIL, FETCHED_COUNTRIES, FETCHED_WORLD, SET_GRAPHIC} from '../actions/covidActions';

const initialState = {
    nation:  [],
    countries: [],
    world: {},
    graphic: [],
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
        case SET_GRAPHIC:
            return{
                ...state,
                graphic: action.payload
            }
        default: return state;
    }
}