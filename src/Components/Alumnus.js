import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import linkedinLogo from './../assets/linkedin.png'
import emailIcon from './../assets/mail.png'

function Alumnus(props) {

    return (
        <div className="person">
            <img src={props.image} alt=""/>
            <h2>{props.name}</h2>
            <h3>{props.position}@{props.company}</h3>
        </div>
    );
}

export default Alumnus;
