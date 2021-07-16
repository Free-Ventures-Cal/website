import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import linkedinLogo from './../assets/linkedin.png'
import emailIcon from './../assets/mail.png'

function Alumnus(props) {

    let descriptionText = props.position || props.company ?
        <h3>{props.position} @ {props.company}</h3> : "";

    return (
        <div class="alumnus-card-wrapper">
            <div class="alumnus-card">
                <div class="alumnus-card-header">
                    <img src={props.image} alt="" />
                    <h2>{props.name}</h2>
                </div>
                <div class="alumnus-card-description">
                    {descriptionText}
                </div>
            </div>
        </div>
    );
}

export default Alumnus;
