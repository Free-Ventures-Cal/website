import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import { useEffect } from 'react';
import Alumnus from './Alumnus.js';

function AlumniCardsMarquee(props) {

    /* Get only the content we need for this row. */
    const slice = (arr, row) => {
        const numAlumni = arr.length;
        const end1 = numAlumni / 3;
        const end2 = 2 * numAlumni / 3;

        if (row === 1) {
            const row = arr.slice(0, end1);
            return row;
        }
        if (row === 2) {
            const row = arr.slice(end1, end2);
            return row;
        }
        if (row === 3) {
            const row = arr.slice(end2, numAlumni);
            return row;
        }
    };
    let rowContent = slice(props.fullContent, props.row);

    /* Build the cards in this row. */
    let marqueeRow = rowContent.map((alumnus) => {
        return (<Alumnus
            name={alumnus.name}
            position={alumnus.position}
            company={alumnus.company}
            image={alumnus.image}
        />

        );
    });

    /* Set the scroll position manually based on props.
    There's probably a better way to do this by using CSS translateX.
    Maybe use Framer Motion library and Parallax Effect...? */
    
    const MARQUEE_RANGE = [200, 300]; // find by trial and error
    const slider = React.createRef();
    
    useEffect(() => {
        /* If marquee is not visible don't bother scrolling. */
        const y = props.scrollPosition;
        const marqueeNotVisible = !(y >= props.windowScrollLimits[0] && y <= props.windowScrollLimits[1]);
        if (marqueeNotVisible) { return; }

        /* Convert vertical scroll position to row scroll position. */
        const x = (function () {
            const r = (MARQUEE_RANGE[1] - MARQUEE_RANGE[0]) / 
                      (props.windowScrollLimits[1] - props.windowScrollLimits[0]);
            return (y - props.windowScrollLimits[0]) * r + MARQUEE_RANGE[0];
        })();

        /* Odd and even rows move differently. */
        const OFFSET = 50;
        const scroll_direction = props.row % 2 == 0;
        if (!scroll_direction) { slider.current.scrollLeft = x - OFFSET; }
        else { slider.current.scrollLeft = MARQUEE_RANGE[1] - x + OFFSET; }
    });

    return (
        <div className="alumni-cards-marquee">
            <div class="alumni-cards-row" ref={slider}>
                {marqueeRow}
            </div>
        </div>
    );
}

export default AlumniCardsMarquee;
