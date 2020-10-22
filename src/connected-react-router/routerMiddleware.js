import { PUSH } from "./constants";

export default (history) => {
  return ({ dispatch, getState }) => {
    return (next) => {
      return (action) => {
        if (action.type === PUSH) {
          const { method, url } = action.payload;
          history[method](url);
        } else {
          next(action);
        }
      };
    };
  };
};
