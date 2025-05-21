import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import linkedinLogo from './../assets/linkedin.png'
import emailIcon from './../assets/mail.png'
import { useState, useEffect } from 'react';
import Alumnus from './Alumnus.js';

function AlumniCardsMarquee(props) {

    const scroll_direction = props.row % 2 == 0;

    /* Build each individual card. To optimize this, make it so that
     we only build the cards we're gonna need for this row. */
    let alumniComponents = props.content.map((alumnus) => {
        return (<Alumnus
            name={alumnus.name}
            position={alumnus.position}
            company={alumnus.company}
            image={alumnus.image}
        />

        );
    });

    /* Build a row of alumni cards. */
    function assembleMarqueeRow(row) {
        const numAlumni = alumniComponents.length;
        const end1 = numAlumni / 5;
        const end2 = 2 * numAlumni / 5;
        const end3 = 3 * numAlumni / 5;
        const end4 = 4 * numAlumni / 5;
        if (row === 1) {
            const row = alumniComponents.slice(0, end1);
            return row;
        }
        if (row === 2) {
            const row = alumniComponents.slice(end1, end2);
            return row;
        }
        if (row === 3) {
            const row = alumniComponents.slice(end2, end3);
            return row;
        }
        if (row === 4) {
            const row = alumniComponents.slice(end3, end4);
            return row;
        }
        if (row === 5) {
            const row = alumniComponents.slice(end4, numAlumni);
            return row;
        }
    }

    const slider = React.createRef();

    // There's probably a better way to do this by using
    // CSS translateX instead of manually manipulating the
    // scrollbar then hiding it.
    // Maybe use Framer Motion library and Parallax Effect...
    useEffect(() => {
        const maxScrollLeft = 3500;
        if (!scroll_direction) {
            slider.current.scrollLeft = props.scrollPosition/10;
        }
        else {
            slider.current.scrollLeft = maxScrollLeft/10 - props.scrollPosition/10;
        }
        
    });

    return (
        <div className="alumni-cards-marquee">
            <div class="alumni-cards-row" ref={slider}>
                {assembleMarqueeRow(props.row)}
            </div>
        </div>
    );
}

export default AlumniCardsMarquee;
