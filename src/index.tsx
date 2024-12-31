import ReactDOM from "react-dom/client";
import App from "./App";
const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root node not found");
}
