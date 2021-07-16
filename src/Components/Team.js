import React from 'react';
import Person from './Person.js';
import Alumnus from './Alumnus.js';
import './../styles/App.css';
import './../styles/Team.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import adithya from './../assets/team/adithya.png';
import christina from './../assets/team/christina.png';
import alex from './../assets/team/alex.png';
import andy from './../assets/team/andy2.png';
import tiana from './../assets/team/tiana2.png';
import maanav from './../assets/team/maanav.png';
import varun from './../assets/team/varun.png';
import aamir from './../assets/team/aamir.png';

import { Link } from "react-router-dom";


import house from './../assets/partners/house.png';
import haas from './../assets/partners/haas.jpg';
import berkeleyengineering from './../assets/partners/berkeleyengineering.png';
import scet from './../assets/partners/scet.png';
import skydeck from './../assets/partners/skydeck.png';


function Team() {

    var header = "Meet the Team";
    var internalRecruitment = true;
    var description = "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team?";

    let button;

    if (internalRecruitment) {
        description += " We're currently recruiting for internal team! Click below to learn more.";
        button = <Link to="/apply" className="genericButton">Apply for internal</Link>
    }
    else {
        description += " Click below to fill out our interest form! We'll email you once we begin recruitment.";
        button = <a href="https://forms.gle/D1CJuxfxytb3h54G9" target="_blank" className="genericButton">Internal team interest form</a>
    }

    const peopleContent = [
        {
            name: "Christina Guo",
            position: "Managing Director",
            linkedinUrl: "https://www.linkedin.com/in/cguo16",
            mailTo: "mailto:christina@freeventures.org",
            image: christina
        },
        {
            name: "Adithiya Paramasivam",
            position: "Managing Director",
            linkedinUrl: "https://www.linkedin.com/in/adithyaparam",
            mailTo: "mailto:adithya@freeventures.org",
            image: adithya
        },
        {
            name: "Alexander Manes",
            position: "Director",
            linkedinUrl: "https://www.linkedin.com/in/alexander-manes/",
            mailTo: "mailto:alexander@freeventures.org",
            image: alex
        },
        {
            name: "Tiana Wong",
            position: "Director",
            linkedinUrl: "https://www.linkedin.com/in/csow/",
            mailTo: "mailto:tiana@freeventures.org",
            image: tiana
        },
        {
            name: "Andy Jiang",
            position: "Director",
            linkedinUrl: "https://www.linkedin.com/in/andybojiang/",
            mailTo: "mailto:andy@freeventures.org",
            image: andy
        },
        {
            name: "Maanav Khaitan",
            position: "Associate",
            linkedinUrl: "",
            mailTo: "mailto:",
            image: maanav
        },
        {
            name: "Varun Nair",
            position: "Associate",
            linkedinUrl: "",
            mailTo: "mailto:",
            image: varun
        },
        {
            name: "Aamir Hudda",
            position: "Associate",
            linkedinUrl: "",
            mailTo: "mailto:",
            image: aamir
        },
    ]

    const alumniContent = [
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: christina
        },
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: adithya
        },
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: christina
        },
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: adithya
        },
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: christina
        },
        {
            name: "First Last",
            position: "position",
            company: "company",
            image: adithya
        },
    ]

    let peopleComponents = peopleContent.map((person) => {
        return (<Person
            name={person.name}
            position={person.position}
            linkedinUrl={person.linkedinUrl}
            mailTo={person.mailTo}
            image={person.image}
        />
        );
    });

    let alumniComponents = alumniContent.map((alumnus) => {
        return (<Alumnus
            name={alumnus.name}
            position={alumnus.position}
            company={alumnus.company}
            image={alumnus.image}
        />

        );
    });

    return (
        <section>
            <GenericTop
                header={header}
                description={description}
            >
                {button}
            </GenericTop>
            <GenericPage>
                <div className="peopleGrid">
                    {peopleComponents}
                </div>
                <div class="marquee-wrapper">
                    <h2>Internal Alumni</h2>
                    <div className="alumni-cards-marquee">
                        <div class="alumni-cards-row">
                            {alumniComponents}
                        </div>
                    </div>
                </div>
                <h2 style={{ textAlign: 'center', padding: '50px 0' }}>Our Advisors come from</h2>
                <div className="five-grid">
                    <span><img src={house} /></span>
                    <span><img src={skydeck} /></span>
                    <span><img src={scet} /></span>
                    <span><img src={haas} /></span>
                    <span><img src={berkeleyengineering} /></span>
                </div>
            </GenericPage>
        </section>
    );
}

export default Team;
