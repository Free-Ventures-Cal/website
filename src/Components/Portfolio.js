import React from "react";
import "./../styles/App.css";
import "./../styles/Portfolio.css";
import portfolioContent from "./../content/portfolio.js";
import PortfolioTab from "./PortfolioTab.js";

import GenericTop from "./GenericTop";
import GenericPage from "./GenericPage";

import SimpleSelect from "./Select.js";

class Portfolio extends React.Component {
  state = {
    sideBarTabName: "",
  };

  componentDidMount() {
    this.setState({
      sideBarTabName: "",
    });
    this.handleSideBarClick(this.state.sideBarTabName);
  }

  handleSideBarClick = (sideBarTabName) => {
    this.setState({
      sideBarTabName,
    });
  };

  render() {
    let selectOptions = [];

    let sideBarTabs = portfolioContent.batchList.map((batch) => {
      let activeLinkStyle = {};
      selectOptions.push(batch.batchName);

      if (this.state.sideBarTabName === batch.batchName) {
        activeLinkStyle = {
          backgroundColor: "#F1F1F1",
          color: "#67379A",
        };
      } else {
        activeLinkStyle = {};
      }

      return (
        <li
          onClick={() => {
            this.handleSideBarClick(batch.batchName);
          }}
          style={activeLinkStyle}
          key={batch.batchName}
        >
          {batch.batchName}
        </li>
      );
    });

    // simpleSelect only visible in the mobile view
    let simpleSelect = (
      <SimpleSelect
        options={selectOptions}
        placeholder={this.sideBarTabName}
        updateSelectedTabName={this.updateSelectedTabName}
        handleSideBarClick={this.handleSideBarClick}
      />
    );

    return (
      <section>
        <GenericTop
          header={"Portfolio"}
          description={
            "Our founders have gone on to become Forbes 30 Under 30, build companies that are changing the world, and continue to develop the college startup scene by creating The House. We have helped our 100+ alumni teams raise over $200M from top firms such as Y Combinator, Greylock, KPCB, and Accel."
          }
        />
        <GenericPage>
          <div className="container portfolio">
            <div className="portfolioNav">
              <div className="portfolioNavPrimary">
                <button
                  className={`navPrimaryBtn${this.state.sideBarTabName === "All Startups" ? " navPrimaryBtn--active" : ""}`}
                  onClick={() => {
                    this.handleSideBarClick("All Startups");
                  }}
                >
                  All Startups
                </button>
                <button
                  className={`navPrimaryBtn${this.state.sideBarTabName === "Press" ? " navPrimaryBtn--active" : ""}`}
                  onClick={() => {
                    this.handleSideBarClick("Press");
                  }}
                >
                  Press
                </button>
              </div>
              {simpleSelect}
              <div className="portfolioNavBatches">
                <p className="batchLabel">Filter by Batch</p>
                <ul className="batchSideBar">{sideBarTabs}</ul>
              </div>
            </div>
            {/* The actual tabs are different components. */}
            <PortfolioTab sideBarTabName={this.state.sideBarTabName} />
          </div>
        </GenericPage>
      </section>
    );
  }
}

export default Portfolio;
