import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import repoReduser from "./repositories";

const rootReducer = combineReducers({
    repositories: repoReduser
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;