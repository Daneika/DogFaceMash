import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./playagain.css";

function PlayAgain() {
  const history = useHistory();
  const playGameAgain = () => {
    console.log("clicked");
    history.push("/");
  };
  return (
    <Button
      onClick={playGameAgain}
      variant="contained"
      color="secondary"
      size="large"
      className="glowing-button glowing"
    >
      Play Again
    </Button>
  );
}

export default PlayAgain;
