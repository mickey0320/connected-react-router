import { CHANGE_URL } from "./constants";

const connectedRouter = (history) => {
  const defaultState = {
    location: history.location,
    action: history.action,
  };
  return (state = defaultState, action) => {
    if (action.type === CHANGE_URL) {
      return {
        ...state,
        location: action.payload.location,
        action: action.payload.action,
      };
    }
    return state;
  };
};

export default connectedRouter;
