import { createStore, combineReducers } from "redux";
import orderReducer from "./reducers/orderReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    orders: orderReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store