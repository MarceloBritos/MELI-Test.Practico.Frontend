import {SET_ITEM, SET_CATEGORIAS, SET_ERROR, SET_LOADING} from '../types';

const initialState = {
    item: null,
    categories: [],
    error: false,
    loading: true
};

export default function (state = initialState, action) {

    switch (action.type) {
        
        case SET_ITEM: {
            const {item, categories} = action.payload;
            return {...state, item, categories, error: false, loading: false};
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

