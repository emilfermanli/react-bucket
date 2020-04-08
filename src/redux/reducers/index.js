import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import addCart from "./addCart"

const reducers = combineReducers({
    cartReducer,
    addCart
});

export default reducers;