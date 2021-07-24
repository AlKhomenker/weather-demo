import {SET_NEW_LOCATION} from "../types";


const defaultState = {
    location:{
        Version: 1,
        Key: "215854",
        Type: "City",
        Rank: 31,
        LocalizedName: "Tel Aviv",
        Country: {
            ID: "IL",
            LocalizedName: "Israel"
        },
        AdministrativeArea: {
            ID: "TA",
            LocalizedName: "Tel Aviv"
        }
    }
};




export const setNewLocation = (location) => ({
    type: SET_NEW_LOCATION,
    payload: location
});


export default function themeReducer(state= defaultState, action){
    switch (action.type) {
        case SET_NEW_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        default:
            return state
    }
}


