import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Select,
  Typography,
  MenuItem,
  InputLabel,
  TextareaAutosize,
  Button,
  Container,
} from "@mui/material";
import { ThemeContext } from "@mui/styled-engine";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  col: {
    textAlign: "center",
    justifyContent: "center",
    height: "70%",
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
    minHeight: "70%",
    marginTop: "20px",
    marginBottom: "50px",
  },
  panel: {
    backgroundColor: "whitesmoke",
    width: 300,
    height: 500,
    margin: 10,
    marginTop: 150,
    padding: 30,
    border: "solid 1px gray",
  },
  panelMini: {
    backgroundColor: "none",
    minWidth: 10,
    height: 500,
    margin: 10,
    marginTop: 150,
    padding: 30,
    justifyContent: "center",
    verticalAlign: "center",
  },
  btn: {
    backgroundColor: "#16c92e !important",
    float: "right",
    marginTop: 420,
    "&:hover": {
      backgroundColor: "#42f5a7 !important",
    },
  },
  arrow: {
    color: "success !important",
    fontSize: "3.5rem",
    position: "center",
    marginTop: "20vh",
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
    <Container>
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

          <div>Flag</div>

          <TextareaAutosize
            className={classes.langTextArea}
            aria-label="minimum height"
            minRows={5}
            placeholder="Enter Text"
          />
        </div>

        {/* Arrow Icon */}
        <div className={classes.panelMini}>
          <div className={classes.arrow}>
            <DoubleArrowIcon />
          </div>
        </div>

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

          <Button
            className={classes.btn}
            onClick={() => console.log("you clicked me")}
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Translate
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
