import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import {GET_PRODUCTS} from "../actions";
import { getProductSuccess, getProductError  } from "./actions";
      
export function getApiAsync(page) {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`)
   
      .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(function (error) {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

function* getProduct({ payload }) {

  try {

      const { data } = payload;
      let response = yield call(getApiAsync, data);
      if (response) {
        yield put(getProductSuccess(response));
      }
  } catch (error) {
     yield put(getProductError(error));
  }
}

export function* watchGetProduct() {
  yield takeEvery(GET_PRODUCTS, getProduct);

}
export default function* rootSaga() {
  yield all([
    fork(watchGetProduct),
  
 

  ]);
}
