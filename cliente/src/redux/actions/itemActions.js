import {SET_ITEM, SET_CATEGORIAS, SET_ERROR, SET_LOADING} from '../types';
import clienteAxios from '../../config/axios';


export const getItem = (id) => {
    return async (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
        try {
            const response = await clienteAxios.get(`/api/items/${id}`);

            const {
                data: {item, item:{categories}},
            } = response;

            dispatch({
                type: SET_ITEM,
                payload: {
                    item,
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
