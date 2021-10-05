import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <aside className="menu white-background">
            <div className="main-content menu-content">
                <h1><a href="#home">HOME</a></h1>
                <nav>
                    <ul>
                        <li><a href="#mobile">Mobile</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
};
