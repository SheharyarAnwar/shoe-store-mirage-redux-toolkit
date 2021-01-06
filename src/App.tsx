import React from "react";
import Home from "./Views/Home/index";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/">
            <Navigate to="/home" />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Home />} />
          <Route path="/women" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
