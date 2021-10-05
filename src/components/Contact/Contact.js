import React from 'react';
import './Contact.css';
import ContactTitle from './ContactTitle';
import ContactMain from './ContactMain';

export default function Contact() {
    return (
        <section id="contact" className="intro main-background section">
            <div className="main-content intro-contact">
                <div className="intro-text-content contact">
                    <ContactTitle />
                    <ContactMain />
                </div>
            </div>
        </section>
    );
};
