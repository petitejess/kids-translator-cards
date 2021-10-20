import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Select,
  Typography,
  MenuItem,
  InputLabel,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { ThemeContext } from "@mui/styled-engine";

const useStyles = makeStyles((theme) => ({
  col: {
    textAlign: "center",
    justifyContent: "center",
    height: "100%",
    margin: "10px",
  },
  langSelect: {
    margin: 30,
    width: "60%",
  },
  langTextArea: {
    padding: 5,
    margin: 30,
    width: "80%",
    border: "solid 2px",
    borderRadius: 5,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    minHeight: "100%",
    marginTop: "50px",
    marginBottom: "50px",
  },
  panel: {
    backgroundColor: "whitesmoke",
    width: 500,
    height: 400,
    margin: 10,
    marginTop: 150,
    padding: 30,
    border: "solid 1px gray",
  },
  btn: {
    backgroundColor: "green !important",
    float: "right",
    marginTop: 420,
  },
}));

const HomePage = () => {
  // We need to useEffect here to call this API and populate the values
  // https://cloud.google.com/translate/docs/reference/rest/v2/languages
  const [languages, setLanguages] = useState(["Vietnamese", "English"]);
  const [from, setFrom] = useState("Vietnamese");
  const classes = useStyles();

  const handleFromChange = (e) => {
    console.log("From Changed: " + e.target.value);
    setFrom(e.target.value);
  };

  // For the flags you may be able to use this
  // https://fabian7593.github.io/CountryAPI/

  return (
    <div className={classes.section}>
      <div className={classes.panel}>
        <Typography variant="h5">From</Typography>
        <InputLabel id="from-select-label"></InputLabel>

        <div>
          <Select
            className={classes.langSelect}
            labelId="from-select-label"
            id="from-select"
            value={from}
            label="From"
            onChange={handleFromChange}
          >
            {languages.map((lang) => {
              return <MenuItem value={lang}>{lang}</MenuItem>;
            })}
          </Select>
        </div>

        <TextareaAutosize
          className={classes.langTextArea}
          aria-label="minimum height"
          minRows={5}
          placeholder="Enter Text"
        />
      </div>
      <div className={classes.panel}></div>
      <div className={classes.panel}>
        <Typography variant="h5">To</Typography>
        <InputLabel id="from-select-label"></InputLabel>

        <div>
          <Select
            className={classes.langSelect}
            labelId="from-select-label"
            id="from-select"
            value={from}
            label="From"
            onChange={handleFromChange}
          >
            {languages.map((lang) => {
              return <MenuItem value={lang}>{lang}</MenuItem>;
            })}
          </Select>
        </div>

        <div>Flag</div>

        <Button variant="contained" className={classes.btn}>
          Translate
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
