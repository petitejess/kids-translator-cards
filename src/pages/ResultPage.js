import qs from "qs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Flag from "../components/Flag";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
        "x-rapidapi-key": "d30b4172b7msh84a3ff6e92409d8p14e22fjsn168c933d772a",
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

  console.log(translateResult);

  const handleResultOnClick = () => {
    history.push("/");
  };

  return (
    <>
      <Header title={translateResult} imageQuery={imageQuery} />

      <div className={classes.bigBox}>
        {/* Column left */}
        <Box className={classes.col} order="1" p={1} m={2}>
          <Typography variant="h3">{wordToTranslate}</Typography>

          {translateFrom && languages.length > 0 &&
          <Flag languageName={languages.filter((lang) => lang["code"] === translateFrom)[0]["language"]} />}
        </Box>

        {/* <h2>{console.log(languages)}</h2> */}

        {/* Column middle */}
        <Box className={classes.middle} order="2" p={1} m={2}>
          <DoubleArrowIcon className={classes.arrow} />
        </Box>

        {/* Column right */}
        <Box className={classes.col} order="3" p={1} m={2}>
          <Typography variant="h3">{translateResult}</Typography>

          {translateTo && languages.length > 0 && <Flag languageName={languages.filter((lang) => lang["code"] === translateTo)[0]["language"]} />}
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
