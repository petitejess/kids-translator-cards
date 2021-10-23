import qs, { stringify } from "qs";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
// import Stack from "@mui/material/Stack";
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

const ResultPage = ({ wordToTranslate }) => {
  const classes = useStyles();
  const [translateResult, setTranslateResult] = useState('');
  
  const [wordImageUrl, setWordImageUrl] = useState('');

  useEffect(() => {
    // fetch(`https://pixabay.com/api/?key=23980639-82f3019418c4f0fe6e840a327&q=${wordToTranslate}&image_type=illustration`)
    //   .then(response => response.json())
    //   .then(data => setWordImageUrl(data.hits[0].previewURL))
    //   .catch(err => console.log(err));
    
    setWordImageUrl('/image/mario.jpg');
  }, [wordToTranslate]);

  useEffect(() => {
    // fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "accept-encoding": "application/gzip",
    //     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //     "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
    //   },
    //   "body": {
    //     "q": "Hello, world!",
    //     "target": "es",
    //     "source": "en"
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.error(err);
    // });


    axios.request({
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      data: qs.stringify({
        q: "Hello, world!",
        source: "en",
        target: "es"
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
      }
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header title={"Put your word result value here"} bgImageUrl={wordImageUrl} />

      <div className={classes.bigBox}>
        {/* Column left */}
        <Box className={classes.col} order="1" p={1} m={2}>
          {/* <Typography variant="h3">Original word</Typography> */}
          <Typography variant="h3">{wordToTranslate}</Typography>
          <div>Flag</div>
        </Box>

        {/* Column middle */}
        <Box className={classes.middle} order="2" p={1} m={2}>
          <DoubleArrowIcon className={classes.arrow} />
        </Box>

        {/* Column right */}
        <Box className={classes.col} order="3" p={1} m={2}>
          <Typography variant="h3">Word</Typography>
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
          onClick={() => console.log("you clicked me")}
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
