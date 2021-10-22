import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import "./styles/index.scss";
// import { getClipart, getCountryFlagData, filterBadWords } from './utils/utils.js';


const App = () => {
  const initialWord = "flower";
  const [wordToTranslate, setWordToTranslate] = useState(initialWord);
  const [wordImageUrl, setWordImageUrl] = useState(initialWord);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=23980639-82f3019418c4f0fe6e840a327&q=${wordToTranslate}&image_type=illustration`)
      .then(response => response.json())
      .then(data => setWordImageUrl(data.hits[0].pageURL))
      .catch(err => console.log(err));
  }, [wordToTranslate]);
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage setWordToTranslate={setWordToTranslate} />
        </Route>
        <Route exact path="/result">
          <ResultPage wordToTranslate={wordToTranslate} wordImageUrl={wordImageUrl} />
        </Route>
      </Switch>
      <Footer />
    </>

  );
};

export default App

