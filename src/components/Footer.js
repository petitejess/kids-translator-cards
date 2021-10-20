import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#1f5c05",
    opacity: 0.7,
    height: 50,
    marginTop: 250,
    padding: 40,
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h5" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Kids Translator Card
        </Link>
        {" from Anna. Jessica. Vicky. 2020"}
      </Typography>
    </div>
  );
};

export default Footer;
