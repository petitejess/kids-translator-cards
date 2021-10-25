// // create getCoutryFlagData function with API code
// function getCountryFlagData() {
//     fetch("https://country-facts.p.rapidapi.com/all", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "country-facts.p.rapidapi.com",
//             "x-rapidapi-key": "fb95cae4c5mshcc1e2ab58d6091dp189153jsne2344d05a8f7"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// };


// // create getClipart function with API code
// function getClipart() {
//     fetch("https://designious-svg-library1.p.rapidapi.com/api/files/search?keyword=*&folder=Designious%2FSVG%2FNature&per_page=1&page=1", {
//         "method": "GET",
//         "headers": {
//             "accept": "application/json",
//             "content-type": "application/json",
//             "authorization": "Bearer {YOUR_AUTH_KEY}",
//             "x-rapidapi-host": "designious-svg-library1.p.rapidapi.com",
//             "x-rapidapi-key": "fb95cae4c5mshcc1e2ab58d6091dp189153jsne2344d05a8f7"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// };

function getClipart() {
  const url = new URL(
    "https://apiv1.designious.com/api/files/search"
  );

  let params = {
    "keyword": "*",
    "folder": "Designious/SVG/Nature",
    "per_page": "1",
    "page": "1",
  };
  Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

  let headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  fetch(url, {
    method: "GET",
    headers,
  }).then(response => response.json());
};

// // create filterBadWords function with API code
// function filterBadWords() {
//     fetch("https://neutrinoapi-bad-word-filter.p.rapidapi.com/bad-word-filter", {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/x-www-form-urlencoded",
//             "x-rapidapi-host": "neutrinoapi-bad-word-filter.p.rapidapi.com",
//             "x-rapidapi-key": "fb95cae4c5mshcc1e2ab58d6091dp189153jsne2344d05a8f7"
//         },
//         "body": {
//             "content": "This text does not actually contain any bad words!",
//             "censor-character": "*"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// };

const formatInput = (input) => {
  return input.trim().split(" ")[0].toLowerCase();
};

// export the above functions
export {
    // getCountryFlagData,
    getClipart,
    // filterBadWords,
    // getTranslation,
    formatInput
};
