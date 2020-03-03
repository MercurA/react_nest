import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./reducer";
import tunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    globalState: userReducer
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default function configStore() {
    const middlewares = [tunkMiddleware];
    const middlewaresEnhancer = applyMiddleware(...middlewares);
    const store  = createStore(rootReducer, middlewaresEnhancer);
    
    return store;
}