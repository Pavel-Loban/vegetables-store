import { createStore,combineReducers, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const logMiddleWare = (store) => (dispatch) => (action) => {
    console.log(action.type, store.getState())
    return dispatch(action)
}

const store = createStore(combineReducers({
    beverage: reducer,
    nut: reducer
}),
applyMiddleware(thunk, logMiddleWare)
);

export default store;