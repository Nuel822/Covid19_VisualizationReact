import { compose,applyMiddleware,createStore } from "redux";
import  thunk from "redux-thunk";
import { reducers } from "../reducer";

// const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer =  compose;

export const store = createStore(
    reducers,
    composeEnhancer (applyMiddleware(thunk))
)