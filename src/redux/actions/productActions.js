import {PRODUCT} from '../defines';

export const fetchProductsPending = () => ({
    type: PRODUCT.GET_PRODUCT_INPROCCESS,
});

export const fetchProductsSuccess = (products) => ({
    type: PRODUCT.GET_PRODUCT_SUCCESS,
    products,
});

export const fetchProductsError = (error) => ({
    type: PRODUCT.GET_PRODUCT_FAILURE,
    error,
});
