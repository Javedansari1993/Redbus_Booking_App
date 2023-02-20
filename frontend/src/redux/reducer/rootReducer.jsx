import { combineReducers } from "redux";
import selectCurrencyReducer from "./selectCurrencyReducer";

//main reducer of the App
const rootReducer = combineReducers ({
    selectCurrency:selectCurrencyReducer,
})


export default rootReducer