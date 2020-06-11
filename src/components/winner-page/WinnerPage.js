import React from "react";
import { useParams } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import PlayAgain from "./play-again";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dogImage: {
    width: 700,
    height: 550,
    backgroundSize: "cover",
  },
}));

function WinnerPage() {
  const classes = useStyles();
  const { winner } = useParams();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item className={classes.item} xs={12}>
          <FontAwesomeIcon icon={faCrown} size="9x" />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography variant="h2" component="h3">
            Winner!
          </Typography>
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Typography variant="h6" component="h6">
            You have chosen the cutest dog as:
          </Typography>
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <Grow in={true} timeout={1000}>
            <img
              className={classes.dogImage}
              src={process.env.PUBLIC_URL + `/images/Dog${winner}.jpg`}
              alt="Dog"
            />
          </Grow>
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <PlayAgain />
        </Grid>
      </Grid>
    </div>
  );
}

export default WinnerPage;
