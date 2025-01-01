import React from "react";
import ReactDOM from "react-dom/client";
// component
import App from "src/App";
// style
import "./index.scss";
// store

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
