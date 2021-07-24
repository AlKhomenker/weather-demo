import {SET_FAVORITE_LOCATION} from '../types'


const defaultState = {
    favoriteLocation: []
};


export const setFavoriteLocation = (newLocation) => ({
    type: SET_FAVORITE_LOCATION,
    payload: newLocation
});



export default function favoriteLocationReducer(state= defaultState, action){
    switch (action.type) {
        case SET_FAVORITE_LOCATION:
            return {
                ...state,
                favoriteLocation: action.payload
            }
        default:
            return state
    }
}


