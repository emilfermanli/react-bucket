import * as actionTypes from "../action/actionTypes";
import initialState from "./InitialState"


const cartReducer = (state = initialState.product, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT:
            return action.payload;

        default:
            return state;
    }

};

export default cartReducer;








