import React, { useState } from 'react';
import './../styles/App.css';
import './../styles/Portfolio.css';
import portfolioContent from './../content/portfolio.js';
import portfolioTab from './PortfolioTab.js'

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

function PortfolioTab(props) {
    // Set up state
    const [selectedCompany, setSelectedCompany] = useState(null);
    let companiesToRender = [];

    // Get Companies to Render

    if (props.sideBarTabName === "All startups") {
        portfolioContent.batchList.map((batch) => {
            companiesToRender = companiesToRender.concat(batch.companies);
        });
    }
    else {
        portfolioContent.batchList.map((batch) => {
            if (props.sideBarTabName === batch.batchName) {
                companiesToRender = batch.companies;
            }
        });
    }

    // Rendering the tab

    let clickInstructionText = (<p>Click on a company to learn more</p>);

    const clipDescription = (desc) => {
        return desc.slice(0, desc.slice(100).indexOf(" ") + 100) + "...";
    }

    let renderCompanies = (companiesToRender || []).map((company) => {
        let descSnippet = clipDescription(company.description);
        return (<PortfolioCompanyCard
            logo={company.logo}
            companyName={company.name}
            key={company.name}
            description={descSnippet}
            link={company.link}
            tags={company.tags}
            onClick={() => {
                setSelectedCompany(company);
            }}
        />)
    });

    let renderAllStartups, renderPress, expandedPanel;

    if (props.sideBarTabName === "All startups") {
        // Separate into categories
        let acquisitions = [];
        let yc = [];
        let largeFundraising = [];
        let theRest = [];

        renderCompanies.forEach((company) => {
            if (portfolioContent.acquisitionNames.includes(company.props.companyName)) {
                acquisitions.push(company);
            }
            else if (portfolioContent.ycNames.includes(company.props.companyName)) {
                yc.push(company);
            }
            else if (portfolioContent.largeFundraisingNames.includes(company.props.companyName)) {
                largeFundraising.push(company);
            }
            else {
                theRest.push(company);
            }
        })

        // Return the JSX
        renderAllStartups = (
            <div>
                <h2>Acquisitions</h2>
                <div className="content-grid">
                    {acquisitions}
                </div>
                <h2>YC</h2>
                <div className="content-grid">
                    {yc}
                </div>
                <h2>Large Fundraising Rounds</h2>
                <div className="content-grid">
                    {largeFundraising}
                </div>
                <h2>All Startups</h2>
                <div className="content-grid">
                    {theRest}
                </div>
            </div>
        );
    }

    if (props.sideBarTabName === "Press") {
        renderPress = portfolioContent.pressList.map((article) => {
            return (<a href={article.address} target="_blank">
                <div className="pressArticle">
                    <img src={article.image} alt="Logo" />
                    <h1>{article.title}</h1>
                </div>
            </a>);
        });
    }

    let clearSelectedCompany = () => {
        setSelectedCompany(null);
    }

    if (selectedCompany) {
        expandedPanel = (
            <PortfolioCompanyCardExpanded
                open={true}
                company={selectedCompany}
                clearSelectedCompany={clearSelectedCompany}
            />
        );
    }

    return (
        <div className="content">
            {clickInstructionText}
            {renderAllStartups}
            {renderPress}
            <div className="content-grid">
                {renderCompanies}
            </div>
            {expandedPanel}
        </div>
    );
}

export default PortfolioTab;
