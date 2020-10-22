import { push } from "../connected-react-router";

export default {
  go(url) {
    return push(url);
  },
};
