import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";

const useStyles = makeStyles({
  hero: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/image/mario.jpg) no-repeat top center",
    height: 300,
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

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      {/* <div className={classes.header}>
        <Button variant="contained" className={classes.headerButton}>
          Login
        </Button>
        <Button variant="contained" className={classes.headerButton}>
          Signup
        </Button>
      </div> */}
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className={classes.break}></div>
          <div className={classes.heroText}>
            <Typography align="center" variant="h2" component="div">
              Kids Translator Cards
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default Header;
