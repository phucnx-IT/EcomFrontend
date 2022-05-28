import {CATEGORY} from '../defines';
const initialState = {
    pending: false,
    category: [],
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORY.GET_CATEGORY_INPROCCESS: 
            return {
                ...state,
                pending: true
            }
        case CATEGORY.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                pending: false,
                category: action.category
            }
        case CATEGORY.GET_CATEGORY_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default categoryReducer;