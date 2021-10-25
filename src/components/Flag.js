import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flagImage: {
    display: "inline-block",
    maxHeight: "150px",
    width: "auto",
    margin: "0 auto",
  },
});
const Flag = ({ languageName }) => {
  const [completeData, setCompleteData] = useState([]);
  const classes = useStyles();

  // Get flag image
  useEffect(() => {
    // Get flag image
    fetch(`https://restcountries.com/v3.1/lang/${languageName.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      languageName === "English"
      ? setCompleteData(data[57].flags.png)
      : setCompleteData(data[0].flags.png);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [languageName]);

  return (
    <div style={{ textAlign: "center" }}>
      <img className={classes.flagImage} src={completeData} alt="flag" />
    </div>
  );
};

export default Flag;
