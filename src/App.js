import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import Navbar from "./components/navbar"

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
    </ThemeProvider>
  );
}

export default App;
