import React from 'react';
import ContactForm from './ContactForm';
import './../styles/App.css';
import './../styles/Partners.css';
import GenericTop from './GenericTop';

import aws from './../assets/sponsors/aws.png';
import cooley from './../assets/partners/cooley.png';
import house from './../assets/partners/house.png';
import svb from './../assets/sponsors/svb.png';
import perplexity from './../assets/partners/perplexity.png';
import harmonic from './../assets/partners/harmonic.png';
import zip from './../assets/partners/zip.webp';
import citadel2 from './../assets/partners/citadel2.png';

import value1 from './../assets/partners/value1.jpeg';
import value2 from './../assets/partners/value2.jpeg';
import value3 from './../assets/partners/value3.jpg';

import { Link } from "react-router-dom";

function Partners() {

    let partnersContent = [
        {
            logo: cooley,
            name: 'Cooley',
            website: "https://www.cooley.com"
        },
        {
            logo: house,
            name: 'The House Fund',
            website: "http://thehouse.fund/"
        },
        {
            logo: aws,
            name: 'AWS',
            website: "https://aws.amazon.com/activate/"
        },
        {
            logo: svb,
            name: 'SVB',
            website: 'https://www.svb.com/'
        },
        {
            logo: perplexity,
            name: 'Perplexity',
            website: 'https://www.perplexity.ai/'
        },
        {
            logo: harmonic,
            name: 'Harmonic',
            website: 'https://www.harmonic.ai/'
        },
        {
            logo: zip,
            name: 'Zip',
            website: 'https://www.ziphq.com/'
        },
        {
            logo: citadel2,
            name: 'Citadel',
            website: 'https://www.citadel.com/'
        }
    ];

    let partners = partnersContent.map((partner) => {
        return (<a href={partner.website}><img src={partner.logo} alt={partner.name} style={{ width: "60%" }} /></a>);
    });

    return (
        <section>
            <GenericTop
                header={'Our Partners'}
                description={'We’re proud to work with a select group of partners who share our passion for supporting Berkeley’s startup ecosystem.'}
            />
            <div>
                <div className="partners">
                    <div className="container">
                        <div className="four-grid">
                            {partners}
                        </div>
                    </div>
                </div>
                <div className="quoteSection">
                </div>
                <div className="partnerValue">
                    <h2>Our value add for partners</h2>
                    <div className="value">
                        <div className="valueImage">
                            <img src={value1}/>
                        </div>
                        <div>
                            <h3>1. Access to all batch companies</h3>
                            <p> Sponsors get the ability to interact with all our current and alumni batch companies through both campus and sponsored events. We encourage our batch companies to utilize sponsor resources as their first option.  </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="valueImage">
                            <img src={value2}/>
                        </div>
                        <div>
                            <h3>2. Campus network of entrepreneurship focused students</h3>
                            <p> Free Ventures continues to develop its on campus network of students, founders, and researchers that are working on groundbreaking projects.   </p>
                        </div>
                    </div>

                    <div className="value">
                        <div className="valueImage">
                            <img src={value3}/>
                        </div>
                        <div>
                            <h3>3. Berkeley ecosystem trends</h3>
                            <p> Free Ventures is uniquely positioned to advise sponsors on how to engage with the Berkeley community and utilize campus trends to their advantage.  </p>
                        </div>
                    </div>
                </div>
                <div className="contactSection homeSection">
                    <div className="container">
                        <h2>Looking to get involved?</h2>
                        <p>We’re happy to share more on the partnership opportunities available at Free Ventures. We are a non-profit organization run by students, for students, and rely upon the support of alumni, entrepreneurs, investors, and Bay Area firms for resources and mentorship for our teams. If you support our mission and would like to contribute towards helping Cal student entrepreneurs, we would welcome your involvement.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
