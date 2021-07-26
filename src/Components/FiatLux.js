import React from 'react';
import './../styles/App.css';
import './../styles/FiatLux.css';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import ContactForm from './ContactForm';

import fiatlux1 from './../assets/fiatlux/fiat-lux-1.jpg';
import fiatlux2 from './../assets/fiatlux/fiat-lux-2.jpg';
import fiatlux3 from './../assets/fiatlux/fiat-lux-3.jpeg';
import fiatlux4 from './../assets/fiatlux/fiat-lux-4.JPG';
import fiatlux5 from './../assets/fiatlux/fiat-lux-5.JPG';

import placeholder from './../assets/pink-gradient.jpg';
import Speaker from './Speaker';

function FiatLux() {

    const speakersContent = [
        {
            name: "Danielle D'Agostaro",
            position: "Principal Partner",
            company: "WV Ventures",
            image: placeholder
        },
        {
            name: "Jasmine Stoy",
            position: "Project Manager",
            company: "Facebook",
            image: placeholder
        },
        {
            name: "Jessica Ou",
            position: "VC",
            company: "NEA",
            image: placeholder
        },
        {
            name: "Gresshaa Mehta",
            position: "Project Coordinator",
            company: "Apple",
            image: placeholder
        },
        {
            name: "Amy Xia",
            position: "Growth Marketer",
            company: "Facebook",
            image: placeholder
        }
    ];

    let speakersComponents = speakersContent.map((speaker) => {
        return (<Speaker
            name={speaker.name}
            position={speaker.position}
            company={speaker.company}
            image={speaker.image}
        />);
    });

    return (
        <section>
            <GenericTop
                header={'Fiat Lux'}
                description={'The Fiat Lux by Free Ventures initiative is our response to an increasing lack of gender diversity within the tech & startup ecosystem on campus. We aim to directly address this issue by providing amazing female students on campus with resources and mentorship from industry professionals.'}
            />
            <div className="fiatlux-images">
                <div className="flex-item">
                    <img src={fiatlux1} alt="Fiat Lux Event" />
                </div>
                <div className="flex-item">
                    <img src={fiatlux2} alt="Fiat Lux Event" />
                </div>
                <div className="flex-item">
                    <img src={fiatlux4} alt="Fiat Lux Event" />
                </div>
                <div className="flex-item">
                    <img src={fiatlux5} alt="Fiat Lux Event" />
                </div>
                <div className="flex-item">
                    <img src={fiatlux3} alt="Fiat Lux Event" />
                </div>

            </div>
            <GenericPage id="copy">
                <h2>Overview</h2>
                <p>Our team understands the importance of diversity throughout tech and entrepreneurship and recognizes the issues prevalence on campus. We aim to tackle this issue by working with our network of accomplished professionals to empower students as they are taking the first steps in their professional careers.</p>
                <p>The Fiat Lux | Female Leaders initiative addresses the lack of gender diversity within tech and entrepreneurship by empowering amazing female students with resources and mentorship.</p>

                <div id="main">
                    <div className="no-overflow" id="speakers-wrapper">
                        <div>
                            <h2>Past Speakers</h2>
                            {speakersComponents}
                        </div>
                    </div>
                    <div id="sidebar">
                        <div className="circle">
                            80+
                        </div>
                        <p>Attendees</p>
                    </div>
                </div>
                <span>
                    <h2>Get Involved</h2>
                    <h3>Attending</h3>
                    <p>If you are a student interested in attending Fiat Lux, send an email to <a href="mailto:lulu@freeventures.org">lulu@freeventures.org</a>.</p>
                    <h3>Speaking</h3>
                    <p>If you are an industry professional looking to get involved as a speaker or company sponsor please fill out the form below.</p>
                </span>
                <ContactForm />
            </GenericPage>
        </section >
    );
}

export default FiatLux;
