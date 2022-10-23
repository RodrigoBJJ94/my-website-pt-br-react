import React from "react";
import "./Header.css";

export default function Header({ setLanguage, language }) {
  return (
    <aside className="menu white-background">
      <div className="main-content menu-content">
        <h1>
          <a
            href="#home"
            className="home-a">
            HOME
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#mobile">
                Mobile
              </a>
            </li>
            <li>
              <a href="#projects">
                Web
              </a>
            </li>
            <li>
              <a href="#games">
                Games
              </a>
            </li>
            <li>
              <a href="#contact">
                {language === "English" ? "Contact" : "Contato"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={() => setLanguage("English")}>English</button>
      <button onClick={() => setLanguage("Portuguese")}>Portugês</button>
    </aside>
  );
};
