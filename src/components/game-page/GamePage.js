import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import CompareDogs from "./compare-dogs/CompareDogs";

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
  subTitle: {
    textAlign: "center",
    fontWeight: "medium",
  },
}));

const pickRandomDog = (pickedDogs) => {
  const newDog = Math.floor(Math.random() * 16) + 1;
  if (pickedDogs.includes(newDog)) {
    return pickRandomDog(pickedDogs);
  } else {
    return newDog;
  }
};

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

  useEffect(() => {
    const dogs = Array.from({ length: 4 }).reduce(
      (acc) => [...acc, pickRandomDog(acc)],
      []
    );
    const [dog1, dog2, ...restOfRound] = dogs;
    setCurrMatchUp({ dog1, dog2 });
    setCurrRoundDogs(restOfRound);
  }, []);

  const [{ dog1, dog2 }, setCurrMatchUp] = useState({});
  const [currRoundDogs, setCurrRoundDogs] = useState([]);
  const [nextRoundDogs, setNextRoundDogs] = useState([]);
  const [currRound, setCurrRound] = useState("");

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" component="h5">
            Which is the cutest dog?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.subTitle} variant="h5" component="h6">
            {currRound}
          </Typography>
        </Grid>

        <CompareDogs dogIndex1={dog1} dogIndex2={dog2} onNext={handleNext} />
      </Grid>
    </div>
  );
}

export default GamePage;
