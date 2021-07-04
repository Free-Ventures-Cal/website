import React from 'react';
import './../styles/App.css';
import './../styles/FiatLux.css';

import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
import ContactForm from './ContactForm';

import fiatlux1 from './../assets/fiatlux1.JPG';
import fiatlux2 from './../assets/fiatlux2.JPG';

function FiatLux() {

    return (
        <section>
            <GenericTop
                header={'Fiat Lux'}
                description={'The Fiat Lux by Free Ventures initiative is our response to an increasing lack of gender diversity within the tech & startup ecosystem on campus. We aim to directly address this issue by providing amazing female students on campus with resources and mentorship from industry professionals.'}
            />
            <GenericPage>
                <div className="fiatlux-images">
                    <span>
                        <img src={fiatlux1} alt="Fiat Lux Image 1" />
                    </span>
                    <span>
                        <img src={fiatlux2} alt="Fiat Lux Image 2" />
                    </span>

                </div>
                <span className="pratikround2">
                    <h2>Overview</h2>
                    <p>Our team understands the importance of diversity throughout tech and entrepreneurship and recognizes the issues prevalence on campus. We aim to tackle this issue by working with our network of accomplished professionals to empower students as they are taking the first steps in their professional careers.</p>
                    <p>The Fiat Lux | Female Leaders initiative addresses the lack of gender diversity within tech and entrepreneurship by empowering amazing female students with resources and mentorship.</p>
                    <br />
                    <h2>Get Involved</h2>
                    <h3>Attending</h3>
                    <p>If you are a student interested in attending Fiat Lux, send an email to <a href="mailto:lulu@freeventures.org">lulu@freeventures.org</a>.</p>
                    <h3>Speaking</h3>
                    <p>If you are an industry professional looking to get involved as a speaker or company sponsor please fill out the form below</p>
                </span>
                <ContactForm />
            </GenericPage>
        </section>
    );
}

export default FiatLux;
