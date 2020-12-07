import {SET_ITEMS, SET_CATEGORIAS, SET_ERROR, SET_LOADING} from '../types';

const initialState = {
    items: [],
    categories: [],
    error: false,
    loading: true,
};

export default function (state = initialState, action) {

    switch (action.type) {
        
        case SET_ITEMS: {
            const {items, categories} = action.payload;
            return {...state, items, categories, error: false, loading: false};
        }
        case SET_CATEGORIAS: {
            return {...state, categories: action.payload, error: false, loading: false};
        }
        case SET_ERROR: {
            return {...state, error: action.payload, loading: false};
        }
        case SET_LOADING: {
            return {...state, loading: action.payload};
        }
        default:
            return state;
    }
}
