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
    allStartupsStyle: null,
    pressStyle: null,
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

    // there's definitely a better way to do this
    let allStartupsStyle, pressStyle;
    let clickInstructionText = <p>Click on a company to learn more</p>;

    // simpleSelect only visible in the mobile view
    let simpleSelect = (
      <SimpleSelect
        options={selectOptions}
        placeholder={this.sideBarTabName}
        updateSelectedTabName={this.updateSelectedTabName}
        handleSideBarClick={this.handleSideBarClick}
      />
    );

    if (this.state.sideBarTabName === "All startups") {
      allStartupsStyle = {
        backgroundColor: "#F1F1F1",
        color: "#67379A",
      };
    }

    if (this.state.sideBarTabName === "Press") {
      pressStyle = {
        backgroundColor: "#F1F1F1",
        color: "#67379A",
      };
      clickInstructionText = "";
    }

    return (
      <section>
        <GenericTop
          header={"Portfolio"}
          description={
            "Our founders have gone on to become Forbes 30 Under 30, build companies that are changing the world, and continue to develop the college startup scene by creating The House. We have helped our 92 alumni teams raise over $170 million from top firms such as Y Combinator, Greylock, KPCB, and Accel."
          }
        />
        <GenericPage>
          <div className="container portfolio">
            <div className="portfolioNav">
              <ul className="generalSideBar">
                <li
                  onClick={() => {
                    this.handleSideBarClick("All startups");
                  }}
                  style={allStartupsStyle}
                >
                  All startups
                </li>
                <li
                  onClick={() => {
                    this.handleSideBarClick("Press");
                  }}
                  style={pressStyle}
                >
                  Press
                </li>
              </ul>
              {simpleSelect}
              <ul className="batchSideBar">{sideBarTabs}</ul>
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
