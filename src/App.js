import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import { getClipart, getCountryFlagData, filterBadWords } from './utils/utils.js';

const App = () => {
  // useEffect function with the flag API function
  useEffect(() => {
    // getCountryFlagData();
    getTranslation();
    // getClipart();
    // filterBadWords();
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App

