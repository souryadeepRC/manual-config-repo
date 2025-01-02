import React from "react";
import ReactDOM from "react-dom/client";
// component
import App from "./App";
// style
import "./index.scss";

const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root node not found");
}
