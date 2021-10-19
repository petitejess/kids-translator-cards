import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

const App = () => {
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
