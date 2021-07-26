import React from 'react';
import { Link } from "react-router-dom";
import './../styles/App.css';
import './../styles/Team.css';

import Person from './Person.js'
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

import Alumnus from './Alumnus.js';
import aashi from './../assets/team/alumni/aashi_jawar.png';
import abhay from './../assets/team/alumni/abhay_malik.jpeg';
import adhiv from './../assets/team/alumni/adhiv_dhar.png';
import alice from './../assets/team/alumni/alice_deng.jpeg';
import amrit from './../assets/team/alumni/amrit_ayalur.jpeg';
import blake from './../assets/team/alumni/blake_lafayette.jpeg';
import cameron from './../assets/team/alumni/cameron_baradar.jpeg';
import damini from './../assets/team/alumni/damini_satija.jpeg';
import daniella from './../assets/team/alumni/daniella_wenger.jpeg';
import farbod from './../assets/team/alumni/farbod_nowzad.jpeg';
import jasmine from './../assets/team/alumni/jasmine_stoy.jpeg';
import jeff from './../assets/team/alumni/jeff_feng.jpeg';
import jeremy from './../assets/team/alumni/jeremy_fiance.jpeg';
import kathy from './../assets/team/alumni/kathy_kong.png';
import keyan from './../assets/team/alumni/keyan_sarrafzadeh.jpeg';
import kirtan from './../assets/team/alumni/kirtan_upadhyaya.jpeg';
import lulu from './../assets/team/alumni/lulu_holland.png';
import nikita from './../assets/team/alumni/nikita_ashok.png';
import omkar from './../assets/team/alumni/omkar_salpekar.jpeg';
import pranav from './../assets/team/alumni/pranav_gulati.png';
import pratik from './../assets/team/alumni/pratik_bhat.jpeg';
import sam from './../assets/team/alumni/sam_kirschner.jpeg';
import saneel from './../assets/team/alumni/saneel_sreeni.jpg';
import sean from './../assets/team/alumni/sean_linehan.jpeg';
import shaantam from './../assets/team/alumni/shaantam_chawla.png';

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
            name: "Pratik Bhat",
            position: "Product Manager",
            company: "Walmart Labs",
            image: pratik
        },
        {
            name: "Pranav Gulati",
            position: "Associate Product Manager",
            company: "Uber",
            image: pranav
        },
        {
            name: "Omkar Salpekar",
            position: "Software Engineer",
            company: "Facebook",
            image: omkar
        },
        {
            name: "Kathy Kong",
            position: "Product Manager Intern",
            company: "Zoom",
            image: kathy
        },
        {
            name: "Aashi Jawar",
            position: "Product Marketing Intern",
            company: "TikTok",
            image: aashi
        },
        {
            name: "Alice Deng",
            position: "Co-Founder",
            company: "Slope Tech",
            image: alice
        },
        {
            name: "Daniella Wenger",
            position: "Research Associate",
            company: "University of Cambridge",
            image: daniella
        },
        {
            name: "Blake LaFayette",
            position: "Private Equity Senior Associate",
            company: "Alpine Investors",
            image: blake
        },
        {
            name: "Farbod Nowzad",
            position: "Founder and CEO",
            company: "Pluto",
            image: farbod
        },
        {
            name: "Abhay Malik",
            position: "Product Manager",
            company: "Aisera",
            image: abhay
        },
        {
            name: "Jeff Feng",
            position: "Investor",
            company: "Coatue Management",
            image: jeff
        },
        {
            name: "Amrit Ayalur",
            position: "Founding Engineer",
            company: "Cocoon",
            image: amrit
        },
        {
            name: "Damini Satija",
            position: "Senior Policy Advisor",
            company: "Centre for Data Ethics & Innovation",
            image: damini
        },
        {
            name: "Keyan Sarrafzadeh",
            position: "Head of Analytics",
            company: "The Org",
            image: keyan
        },
        {
            name: "Kirtan Upadhyaya",
            position: "MD Candidate",
            company: "Cooper Medical School of Rowan University",
            image: kirtan
        },
        {
            name: "Jeremy Fiance",
            position: "Managing Partner in Berkeley",
            company: "The House Fund",
            image: jeremy
        },
        {
            name: "Cameron Baradar",
            position: "Partner",
            company: "The House Fund",
            image: cameron
        },
        {
            name: "Sam Kirschner",
            position: "Director of Operations",
            company: "Village Global",
            image: sam
        },
        {
            name: "Sean Linehan",
            position: "Co-Founder & CEO",
            company: "Placement.com",
            image: sean
        },
        {
            name: "Jasmine Stoy",
            position: "Product Manager",
            company: "Facebook",
            image: jasmine
        },
        {
            name: "Nikita Ashok",
            image: nikita
        },
        {
            name: "Adhiv Dhar",
            image: adhiv
        },
        {
            name: "Shaantam Chawla",
            image: shaantam
        },
        {
            name: "Saneel Sreeni",
            image: saneel
        },
        {
            name: "LuLu Holland",
            image: lulu
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

    // Return an array of Alumnus components to use as one of three rows in the
    // internal alumni section. The length of the result is one third the length
    // of alumniComponents, plus a few extra before and after to allow the marquee
    // to seem continous when it starts over again. The row argument (1 to 3) 
    // determines which Alumnus components should appear in the result.
    function assembleMarqueeRow(row) {
        const numAlumni = alumniComponents.length;
        // The ending index of the first third.
        const end1 = numAlumni / 3;
        // The ending index of the second third.
        const end2 = 2 * numAlumni / 3;

        if (row === 1) {
            // Moves right to left: 
            // prepend from the end and append from the start.
            const row = alumniComponents.slice(0, end1);
            const before = row.slice(row.length - 4, row.length);
            const after = row.slice(0, 4);
            return before.concat(row).concat(after);
        }
        if (row === 2) {
            // Left to right.
            const row = alumniComponents.slice(end1, end2);
            const before = row.slice(0, 4);  
            const after = row.slice(row.length - 4, row.length);
            return before.concat(row).concat(after);
        }
        if (row === 3) {
            // Right to left.
            const row = alumniComponents.slice(end2, numAlumni);
            const before = row.slice(row.length - 4, row.length);
            const after = row.slice(0, 4);
            return before.concat(row).concat(after);
        }
    }


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
            </GenericPage>
            <div className="gray">
                <section className="genericTop">
                    <div className="container">
                        <div className="purpleBorder"></div>
                        <div class="topHeader">
                            <h1>Internal Alumni</h1>
                        </div>
                    </div>
                </section>
                <div class="alumni-marquee-wrapper">
                    <div className="alumni-cards-marquee">
                        <div class="alumni-cards-row">
                            {assembleMarqueeRow(1)}
                        </div>
                    </div>
                    <div className="alumni-cards-marquee right-moving">
                        <div class="alumni-cards-row">
                            {assembleMarqueeRow(2)}
                        </div>
                    </div>
                    <div className="alumni-cards-marquee">
                        <div class="alumni-cards-row">
                            {assembleMarqueeRow(3)}
                        </div>
                    </div>
                </div>
            </div>
            <GenericPage>
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
