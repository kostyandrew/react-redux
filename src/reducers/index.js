import {combineReducers} from "redux";

import counterReducer from "./../features/counter";
import appReducer from "./app";


const rootReducer = combineReducers({
    app: appReducer,
    counter: counterReducer
});

export default rootReducer;
