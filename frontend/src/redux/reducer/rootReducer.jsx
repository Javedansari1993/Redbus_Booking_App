import { combineReducers } from "redux";
import busDetailReducers from "../reducer/busDetailReducers";
import buslocationReducer from "./busLocationReducer";

//main reducer of the App
const rootReducer = combineReducers ({
    busDetail:busDetailReducers,
    busLocation:buslocationReducer
})


export default rootReducer