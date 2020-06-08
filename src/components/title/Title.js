import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
}));

export default function Title() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={12}>
        <Grid container className={classes.container}>
          <Grid item className={classes.container} xs={12}>
            <Typography className={classes.title} color="black" gutterBottom>
              Welcome to Dog Face Mash
            </Typography>
          </Grid>
          <Grid item className={classes.container} xs={12}>
            <Typography variant="h6" component="h6">
              The place to find and compare the cutest dogs...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.container} xs={12}>
        <Button variant="contained" color="secondary" size="large">
          Start
        </Button>
      </Grid>
    </Grid>
  );
}
