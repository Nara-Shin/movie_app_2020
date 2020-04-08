import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// react 의 특징 //
// jsx = javascript + html
// react application 은 한 번에 하나의 component 만 rendering 할 수 있음
// 모든 것은 app안에 들어가야함.
ReactDOM.render(<App />, document.getElementById("root"));
