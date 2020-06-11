import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dogImage: {
    width: 500,
    height: 400,
    backgroundSize: "cover",
    padding: 5,
  },
}));

export default function CompareDogs({ dogIndex1, dogIndex2, onNext }) {
  const classes = useStyles();
  return (
    <>
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
          onClick={() => onNext(dogIndex1)}
          variant="contained"
          color="primary"
          size="large"
        >
          Pick Me!
        </Button>
      </Grid>
      <Grid className={classes.container} item xs={6}>
        <Button
          onClick={() => onNext(dogIndex2)}
          variant="contained"
          color="primary"
          size="large"
        >
          Pick Me!
        </Button>
      </Grid>
    </>
  );
}
