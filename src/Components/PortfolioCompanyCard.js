import React, { useRef, useEffect, useState, useCallback } from 'react';

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

        const descRef = useRef(null);
        const [displayText, setDisplayText] = useState(props.description);

        const fitText = useCallback(() => {
            const el = descRef.current;
            if (!el) return;

            // Reset to full text to measure
            el.textContent = props.description;

            if (el.scrollHeight <= el.clientHeight) {
                setDisplayText(props.description);
                return;
            }

            // Binary search for the right cutoff length
            let low = 0;
            let high = props.description.length;

            while (low < high) {
                const mid = Math.floor((low + high) / 2);
                el.textContent = props.description.slice(0, mid) + '...';
                if (el.scrollHeight > el.clientHeight) {
                    high = mid;
                } else {
                    low = mid + 1;
                }
            }

            // Back off by one to ensure we fit
            const cutoff = Math.max(0, low - 1);
            setDisplayText(props.description.slice(0, cutoff) + '...');
        }, [props.description]);

        useEffect(() => {
            fitText();
            window.addEventListener('resize', fitText);
            return () => window.removeEventListener('resize', fitText);
        }, [fitText]);

        return (
            <div className="companyPortfolio" onClick={props.onClick}>
                <div className="companyPortfolio__header">
                    {logo}
                    <h1>{props.companyName}</h1>
                    <p ref={descRef}>{displayText}</p>
                </div>
                <div className="companyPortfolio__tags">
                    {tags}
                </div>
            </div>
        );

}

export default PortfolioCompanyCard;
