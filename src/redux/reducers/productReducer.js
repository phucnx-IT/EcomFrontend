import {PRODUCT} from '../defines';
import productData from "../../data/product.json";
import useProductData from '../../common/useProductData';

const initialState = {
    pending: false,
    products: [],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT.GET_PRODUCT_INPROCCESS: 
            return {
                ...state,
                pending: true
            }
        case PRODUCT.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case PRODUCT.GET_PRODUCT_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default productReducer;

