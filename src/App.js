import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

import Navbar from "./components/navbar";
import Title from "./components/title";
import PictureGallery from "./components/picture-gallery";

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
        <Title />
        <br/>
        <PictureGallery />
      </ThemeProvider>
    </div>
  );
}

export default App;
