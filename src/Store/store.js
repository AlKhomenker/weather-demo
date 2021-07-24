import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import themeReducer from "./Reducers/themeReducer";
import weatherReducer from "./Reducers/weatherReducer";
import locationReducer from "./Reducers/locationReducer";
import favoriteLocationReducer from "./Reducers/favoriteLocationReducer";


const rootReducer = combineReducers({
    themeStates: themeReducer,
    weatherState: weatherReducer,
    locationState: locationReducer,
    favoritesLocationsState: favoriteLocationReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;