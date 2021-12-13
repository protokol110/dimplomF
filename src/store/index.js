import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})















// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { all, fork } from 'redux-saga/effects';
// import saleSaga from "../sagas/saleContent";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './reducers';



// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer)
// sagaMiddleware.run(saleSaga);

// export default function* rootSaga() {
//   yield all([
//     fork(saleSaga),
//   ]);
// }

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// let store = createStore(persistedReducer)

// const persistor = persistStore(store);



// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// export { store };