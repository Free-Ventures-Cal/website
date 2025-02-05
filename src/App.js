import React from "react";
import ContactFormPage from "./Components/ContactFormPage.js";
import Fellowship from "./Components/Fellowship";
import Footer from "./Components/Footer.js";
import GA from "./Components/GoogleAnalytics";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Partners from "./Components/Partners.js";
import Portfolio from "./Components/Portfolio.js";
import Program from "./Components/Program.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import Team from "./Components/Team.js";

import { Route, BrowserRouter as Router } from "react-router-dom";

import FairInfo from "./Components/FairInfo.js";
import "./styles/App.css";

function App() {
  return (
    <Router>
      {GA.init() && <GA.RouteTracker />}
      <ScrollToTop>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/contact" component={ContactFormPage} />
          {/* <Route exact path="/apply" component={Apply} /> */}
          <Route path='/apply' component={() => {
            window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSdwNBolowjt1BQgp-L-h1bkbFEx9z1ud4LGK9V16k03tFtLpw/viewform');
            }}
          />
          <Route exact path="/fellowship" component={Fellowship} />
          <Route exact path="/fairinfo" component={FairInfo} />
          <Route
            exact
            path="/portfolio"
            render={(props) => (
              <Portfolio {...props} sideBarTabName={"Fall 2020"} />
            )}
          />
          <Route exact path="/program" component={Program} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
