import * as actionTypes from "../action/actionTypes";
import initialstate from "./InitialState"

const addCart = (state = initialstate.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART:
            return (state = state.concat(action.payload));
        case actionTypes.DELETE_CART:
            return (state = state.filter(c => c.id !== action.payload));
        default:
            return state;
    }
};

export default addCart;








