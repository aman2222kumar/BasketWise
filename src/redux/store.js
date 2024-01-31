import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import {
  apiReducer,
  apiReducerForList,
  productCountReducer,
} from "./apiCallReducer";

export const rootReducer = combineReducers({
  api: apiReducer,
  listOfData: apiReducerForList,
  countData: productCountReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
