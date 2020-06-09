import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

import Navbar from "./components/navbar";
import HomePage from "./components/home-page";


const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <br />
        <HomePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
