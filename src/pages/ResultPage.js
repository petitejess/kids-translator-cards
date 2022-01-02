import qs from "qs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Flag from "../components/Flag";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles(() => ({
  bigBox: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  col: {
    borderStyle: "solid",
    width: 300,
    height: 200,
  },
  arrow: {
    color: "success !important",
    margin: "auto",
  },
  middle: {
    alignSelf: "center",
    width: 300,
    height: 200,
    display: "grid",
    placeItems: "center",
  },
  expText: {
    borderStyle: "solid",
    textAlign: "center",
    maxWidth: "1000px",
    margin: " 1.5rem auto",
    border: "2px solid #000",
    height: 300,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    direction: "row",
    width: 100,
    margin: "0px 10px 0px 10px !important",
  },
  flagImage: {
    display: "inline-block",
    maxHeight: "150px",
    width: "auto",
    margin: "0 auto",
  },
  panel: {
    backgroundColor: "whitesmoke",
    width: 300,
    minHeight: 400,
    margin: 10,
    marginTop: 100,
    padding: 30,
    border: "solid 1px gray",
    justifyContent: "center",
    textAlign: "center",
  },
  spacer: {
    display: "block",
    height: 40,
  },
}));

const ResultPage = ({ wordToTranslate, translateFrom, translateTo }) => {
  const classes = useStyles();
  const history = useHistory();
  const [translateResult, setTranslateResult] = useState("");
  const [imageQuery, setImageQuery] = useState("");
  const [languages, setLanguages] = useState([]);

  const translateApiOption = (wordToTranslate, translateFrom, translateTo) => {
    return {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      data: qs.stringify({
        q: `${wordToTranslate}`,
        source: `${translateFrom}`,
        target: `${translateTo}`,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "1acf301addmsh1cf3ba4f25f1c0dp10e434jsn0c3fee614769",
      },
    };
  };

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

    axios
      .request(translateApiOption(wordToTranslate, translateFrom, translateTo))
      .then((response) =>
        setTranslateResult(response.data.data.translations[0].translatedText)
      )
      .catch((err) => console.log(err));

    translateResult && translateFrom === "en"
      ? setImageQuery(wordToTranslate)
      : translateTo === "en"
      ? setImageQuery(translateResult)
      : translateApiOption(wordToTranslate, translateFrom, "en") &&
        setImageQuery(translateResult);

    // // Use the below to save the API calls
    // setTranslateResult("chicken");
    // setImageQuery("chicken");
  }, [wordToTranslate, translateFrom, translateTo, translateResult]);

  const handleResultOnClick = () => {
    history.push("/");
  };

  return (
    <>
      <Header title={translateResult} imageQuery={imageQuery} />

      <div className={classes.bigBox}>
        {/* Column left */}
        <Box className={classes.panel} order="1" p={6} m={2}>
          <Typography variant="h3">{wordToTranslate}</Typography>

          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>

          {translateFrom && languages.length > 0 && (
            <Flag
              languageName={
                languages.filter((lang) => lang["code"] === translateFrom)[0][
                  "language"
                ]
              }
            />
          )}
        </Box>

        {/* <h2>{console.log(languages)}</h2> */}

        {/* Column middle */}
        <Box className={classes.middle} order="2" p={1} m={2}>
          <div className={classes.panelMini}>
            <ArrowForwardIcon
              sx={{ height: 100, width: 100, color: "#16c92e " }}
              className={classes.arrow}
            />
          </div>
        </Box>

        {/* Column right */}
        <Box className={classes.panel} order="3" p={6} m={2}>
          <Typography variant="h3">{translateResult}</Typography>

          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>

          {translateTo && languages.length > 0 && (
            <Flag
              languageName={
                languages.filter((lang) => lang["code"] === translateTo)[0][
                  "language"
                ]
              }
            />
          )}
        </Box>
      </div>

      {/* Button by the end */}
      <div className={classes.btnContainer}>
        <Button
          className={classes.btn}
          onClick={handleResultOnClick}
          variant="contained"
          color="error"
          startIcon={<RestartAltIcon />}
        >
          Restart
        </Button>
      </div>
    </>
  );
};

export default ResultPage;
