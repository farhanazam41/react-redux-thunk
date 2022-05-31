import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT, FETCH_PRODUCTS,FETCH_SINGLE_PRODUCT, ADD_PRODUCT } from "../constants/action-types";
import storeApi from "../../api/storeApi";

export const fetchProducts = () => {

    return async (dispatch) => {
        const response = await storeApi.get('/products');
         return dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data
        }
        ) 
    }
}

export const fetchSingleProduct = (productId) => {
    return  async (dispatch) => {
        const response = await storeApi.get(`/products/${productId}`);
        console.log('resp', response.data)
        return dispatch({
            type: FETCH_SINGLE_PRODUCT,
            payload: response.data
        })
    }
}

export const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = product => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}