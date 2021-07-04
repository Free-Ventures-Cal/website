import React from 'react';
import arrow from './../assets/arrow.png';
import arrowsvg from './../assets/arrow-svg.svg';

import './../styles/App.css';
import './../styles/Home.css';

class HomeCompany extends React.Component {

    render() {

        let tags = this.props.tags.map((tag) => {
            const tagStyle = {
                backgroundColor: tag.backgroundColor
            };

            return (<span className="companyTag" style={tagStyle}>
                        {tag.content}
                    </span>);
        });

        return (
            <div className="company">
                    <a href={this.props.link} target="_blank">{this.props.linkTitle}
                        <img src={arrow} alt="" /></a>
                    <img src={this.props.logo} alt="logo" />
                    <h1>{this.props.companyName}</h1>
                    <p>{this.props.description}</p>
                    {tags}
            </div>
        );

    }


}

export default HomeCompany;
