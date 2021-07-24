import {SET_THEME, SET_NEW_URL} from '../types'

const localStorage = window.localStorage;

const defaultState = {
    theme:  localStorage.getItem('localTheme'),
    page: ''
};


export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme
});

export const setNewPageUrl = (page) => ({
    type: SET_NEW_URL,
    payload: page
});


export default function themeReducer(state= defaultState, action){
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case SET_NEW_URL:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}


