import React from 'react';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Team from './Components/Team.js';
import Partners from './Components/Partners.js';
import Footer from './Components/Footer.js';
import ContactFormPage from './Components/ContactFormPage.js';
import Apply from './Components/Apply.js';
import FiatLux from './Components/FiatLux.js';
import Portfolio from './Components/Portfolio.js';
import Program from './Components/Program.js';
import ScrollToTop from './Components/ScrollToTop.js';
import GA from './Components/GoogleAnalytics';


import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/App.css';

function App() {


  return (
      <Router>
        { GA.init() && <GA.RouteTracker /> }
        <ScrollToTop>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/contact" component={ContactFormPage} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/fiatlux" component={FiatLux} />
          <Route exact path="/portfolio" render={(props) => <Portfolio {...props} sideBarTabName={"Fall 2020"} />} />
          <Route exact path="/program" component={Program} />
          <Footer />
        </div>
        </ScrollToTop>
      </Router>
  );
}

export default App;
