import React from 'react';

import './../styles/Portfolio.css';

function PortfolioCompanyCard(props) {
        let tags;
        if(props.tags) {
            tags = props.tags.map((tag) => {
                const tagStyle = {
                    backgroundColor: tag.backgroundColor
                };

                return (<span className="companyTag" style={tagStyle} key={tag.content}>
                            {tag.content}
                        </span>);
            });
        }

        let logo;
        if(props.logo) {
            logo = <img src={props.logo} alt="logo" />;
        }

        const descClass = props.tags && props.tags.length > 0
            ? 'companyPortfolio__desc companyPortfolio__desc--withTags'
            : 'companyPortfolio__desc';

        return (
            <div className="companyPortfolio" onClick={props.onClick}>
                {logo}
                <h1>{props.companyName}</h1>
                <p className={descClass}>{props.description}</p>
                <div className="companyPortfolio__tags">
                    {tags}
                </div>
            </div>
        );

}

export default PortfolioCompanyCard;
