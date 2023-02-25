import { combineReducers } from "redux";
import busDetailReducers from "../reducer/busDetailReducers";
import buslocationReducer from "./busLocationReducer";
import busSeatNumberReducer from "./busSeatNumber";
import singleBusDetailsReducer from "./singleBusDetail";

//main reducer of the App
const rootReducer = combineReducers ({
    busDetail:busDetailReducers,
    busLocation:buslocationReducer,
    busSeatNumber:busSeatNumberReducer,
    singleBusDetail : singleBusDetailsReducer
})


export default rootReducer