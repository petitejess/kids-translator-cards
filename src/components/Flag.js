import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";

const useStyles = makeStyles({
  flagImage: {
    display: "inline-block",
    maxHeight: "150px",
    width: "auto",
    margin: "0 auto",
  },
  flagContainer: {
    display: "flex",
    margin: "0px auto",
    textAlign: "center",
    justifyContent: "center",
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
        languageName === "English"
          ? setCompleteData(data[57].flags.png)
          : setCompleteData(data[0].flags.png);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [languageName]);

  return (
    <div className={classes.flagContainer}>
      {typeof completeData == "string" && (
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 150, height: 150 }}
          src={completeData}
        />
      )}
    </div>
  );
};

export default Flag;
