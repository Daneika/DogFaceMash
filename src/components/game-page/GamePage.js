import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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
    Width: "75%",
    maxWidth: 1000,
  },
  title: {
    textAlign: "center",
  },
}));

const pickRandomDog = () => Math.floor(Math.random() * 16) + 1;

function GamePage() {
  const history = useHistory();
  const classes = useStyles();

  const handleNext = (index) => {
    console.log(currRoundDogs, nextRoundDogs);
    if (currRoundDogs.length === 0) {
      if (nextRoundDogs.length === 0) {
        history.push(`/winner/${index}`);
      } else {
        const [dog1, dog2, ...restOfNextRound] = [...nextRoundDogs, index];
        setCurrMatchUp({ dog1, dog2 });
        setCurrRoundDogs(restOfNextRound);
        setCurrRound("Final Round: Now compare your two chosen dogs...");
        setNextRoundDogs([]);
      }
    } else {
      setNextRoundDogs([...nextRoundDogs, index]);
      const [dog1, dog2, ...restOfCurrRound] = currRoundDogs;
      setCurrMatchUp({ dog1, dog2 });
      setCurrRoundDogs(restOfCurrRound);
    }
  };

  const [{ dog1, dog2 }, setCurrMatchUp] = useState({
    dog1: pickRandomDog(),
    dog2: pickRandomDog(),
  });
  const [currRoundDogs, setCurrRoundDogs] = useState([
    pickRandomDog(),
    pickRandomDog(),
  ]);
  const [nextRoundDogs, setNextRoundDogs] = useState([]);
  const [currRound, setCurrRound] = useState("");

  return (
    <div className={classes.root}>
      <Grid
        className={clsx(classes.container, classes.grid)}
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" component="h5">
            Which is the cutest dog?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>{currRound}</Typography>
        </Grid>

        <CompareDogs dogIndex1={dog1} dogIndex2={dog2} onNext={handleNext} />
      </Grid>
    </div>
  );
}

export default GamePage;
