import React from 'react';
import HomeTitle from './HomeTitle';
import HomeMain from './HomeMain';
import HomeBackground from './HomeBackground';

export default function Home() {
    return (
        <section id="home" className="intro main-background section">
            <div className="main-content intro-content">
                <div className="intro-text-content">
                    <HomeTitle />
                    <HomeMain />
                </div>
                <HomeBackground />
            </div>
        </section>
    );
};
