import {SET_PRODUCTS, SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT, FETCH_PRODUCTS,FETCH_SINGLE_PRODUCT, ADD_PRODUCT} from '../constants/action-types';

const initialState = {
    products : [],
}

const initialStateForSingleProduct = {
    product : {}
}

const initialStateForAddProduct = {
    product : {
        show: false,
        title: 'Default title',
        category:'Default category',
        description: 'Default description',
    }
}

export const allProductsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products : action.payload}
        case FETCH_PRODUCTS:
            return {...state, products : action.payload}
            
        default:
            return state;
    }
}

export const singleProductReducer = (state = initialStateForSingleProduct, action) => {
    switch (action.type) {
              
        case SELECTED_PRODUCT:
            return {...state, product : action.payload}
        case FETCH_SINGLE_PRODUCT:
            return {...state, product : action.payload}
    
        case REMOVE_SELECTED_PRODUCT:
                return {}
    
        default:
            return state;
    }
}


export const addProductReducer = (state = initialStateForAddProduct, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, product: action.payload}
     
    
        default:
            return state;
    }
}