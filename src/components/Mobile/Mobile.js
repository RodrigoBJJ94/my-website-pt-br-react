import React from 'react';
import './Mobile.css';
import MobileTitles from './MobileTitles';
import MobileMain from './MobileMain';
import MobileBackground from './MobileBackground';

export default function Mobile() {
  return (
    <section id="mobile" className="white-background section apps-back">
      <div className="main-content grid-one-content mobile">
        <div className="intro-text-content">
          <MobileTitles />
          <MobileMain />
        </div>
        <MobileBackground />
      </div>
    </section>
  );
};
