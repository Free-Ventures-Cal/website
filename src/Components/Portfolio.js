import React from 'react';
import './../styles/App.css';
import './../styles/Portfolio.css';
import portfolioContent from './../content/portfolio.js';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import PortfolioCompanyCard from './PortfolioCompanyCard';
import PortfolioCompanyCardExpanded from './PortfolioCompanyCardExpanded.js';
import SimpleSelect from './Select.js';

import tc from './../assets/press/tc.png';
import huffpost from './../assets/press/huffpost.png';
import forbes from './../assets/press/forbes.png';
import mic from './../assets/press/mic.png';
import medium from './../assets/press/medium.png';
import recode from './../assets/press/recode.png';
import wired from './../assets/press/wired.png';
import bb from './../assets/press/bb.jpg';
import dailycal from './../assets/press/dailycal.jpg';
import e27 from './../assets/press/e27.png';
import alchemy from './../assets/press/alchemy.jpeg';

class Portfolio extends React.Component {

    state = {
        sideBarTabName: '',
        companiesToRender: [],
    }

    componentDidMount() {
        this.handleSideBarClick(this.props.sideBarTabName);
    }

    clipDescription = (desc) => {
        return desc.slice(0, desc.slice(100).indexOf(" ") + 100) + "...";
    }

    clearSelectedCompany = () => {
        this.setState({
            selectedCompany: null
        });
    }

    handleSideBarClick = (sideBarTabName) => {
        let companiesToRender = [];

        if(sideBarTabName === "All startups") {
            portfolioContent.batchList.map((batch) => {
                companiesToRender = companiesToRender.concat(batch.companies);
            });
        }
        else if(sideBarTabName === "Press") {
        }
        else {
            portfolioContent.batchList.map((batch) => {
                if(sideBarTabName === batch.batchName) {
                    companiesToRender = batch.companies;
                }
            });
        }

        this.setState({
          companiesToRender,
          sideBarTabName
      }, () => {
          console.log(this.state)
      });
    }



    render() {

        let selectOptions = [];

        let sideBarTabs = portfolioContent.batchList.map((batch) => {
            let activeLinkStyle = {}
            selectOptions.push(batch.batchName);

            if (this.state.sideBarTabName === batch.batchName) {
                activeLinkStyle = {
                    backgroundColor: '#F1F1F1',
                    color: '#67379A'
                };
            }

            return (<li onClick={() => {
                            this.handleSideBarClick(batch.batchName)
                        }}
                        style={activeLinkStyle}
                        key={batch.batchName}
                    >
            {batch.batchName}
            </li>);
        })

        console.log(selectOptions);

        // there's definitely a better way to do this

        let allStartupsStyle, pressStyle;
        let clickInstructionText = (<p>Click on a company to learn more</p>);
        let simpleSelect = (<SimpleSelect
            options={selectOptions}
            placeholder={this.sideBarTabName}
            updateSelectedTabName={this.updateSelectedTabName}
            handleSideBarClick={this.handleSideBarClick}
        />);

        if(this.state.sideBarTabName === "All startups") {
            allStartupsStyle = {
                backgroundColor: '#F1F1F1',
                color: '#67379A'
            };
        }

        if(this.state.sideBarTabName === "Press") {
            pressStyle = {
                backgroundColor: '#F1F1F1',
                color: '#67379A'
            };
            clickInstructionText = "";
        }




        let renderCompanies = (this.state.companiesToRender || []).map((company) => {
            console.log("making it in here");
            let descSnippet = this.clipDescription(company.description);
            return (<PortfolioCompanyCard
                        logo={company.logo}
                        companyName={company.name}
                        key={company.name}
                        description={descSnippet}
                        link={company.link}
                        tags={company.tags}
                        onClick={() => {
                            this.setState({
                                selectedCompany: company
                            });
                        }}
                    />)
        });

        let renderPress;

        if(this.state.sideBarTabName === "Press") {
            renderPress = portfolioContent.pressList.map((article) => {
                return (<a href={article.address} target="_blank">
                            <div className="pressArticle">
                                <img src={article.image} alt="Logo" />
                                <h1>{article.title}</h1>
                            </div>
                        </a>);
            });
        }

        let expandedPanel;

        if(this.state.selectedCompany) {
            expandedPanel = (
                <PortfolioCompanyCardExpanded
                    open={true}
                    company={this.state.selectedCompany}
                    clearSelectedCompany={this.clearSelectedCompany}
                />
            );
        }

        return (
            <section>
                <GenericTop
                    header={'Portfolio'}
                    description={'Our founders have gone on to become Forbes 30 Under 30, build companies that are changing the world, and continue to develop the college startup scene by creating The House. We have helped our 57 alumni teams raise over $55 million from top firms such as Y Combinator, Greylock, KPCB, and Accel.'}
                />
                <GenericPage>
                    <div className="container portfolio">
                        <div className="portfolioNav">
                            <ul className="generalSideBar">
                                <li onClick={() => {this.handleSideBarClick("All startups") }} style={allStartupsStyle}>All startups</li>
                                <li onClick={() => {this.handleSideBarClick("Press") }} style={pressStyle}>Press</li>
                            </ul>
                            {simpleSelect}
                            <ul className="batchSideBar">
                                {sideBarTabs}
                            </ul>

                        </div>
                        <div className="content">
                            {clickInstructionText}
                            {renderPress}
                            <div className="content-grid">
                                {renderCompanies}
                            </div>
                            {expandedPanel}
                        </div>
                    </div>
                </GenericPage>
            </section>
        );

    }


}

export default Portfolio;
