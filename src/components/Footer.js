import React from "react";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#11ad26",
    opacity: 0.7,
    height: 50,
    marginTop: 50,
    padding: 40,
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h5" color="#e6f0e7" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Kids Translator Card
        </Link>
        {" from Ana. Jessica. Vicky. 2021"}
      </Typography>
    </div>
  );
};

export default Footer;
