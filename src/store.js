import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { operation } from "./reducers/allReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contacts: operation,
});

const middleware = [thunk];

const initialState = [];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
