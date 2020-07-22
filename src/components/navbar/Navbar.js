import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
  },
  img: {
    justifyContent: "flex-end",
}
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const backHome = () => {
    console.log("clicked");
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <FontAwesomeIcon className={classes.icon} icon={faDog} size="lg" />
            <Link className={classes.link} href="#" onClick={backHome}>
              Dog Face Mash
            </Link>
            </Typography>
            <div className={classes.img}>
            <Link href="#">
            <img className={classes.img} src="github-logo.png" alt="github logo"></img></Link>
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
