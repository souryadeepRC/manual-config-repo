import { BrowserRouter } from "react-router";
// library
import { Box } from "@mui/material";
// components
// store
// styles
import "./App.scss";

function App() {
  const appTheme = "dark";
  return (
    <BrowserRouter>
      <Box
        data-testid="app-container"
        width={"100%"}
        height={"100%"}
        data-theme={appTheme}
      >
        <div>TaxCalculator</div>
      </Box>
    </BrowserRouter>
  );
}

export default App;
