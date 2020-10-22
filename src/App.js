import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "./connected-react-router";

import store from "./store";
import history from "./history";

import Page1 from "./containers/Page1";
import Page2 from "./containers/Page2";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
