import { createStore, combineReducer, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
