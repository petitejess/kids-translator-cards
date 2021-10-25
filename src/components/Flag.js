import React, { useState, useEffect } from "react";

const Flag = ({ languageName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [completeData, setCompleteData] = useState([]);
  const [flagIcon, setFlagIcon] = useState("");
  useEffect(() => {
    setFlagIcon(languageName.toLowerCase());
    // Get flag image
    fetch(`https://restcountries.com/v3.1/lang/${flagIcon}`)
      .then((response) => response.json())
      .then((data) => {
        setCompleteData(data[0].flag);
        console.log(data[0].flag);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  !isLoaded && setIsLoaded(true);

  return <div>{languageName && <div>{completeData}</div>}</div>;
};

export default Flag;
