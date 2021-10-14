import React from 'react';
import { Link } from "react-router-dom";
import './../styles/App.css';
import './../styles/Team.css';
import { useState, useEffect } from 'react';
import useScrollHandler from '../hooks/useScrollHandler';

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
import AlumniCardsMarquee from './AlumniCardsMarquee';


function Team() {

    var header = "Meet the Team";
    var internalRecruitment = true;
    var description = "We're a small group of undergraduates who care about the Berkeley startup ecosystem. Interested in joining our team?";

    let button;

    if (internalRecruitment) {
        description += " We're currently recruiting for internal team! Click below to learn more.";
        button = <Link to="/apply" className="genericButton">Apply to internal team</Link>
    }
    else {
        description += " Click below to fill out our interest form! We'll email you once we begin recruitment in October.";
        button = <a href="https://forms.gle/47YUmy5eXgaotm169" target="_blank" className="genericButton">Internal Team Interest Form</a>
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
            name: "Adithya Paramasivam",
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
            linkedinUrl: "https://www.linkedin.com/in/maanav-khaitan/",
            mailTo: "mailto:maanav@freeventures.org",
            image: maanav
        },
        {
            name: "Varun Nair",
            position: "Associate",
            linkedinUrl: "https://www.linkedin.com/in/varun-nair-berkeley/",
            mailTo: "mailto:varun@freeventures.org",
            image: varun
        },
        {
            name: "Aamir Hudda",
            position: "Associate",
            linkedinUrl: "https://www.linkedin.com/in/aamirhudda/",
            mailTo: "mailto:aamir@freeventures.org",
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
            position: "Associate Software Engineer",
            company: "Slack",
            image: nikita
        },
        {
            name: "Adhiv Dhar",
            position: "APM",
            company: "Twitter",
            image: adhiv
        },
        {
            name: "Shaantam Chawla",
            position: "Master of Engineering",
            company: "UC Berkeley",
            image: shaantam
        },
        {
            name: "Saneel Sreeni",
            position: "Investor",
            company: "Dragonfly Capital",
            image: saneel
        },
        {
            name: "LuLu Holland",
            position: "Impact Investing Fellow",
            company: "EVCA",
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

    // Magic constant for converting the window scroll position into
    // the alumni scroll position.
    const SCROLL_CONVERT = 730;

    // Magic constant to make the alumni scroll bars start at slightly
    // different lengths.
    const SCROLL_PLUS_MINUS = 1000;

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
            <div className="gray" id="internal-alumni">
                <section className="genericTop">
                    <div className="container">
                        <div className="purpleBorder"></div>
                        <div class="topHeader">
                            <h1>Internal Alumni</h1>
                        </div>
                    </div>
                </section>
                <div class="alumni-marquee-wrapper">
                    {/* Use this to debug: */}
                    {/* <p>{useScrollHandler()}</p> */}
                    <AlumniCardsMarquee
                        row={1}
                        content={alumniContent}
                        scrollPosition={useScrollHandler() + SCROLL_CONVERT}
                    />
                    <AlumniCardsMarquee
                        row={2}
                        content={alumniContent}
                        scrollPosition={useScrollHandler() + SCROLL_CONVERT - SCROLL_PLUS_MINUS}
                    />
                    <AlumniCardsMarquee
                        row={3}
                        content={alumniContent}
                        scrollPosition={useScrollHandler() + SCROLL_CONVERT + SCROLL_PLUS_MINUS}
                    />
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
