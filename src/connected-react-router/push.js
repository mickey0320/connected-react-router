import { PUSH } from "./constants";

export default (url) => {
  return {
    type: PUSH,
    payload: {
      method: "push",
      url,
    },
  };
};
