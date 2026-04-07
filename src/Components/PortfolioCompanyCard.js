import React from 'react';

import './../styles/Portfolio.css';

function PortfolioCompanyCard(props) {
        let tags;
        if(props.tags) {
            tags = props.tags.map((tag) => {
                const tagStyle = {
                    backgroundColor: tag.backgroundColor
                };

                return (<span className="companyTag" style={tagStyle}>
                            {tag.content}
                        </span>);
            });
        }

        let logo;
        if(props.logo) {
            logo = <img src={props.logo} alt="logo" />;
        }


        return (
            <div className="companyPortfolio" onClick={props.onClick}>
                <div className="companyPortfolio__header">
                    {logo}
                    <h1>{props.companyName}</h1>
                    <p>{props.description}</p>
                </div>
                <div className="companyPortfolio__tags">
                    {tags}
                </div>
            </div>
        );

}

export default PortfolioCompanyCard;
