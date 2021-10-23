import React, { useState, useEffect } from "react";

const Flag = ({ countryCode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [completeData, setCompleteData] = useState([]);
  const [flagImgUrl, setFlagImgUrl] = useState("");

  useEffect(() => {
    // Get flag image
    fetch("https://country-facts.p.rapidapi.com/all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "country-facts.p.rapidapi.com",
        "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setCompleteData(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {/* {isLoaded && countryCode && (
        <img
          src={
            completeData.filter((country) => country.cca2 === countryCode)[0]
              .flag
          }
          alt="Country Flag"
          style={{ width: "30px" }}
        />
      )} */}
    </div>
  );
};
//     </div>
//   );
// };

export default Flag;
