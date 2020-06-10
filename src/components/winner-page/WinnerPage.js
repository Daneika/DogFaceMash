import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import PlayAgain from "../play-again";

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
          <img
            src={process.env.PUBLIC_URL + `/images/Dog${winner}.jpg`}
            alt="Dog"
          />
        </Grid>
        <Grid item className={classes.item} xs={12}>
          <PlayAgain/>
        </Grid>
      </Grid>
    </div>
  );
}

export default WinnerPage;
