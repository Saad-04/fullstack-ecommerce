import {configureStore} from '@reduxjs/toolkit'
import { combineReducers,applyMiddleware ,createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productReducer, productSlice } from "./reducers/productReducer.js";
// import { composeWithDevTools } from "redux-devtools-extension";

// // export const store = createStore(
// //   combineReducers({
// //     product: productReducer,
// // }),
// // applyMiddleware(logger, thunk)
// // );



// export const store = createStore(
  //   reducer,
  //   initialState,
  //   composeWithDevTools(applyMiddleware(...middleware))
  // );
  
  // let initialState = {};
  // const middleware = [thunk];
 

  export const store = createStore(combineReducers({
    product:productReducer
  }),
  applyMiddleware(logger,thunk)
  )


