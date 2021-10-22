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
import { ThemeContext } from "@mui/styled-engine";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../components/Header";
import { formatInput } from "../utils/utils";

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

const HomePage = ({ setWordToTranslate }) => {
  const history = useHistory();

  // We need to useEffect here to call this API and populate the values
  // https://cloud.google.com/translate/docs/reference/rest/v2/languages
  // Ok! :)
  // useEffect(() => {
  //   fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
  //     "method": "GET",
  //     "headers": {
  //       "accept-encoding": "application/gzip",
  //       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  //       "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(JSON.stringify(data)))
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }, []);

  // Use data from json file so I don't exceed the quota again XD
  useEffect(() => {
    fetch('availableLanguages.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setLanguages(data.data.languages.map(lang => lang["language"]));
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  // const [languages, setLanguages] = useState(["Vietnamese", "English"]);
  const [languages, setLanguages] = useState(['vi', 'en']);
  // const [from, setFrom] = useState("Vietnamese");
  const [from, setFrom] = useState('vi');
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  const handleFromChange = (e) => {
    console.log("From Changed: " + e.target.value);
    setFrom(e.target.value);
  };

  // For the flags you may be able to use this
  // https://fabian7593.github.io/CountryAPI/
  // Thank you! But the API url is currently down :(

  const handleChangeWordInput = (e) => {
    // Trim and take only the first word lowercase
    let userInput = formatInput(e.target.value);
    setWordToTranslate(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/result');
  };

  return (
    <div>
      <Header title={"Kids Translator Card"} />
      <Container>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* Column left */}
          <div className={classes.section}>
            <div className={classes.panel}>
              <Typography variant="h3">From</Typography>
              <InputLabel id="from-select-label"></InputLabel>

              {languages &&
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
                    {languages.map(lang =>
                      <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                    )}
                  </Select>
                </div>
                <div>Flag</div>
              </>}

              <TextareaAutosize
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
              <InputLabel id="from-select-label"></InputLabel>

              {languages &&
              <div>
                <Select
                  className={classes.langSelect}
                  labelId="from-select-label"
                  id="from-select"
                  value={from}
                  label="From"
                  onChange={handleFromChange}
                >
                  {languages.map(lang =>
                    <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                  )}
                </Select>
                {}
              </div>}
              <div>Flag</div>

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
