import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import linkedinLogo from './../assets/linkedin.png'
import emailIcon from './../assets/mail.png'
import calendlyIcon from './../assets/calendly.png'

function Person(props) {

    return (
        <div className="person">
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
            <div className="links">
                <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn"/>
                </a>
                <a href={props.mailTo} target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt="Email" />
                </a>
                {props.calendlyUrl !== "" && (
                    <a href={props.calendlyUrl} target="_blank" rel="noopener noreferrer">
                        <img src={calendlyIcon} alt="Calendly" />
                    </a>
                )}
            </div>

        </div>
    );
}

export default Person;
