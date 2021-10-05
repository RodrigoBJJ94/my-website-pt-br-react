import React from 'react';
import './Games.css';
import GamesTitles from './GamesTitles';
import GamesMain from './GamesMain';
import GamesBackground from './GamesBackground';

export default function Games() {
    return (
        <section id="games" className="grid-one white-background section back">
            <div className="main-content grid-one-content">
                <div className="intro-text-content">
                    <GamesTitles />
                    <GamesMain />
                </div>
                <GamesBackground />
            </div>
        </section>
    );
};
