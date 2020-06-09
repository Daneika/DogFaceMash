import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    maxWidth: 1000,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  dogImage: {
    width: "100%",
  },

  title: {
    textAlign: "center",
  },
}));

export default function CompareDogs({ dogIndex1, dogIndex2, onNext }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, classes.root)}>
      <Grid
        className={clsx(classes.container, classes.grid)}
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <h1 className={classes.title}>Which dog is cuter?</h1>
        </Grid>
        <Grid className={classes.container} item xs={6}>
          <img
            className={classes.dogImage}
            src={process.env.PUBLIC_URL + `/images/Dog${dogIndex1}.jpg`}
            alt="Dog1"
          />
        </Grid>
        <Grid className={classes.container} item xs={6}>
          <img
            className={classes.dogImage}
            src={process.env.PUBLIC_URL + `/images/Dog${dogIndex2}.jpg`}
            alt="Dog2"
          />
        </Grid>
        <Grid className={classes.container} item xs={6}>
          <Button
            onClick={() => onNext(1)}
            variant="contained"
            color="secondary"
            size="large"
          >
            Pick Me!
          </Button>
        </Grid>
        <Grid className={classes.container} item xs={6}>
          <Button
            onClick={() => onNext(1)}
            variant="contained"
            color="secondary"
            size="large"
          >
            Pick Me!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
