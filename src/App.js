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
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage setWordToTranslate={setWordToTranslate} />
        </Route>
        <Route exact path="/result">
          <ResultPage wordToTranslate={wordToTranslate} />
        </Route>
      </Switch>
      <Footer />
    </>

  );
};

export default App;
