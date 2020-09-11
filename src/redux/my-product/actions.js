import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR

} from "../actions";



export const getProduct = (data, props) => ({
  type: GET_PRODUCTS,
  payload: { data, props }
});
 
export const getProductSuccess = product => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { product }
});
export const getProductError = message => ({
  type: GET_PRODUCTS_ERROR,
  payload: { message }
});

