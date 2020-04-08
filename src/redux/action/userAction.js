import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addProduct = (prarr) => ({
    type: actionTypes.ADD_CART,
    payload: prarr
});

export const deleteProduct = (del) => ({
    type: actionTypes.DELETE_CART,
    payload: del
});



export function getCategoriesSuccess(product) {
    return {
        type: actionTypes.GET_PRODUCT,
        payload: product
    }
};



export function getCategories() {
    return function (dispatch) {
        let url = "https://my-json-server.typicode.com/emilfermanli/db/product";
        return axios.get(url)
            .then(res => res.data)
            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}







