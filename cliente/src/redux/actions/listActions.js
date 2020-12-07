import { SET_ITEMS, SET_CATEGORIAS, SET_ERROR, SET_LOADING} from '../types';

import clienteAxios from '../../config/axios';

export const getItems = (s) => {
    return async (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
        try {
            const response = await clienteAxios.get(`/api/items?q=${s}`);

            const {
                data: {items, categories},
            } = response;

            dispatch({
                type: SET_ITEMS,
                payload: {
                    items,
                    categories,
                },
            });
        } catch (error) {
            dispatch({
                type: SET_ERROR,
                payload: error,
            });
        }
    };
};

export const clearItems = () => {
    return (dispatch) => {
        dispatch({
            type: SET_ITEMS,
            payload: {
                items: [],
                categories: [],
            },
        });
    };
};

export const setCategories = (categories) => {
    return (dispatch) => {
        dispatch({
            type: SET_CATEGORIAS,
            payload: {
                categories,
            },
        });
    };
};
