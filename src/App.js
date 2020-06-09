import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

import Navbar from "./components/navbar";
import HomePage from "./components/home-page";
import GamePage from "./components/game-page";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <br />
        <Switch>
          <Route path="/games">
            <GamePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
