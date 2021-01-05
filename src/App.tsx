import React from "react";
import Home from "./Views/Home/index";
import Category from "./Views/Category/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="men" element={<Category />} />
            <Route path="women" element={<Category />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
