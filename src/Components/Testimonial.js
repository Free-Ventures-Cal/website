import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';

function Testimonial(props) {
    return (
        <div class="testimonial-card-wrapper">
            <figure class="testimonial-card">
                <p className="testimonial-card-company">{props.company}</p>
                <blockquote class="testimonial-card-description">
                    {props.text}
                </blockquote>
                <figcaption>–<cite>{props.name}</cite></figcaption>
            </figure>
        </div>
    );
}

export default Testimonial;
