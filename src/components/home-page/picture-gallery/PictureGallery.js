import React from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 900,
  },
}));

export default function PictureGallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {Array.from({ length: 16 }).map((ignore, index) => (
          <GridListTile key={`/images/Dog${index + 1}.jpg`} cols={1}>
            <img
              src={process.env.PUBLIC_URL + `/images/Dog${index + 1}.jpg`}
              alt={`Dog${index + 1}`}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
