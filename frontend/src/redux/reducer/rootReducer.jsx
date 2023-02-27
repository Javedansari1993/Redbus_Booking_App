import { combineReducers } from "redux";
import busDetailReducers from "../reducer/busDetailReducers";
import busFormReducer from "./busFormReducer";
import buslocationReducer from "./busLocationReducer";
import busPriceReducer from "./busPriceReducer";
import busSeatNumberReducer from "./busSeatNumber";
import singleBusDetailsReducer from "./singleBusDetail";

//main reducer of the App
const rootReducer = combineReducers ({
    busDetail:busDetailReducers,
    busLocation:buslocationReducer,
    busSeatNumber:busSeatNumberReducer,
    singleBusDetail : singleBusDetailsReducer,
    busPrice:busPriceReducer,
    busForm:busFormReducer
})


export default rootReducer