import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerMiddleware, connectedRouter } from "../connected-react-router";

import history from "../history";

const reducers = combineReducers({
  connectedRouter: connectedRouter(history),
});

const store = applyMiddleware(routerMiddleware(history))(createStore)(reducers);

export default store;
