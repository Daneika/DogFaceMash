import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
    >
      Play Again
    </Button>
  );
}

export default PlayAgain;
