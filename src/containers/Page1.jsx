import React from "react";
import { connect } from "react-redux";

import actions from "../store/actions";

const Page1 = (props) => {
  return (
    <div>
      <p>page1</p>
      <button
        onClick={() => {
          props.go("/page2");
        }}
      >
        跳转页面
      </button>
    </div>
  );
};

export default connect((state) => ({}), actions)(Page1);
