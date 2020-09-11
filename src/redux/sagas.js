import { all } from 'redux-saga/effects';
import productSagas from './my-product/saga';
//import { waitForFetchProducts } from './sagas/products.saga'

// export default function* rootSaga(){
//     yield all([waitForFetchProducts()]);
// }

export default function* rootSaga(getState) {
  yield all([
    productSagas(),
 //   waitForFetchProducts()
  ]);
}



