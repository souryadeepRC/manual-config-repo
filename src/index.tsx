import React from "react";
import ReactDOM from "react-dom/client";
const App: React.FC = () => {
  return <div>React Project</div>;
};
const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.log("ERROR");
}
