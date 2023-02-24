import { combineReducers } from "redux";
import busDetailReducers from "../reducer/busDetailReducers";
import buslocationReducer from "./busLocationReducer";
import busSeatNumberReducer from "./busSeatNumber";

//main reducer of the App
const rootReducer = combineReducers ({
    busDetail:busDetailReducers,
    busLocation:buslocationReducer,
    busSeatNumber:busSeatNumberReducer
})


export default rootReducer