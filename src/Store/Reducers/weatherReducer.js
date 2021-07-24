import {GET_CURRENT_WEATHER} from '../types'

const defaultState = {
    weather: []
};


export const getCurrentWeather = (theme) => ({
    type: GET_CURRENT_WEATHER,
    payload: theme
});



export default function weatherReduser(state= defaultState, action){
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}


