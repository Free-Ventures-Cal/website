import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';

function Testimonial(props) {
    return (
        <div class="testimonial-card-wrapper">
            <div class="testimonial-card">
                <div class="testimonial-card-header">
                    <h2>{props.name}, {props.company}</h2>
                </div>
                <div class="testimonial-card-description">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
