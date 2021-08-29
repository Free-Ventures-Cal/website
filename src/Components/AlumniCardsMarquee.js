import React from 'react';
import './../styles/App.css';
import './../styles/Team.css';
import { useEffect } from 'react';
import Alumnus from './Alumnus.js';

function AlumniCardsMarquee(props) {

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

    /* Get only the content we need for this row. */
    let rowContent = slice(props.fullContent, props.row);

    let marqueeRow = rowContent.map((alumnus) => {
        return (<Alumnus
            name={alumnus.name}
            position={alumnus.position}
            company={alumnus.company}
            image={alumnus.image}
        />

        );
    });

    const slider = React.createRef();
    const scroll_direction = props.row % 2 == 0;

    /* Set the scroll position manually based on props.
    There's probably a better way to do this by using CSS translateX.
    Maybe use Framer Motion library and Parallax Effect...
    */
    useEffect(() => {
        const maxScrollLeft = 3500;
        if (!scroll_direction) {
            slider.current.scrollLeft = props.scrollPosition / 10;
        }
        else {
            slider.current.scrollLeft = maxScrollLeft / 10 - props.scrollPosition / 10;
        }

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
