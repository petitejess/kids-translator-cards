import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../components/Header";
import Flag from "../components/Flag";
import { formatInput } from "../utils/utils";
import Filter from "bad-words";

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
    marginTop: 100,
    padding: 30,
    border: "solid 1px gray",
  },
  panelMini: {
    alignSelf: "center",
    minWidth: 10,
    height: 500,
    margin: 10,
    marginTop: 100,
    padding: 30,
    display: "grid",
    placeItems: "center",
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
    margin: "auto",
  },
}));

const HomePage = ({ setWordToTranslate, setTranslateFrom, setTranslateTo }) => {
  const classes = useStyles();
  const history = useHistory();
  const filter = new Filter();
  const [languages, setLanguages] = useState(["Vietnamese", "English"]);
  const [from, setFrom] = useState("Vietnamese");
  const [to, setTo] = useState("English");

  // Use data from json file so I don't exceed the quota again XD
  useEffect(() => {
    fetch("availableLanguages.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setLanguages(data.text);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  const handleFromChange = (e) => {
    console.log("From Changed: " + e.target.value);
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    console.log("To Changed: " + e.target.value);
    setTo(e.target.value);
  };

  const handleChangeWordInput = (e) => {
    // Trim and take only the first word lowercase
    let userInput = formatInput(e.target.value);
    setWordToTranslate(filter.clean(userInput));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Map language name back to code
    const fromLang = languages.filter((lang) => lang["language"] === from);
    const toLang = languages.filter((lang) => lang["language"] === to);

    // Send the language code back to App to send to Result Page
    setTranslateFrom(fromLang[0]["code"]);
    setTranslateTo(toLang[0]["code"]);

    history.push("/result");
  };

  return (
    <div>
      <Header title={"Kids Translator Card"} imageQuery="" />

      <Container>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* Column left */}
          <div className={classes.section}>
            <div className={classes.panel}>
              <Typography variant="h3">From</Typography>
              <InputLabel id="from-select-label"></InputLabel>

              {languages && (
                <>
                  <div>
                    <Select
                      className={classes.langSelect}
                      labelId="from-select-label"
                      id="from-select"
                      value={from}
                      label="From"
                      onChange={handleFromChange}
                    >
                      {languages.map((lang) => (
                        <MenuItem
                          key={`${lang["code"]}`}
                          value={lang["language"]}
                        >
                          {lang["language"]}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </>
              )}

              {/* Get the Flag from What Language select */}
              <div>
                <Flag languageName={from} />
              </div>
              <TextareaAutosize
                required
                className={classes.langTextArea}
                aria-label="minimum height"
                minRows={5}
                placeholder="Enter Text"
                onChange={handleChangeWordInput}
              />
            </div>

            {/*  Column middle Arrow Icon */}
            <div className={classes.panelMini}>
              <DoubleArrowIcon className={classes.arrow} />
            </div>

            {/* Column right */}
            <div className={classes.panel}>
              <Typography variant="h3">To</Typography>
              <InputLabel id="to-select-label"></InputLabel>

              {languages && (
                <>
                  <div>
                    <Select
                      className={classes.langSelect}
                      labelId="to-select-label"
                      id="to-select"
                      value={to}
                      label="To"
                      onChange={handleToChange}
                    >
                      {languages.map((lang) => (
                        <MenuItem
                          key={`${lang["code"]}`}
                          value={lang["language"]}
                        >
                          {lang["language"]}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </>
              )}

              <div>
                <Flag languageName={to} />
              </div>

              <Button
                className={classes.btn}
                type="submit"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Translate
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default HomePage;
