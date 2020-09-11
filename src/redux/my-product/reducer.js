import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from "../actions";

const INIT_STATE = {
  products: [],
  success: "",
  error: "",
  loading: false,
  show_products: false,
  
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true, error: "" };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.product,
        success: 'Product data'
      };
    case GET_PRODUCTS_ERROR:   
      return { ...state, loading: false, error: action.payload.message };

    default:
      return { ...state };
  }
};
