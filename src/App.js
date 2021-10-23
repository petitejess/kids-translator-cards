import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import "./styles/index.scss";
// import { getClipart, getCountryFlagData, filterBadWords } from './utils/utils.js';


const App = () => {
  const [wordToTranslate, setWordToTranslate] = useState('');
  const [translateFrom, setTranslateFrom] = useState('');
  const [translateTo, setTranslateTo] = useState('');
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            setWordToTranslate={setWordToTranslate}
            setTranslateFrom={setTranslateFrom}
            setTranslateTo={setTranslateTo}
          />
        </Route>
        <Route exact path="/result">
          <ResultPage
            wordToTranslate={wordToTranslate}
            translateFrom={translateFrom}
            translateTo={translateTo}
          />
        </Route>
      </Switch>
      <Footer />
    </>

  );
};

export default App;
