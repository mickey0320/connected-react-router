import React, { useEffect, useContext } from "react";
import { Router } from "react-router";
import { ReactReduxContext } from "react-redux";

import { CHANGE_URL } from "./constants";

const ConnectedRouter = (props) => {
  const { history } = props;
  const { store } = useContext(ReactReduxContext);
  useEffect(() => {
    // 监听url变化
    history.listen(({ action, location }) => {
      store.dispatch({
        type: CHANGE_URL,
        payload: {
          location,
          action,
        },
      });
    });
  }, []);
  return <Router history={history}>{props.children}</Router>;
};

export default ConnectedRouter;
