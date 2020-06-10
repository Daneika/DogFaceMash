import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import clsx from "clsx";

import CompareDogs from "../compare-dogs/CompareDogs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    Width:"75%",
    maxWidth: 1000
  },
  title: {
    textAlign: "center",
  },
}));

function GamePage() {
  const history = useHistory();
  const classes = useStyles();

  const handleNext = (index) => {
    console.log(currRound, nextRound);
    if (currRound.length === 0) {
      if (nextRound.length === 0) {
        history.push(`/winner/${index}`);
      } else {
        const [dog1, dog2, ...restOfNextRound] = [...nextRound, index];
        setCurrMatchUp({ dog1, dog2 });
        setCurrRound(restOfNextRound);
        setNextRound([]);
      }
    } else {
      setNextRound([...nextRound, index]);
      const [dog1, dog2, ...restOfCurrRound] = currRound;
      setCurrMatchUp({ dog1, dog2 });
      setCurrRound(restOfCurrRound);
    }
  };

  const [{ dog1, dog2 }, setCurrMatchUp] = useState({ dog1: 1, dog2: 2 });
  const [currRound, setCurrRound] = useState([3, 4]);
  const [nextRound, setNextRound] = useState([]);

  return (
    <div className={classes.root}>
      <Grid
        className={clsx(classes.container, classes.grid)}
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <h1 className={classes.title}>Which dog is cuter?</h1>
        </Grid>
        <CompareDogs dogIndex1={dog1} dogIndex2={dog2} onNext={handleNext} />
      </Grid>
    </div>
  );
}

export default GamePage;
