import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import Navbar from "./components/navbar"
import Title from "./components/title"

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
  <Navbar/>
  <br/>
  <Title/>
    </ThemeProvider>
  );
}

export default App;
