import React from 'react';
import ContactForm from './ContactForm';
import './../styles/App.css';
import GenericTop from './GenericTop';
import GenericPage from './GenericPage';
const sgMail = require('@sendgrid/mail');
var request = require("request");


function Partners() {

    return (
        <section>
            <GenericTop
                header={'Contact Us'}
                description={'Looking to get involved or have a question? Use this form to email us!'}
            />
            <GenericPage>
                <ContactForm company={true} />
            </GenericPage>
        </section>
    );
}

export default Partners;
