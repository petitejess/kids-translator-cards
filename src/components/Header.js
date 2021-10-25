import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";

const useStyles = makeStyles({
  hero: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat top center",
    height: 400,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    alignItems: "center",
    opacity: 0.83,
  },
  heroText: {
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
  headerButton: { height: 40 },
  appBar: {
    background: "transparent",
  },
  break: {
    display: "block",
    height: 150,
  },
});

function Header({ title, imageQuery }) {
  const [wordImageUrl, setWordImageUrl] = useState("/image/mario.jpg");

  const classes = useStyles();

  useEffect(() => {
    imageQuery &&
      fetch(
        `https://pixabay.com/api/?key=23980639-82f3019418c4f0fe6e840a327&q=${imageQuery}&image_type=illustration&safesearch=true&min_width=1280`
      )
        .then((response) => response.json())
        .then(
          (data) =>
            data.hits.length > 0 && setWordImageUrl(data.hits[0].largeImageURL)
        )
        .catch((err) => console.log(err));
  }, [imageQuery]);

  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${wordImageUrl})` }}
    >
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className={classes.break}></div>
          <div className={classes.heroText}>
            <Typography align="center" variant="h2" component="div">
              {title}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default Header;
