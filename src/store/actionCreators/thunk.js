import { getProductTypes } from "../../services/customer";

export const GET_PRODUCT_TYPE_REQUEST = '@@product/GET_PRODUCT_TYPE_REQUEST';
export const GET_PRODUCT_TYPE_SUCCESS = '@@product/GET_PRODUCT_TYPE_SUCCESS';
export const GET_PRODUCT_TYPE_ERROR = '@@product/GET_PRODUCT_TYPE_ERROR';

 //Trả về 1 async function
export const getProductTypeAction = () => async (dispatch) => {
    try {
        dispatch({type: GET_PRODUCT_TYPE_REQUEST })
        const response = await getProductTypes();
        dispatch({type: GET_PRODUCT_TYPE_SUCCESS, payload: response.data })
        
    } catch (error) {
        dispatch({type: GET_PRODUCT_TYPE_ERROR, payload: error.message })
    }
}