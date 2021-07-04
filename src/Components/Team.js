import React from 'react';
import Person from './Person.js';
import './../styles/App.css';
import './../styles/Team.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import pranav from './../assets/team/pranav.png';
import aashi from './../assets/team/aashi.png';
import pratik from './../assets/team/pratik.png';
import kathy from './../assets/team/kqkong.png';
import adhiv from './../assets/team/adhiv.png';
import nikita from './../assets/team/nikita.png';
import shaantam from './../assets/team/shaantam.png';
import adithya from './../assets/team/adithya.png';
import christina from './../assets/team/christina.png';
import alex from './../assets/team/alex.png';
import joelene from './../assets/team/joelene.png';
import saneel from './../assets/team/saneel.jpg';
import avinash from './../assets/team/avinash.jpg';
import lulu from './../assets/team/lulu.png';
import andy from './../assets/team/andy2.png';
import tiana from './../assets/team/tiana2.png';

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

    if(internalRecruitment) {
        description += " We're currently recruiting for internal team! Click below to learn more.";
        button = <Link to="/apply" className="genericButton">Apply for internal</Link>
    }
    else {
        description += " Click below to fill out our interest form! We'll email you once we begin recruitment.";
        button = <a href="https://forms.gle/D1CJuxfxytb3h54G9" target="_blank" className="genericButton">Internal team interest form</a>
    }

    var peopleContent = [
    {
        name: "Christina Guo",
        position: "Managing Director",
        linkedinUrl: "https://www.linkedin.com/in/cguo16",
        mailTo: "mailto:christina@freeventures.org",
        image: christina
    },
    {
        name: "Shaantam Chawla",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/shaantam/",
        mailTo: "mailto:shaantam@freeventures.org",
        image: shaantam
    },
    {
        name: "Adithiya Paramasivam",
        position: "Director",
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
        name: "Lulu Holland",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/luluholland/",
        mailTo: "mailto:lulu@freeventures.org",
        image: lulu
    },
    {
        name: "Saneel Sreeni",
        position: "Director",
        linkedinUrl: "https://www.linkedin.com/in/saneel-sreeni/",
        mailTo: "mailto:saneel@freeventures.org",
        image: saneel
    },
    {
        name: "Tiana Wong",
        position: "Associate",
        linkedinUrl: "https://www.linkedin.com/in/csow/",
        mailTo: "mailto:tiana@freeventures.org",
        image: tiana
    },
    {
        name: "Andy Jiang",
        position: "Associate",
        linkedinUrl: "https://www.linkedin.com/in/andybojiang/",
        mailTo: "mailto:andy@freeventures.org",
        image: andy
    },
    {
        name: "Kathy Kong",
        position: "Senior Advisor",
        linkedinUrl: "https://www.linkedin.com/in/kathyqkong/",
        mailTo: "mailto:kathy@freeventures.org",
        image: kathy
    },
    {
        name: "Aashi Jhawar",
        position: "Senior Advisor",
        linkedinUrl: "https://www.linkedin.com/in/aashikajhawar/",
        mailTo: "mailto:aashi@freeventures.org",
        image: aashi
    },
    {
        name: "Nikita Ashok",
        position: "Senior Advisor, Former MD",
        linkedinUrl: "https://www.linkedin.com/in/nikita-ashok/",
        mailTo: "mailto:nikita@freeventures.org",
        image: nikita
    },
    {
        name: "Adhiv Dhar",
        position: "Senior Advisor, Former MD",
        linkedinUrl: "https://linkedin.com/in/adhivd/",
        mailTo: "mailto:adhiv@freeventures.org",
        image: adhiv
    },
    // {
    //     name: "Avinash Jain",
    //     position: "Senior Advisor",
    //     linkedinUrl: "https://www.linkedin.com/in/avinashj1/",
    //     mailTo: "mailto:avinash@freeventures.org",
    //     image: avinash
    // },
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
                <h2 style={{ textAlign: 'center', padding: '50px 0'}}>Our Advisors come from</h2>
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
