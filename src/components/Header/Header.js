import React from 'react';

export default function Header() {
    return (
        <aside className="menu white-background">
            <div className="main-content menu-content">
                <h1><a href="#home">HOME</a></h1>
                <nav>
                    <ul>
                        <li><a href="#mobile">Mobile</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
};
