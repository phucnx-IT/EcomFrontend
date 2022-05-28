import {CATEGORY} from '../defines';

export const fetchCategoryPending = () => ({
    type: CATEGORY.GET_CATEGORY_INPROCCESS,
});

export const fetchCategorySuccess = (category) => ({
    type: CATEGORY.GET_CATEGORY_SUCCESS,
    category,
});

export const fetchCategoryError = (error) => ({
    type: CATEGORY.GET_CATEGORY_FAILURE,
    error,
});
