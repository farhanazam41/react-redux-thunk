import { combineReducers } from "redux";
import {allProductsReducer, singleProductReducer, addProductReducer}  from "./productsReducer";

export const rootReducer = combineReducers({
    allProducts : allProductsReducer,
    singleProduct: singleProductReducer,
    addProduct: addProductReducer,
})