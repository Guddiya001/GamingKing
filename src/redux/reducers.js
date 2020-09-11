import { combineReducers } from 'redux';
import productApp from './my-product/reducer';



const reducers = combineReducers({
  productApp,

});

export default reducers;