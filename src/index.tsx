import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ExampleContext from "./ExampleContext";
import ExampleReducer from "./ExampleReducer";
import Calendar from "./Calendar";
import ExamplePerformance from "./ExamplePerformance";
import Example from "./ExampleMemo";
import ExampleUseRef from "./ExampleUseRef";
import ExampleProductDetail from "./ExampleProductDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ExampleUseRef /> */}
    {/* <Example /> */}
    {/* <App /> */}
    {/* <ExampleContext></ExampleContext> */}
    <ExampleProductDetail></ExampleProductDetail>
    {/* <ExamplePerformance></ExamplePerformance> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
