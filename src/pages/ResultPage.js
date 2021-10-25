import qs from "qs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";

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
}));

const ResultPage = ({ wordToTranslate, translateFrom, translateTo }) => {
  const classes = useStyles();
  const [translateResult, setTranslateResult] = useState('');
  const [imageQuery, setImageQuery] = useState('');
  const history = useHistory();

  // const translateApiOption = (wordToTranslate, translateFrom, translateTo) => {
  //   return ({
  //     method: 'POST',
  //     url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  //     data: qs.stringify({
  //       q: `${wordToTranslate}`,
  //       source: `${translateFrom}`,
  //       target: `${translateTo}`
  //     }),
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "accept-encoding": "application/gzip",
  //       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  //       "x-rapidapi-key": "1acf301addmsh1cf3ba4f25f1c0dp10e434jsn0c3fee614769"
  //     }
  //   });
  // };

  useEffect(() => {
    // axios.request(translateApiOption(wordToTranslate, translateFrom, translateTo))
    // .then(response => setTranslateResult(response.data.data.translations[0].translatedText))
    // .catch(err => console.log(err));

    setTranslateResult('chicken');
    setImageQuery('chicken');

    // translateResult && translateFrom === "en"
    //   ? setImageQuery(wordToTranslate)
    //   : translateTo === "en"
    //     ? setImageQuery(translateResult)
    //     : translateApiOption(wordToTranslate, translateFrom, "en") && setImageQuery(translateResult);
  }, [wordToTranslate, translateFrom, translateTo, translateResult]);

  const handleResultOnClick = () => {
    history.push('/');
  };

  return (
    <>
      <Header title={translateResult} imageQuery={imageQuery} />

      <div className={classes.bigBox}>
        {/* Column left */}
        <Box className={classes.col} order="1" p={1} m={2}>
          <Typography variant="h3">{wordToTranslate}</Typography>
          <div>Flag</div>
        </Box>

        {/* Column middle */}
        <Box className={classes.middle} order="2" p={1} m={2}>
          <DoubleArrowIcon className={classes.arrow} />
        </Box>

        {/* Column right */}
        <Box className={classes.col} order="3" p={1} m={2}>
          <Typography variant="h3">{translateResult}</Typography>
          <div>Flag</div>
        </Box>
      </div>

      {/* Explaination text-box */}
      <Box className={classes.expText}>
        <Typography variant="h6">Explaination</Typography>
      </Box>
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

        <Button
          className={classes.btn}
          onClick={() => console.log("you clicked me")}
          variant="contained"
          color="secondary"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default ResultPage;
