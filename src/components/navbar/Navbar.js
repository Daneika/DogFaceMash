import React from "react";
// import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  link: {
    color: "inherit",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.container}>
          <div>
            <Link className={classes.link} href="/">
              <Typography variant="h6">
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faDog}
                  size="lg"
                />
                Dog Face Mash
              </Typography>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/Daneika/dog-face-mash">
              <img src="github-logo.png" alt="github logo"></img>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
