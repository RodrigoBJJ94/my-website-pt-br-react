import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import FlagUS from "../../icons/FlagUS.svg";
import FlagBR from "../../icons/FlagBR.svg";
import "./Styles.css";

export default function Header({ scrolltoScreen }) {

  const { language, setLanguage } = useContextAPI();

  return (
    <div className="headerMainContainer">
      <div className="headerContainer">
        <div className="headerLeftContainer">
          <div className="headerHomeContainer">
            <button
              onClick={() => scrolltoScreen("home")}
              className="headerHomeButtonTitle">
              HOME
            </button>
          </div>
        </div>
        <div className="headerRightContainer">
          <div className="headerSubContainers">
            <button
              onClick={() => scrolltoScreen("mobile")}
              className="headerButtonTitles">
              Mobile
            </button>
          </div>
          <div className="headerSubContainers">
            <button
              onClick={() => scrolltoScreen("web")}
              className="headerButtonTitles">
              Web
            </button>
          </div>
          <div className="headerSubContainers">
            <button
              onClick={() => scrolltoScreen("games")}
              className="headerButtonTitles">
              Games
            </button>
          </div>
          <div className="headerSubContainers">
            <button
              onClick={() => scrolltoScreen("contact")}
              className="headerButtonTitles">
              {
                language === "us"
                  ? "Contact"
                  : "Contato"
              }
            </button>
          </div>
          <div className="headerLanguagesContainer">
            <div className="headerLanguageEnglishContainer">
              <button
                className="buttonLanguages"
                onClick={() => setLanguage("us")}>
                <img
                  src={FlagUS}
                  className="flagIcon"
                  alt="Flag US"
                />
              </button>
            </div>
            <div className="headerLanguagePortugueseContainer">
              <button
                className="buttonLanguages"
                onClick={() => setLanguage("br")}>
                <img
                  src={FlagBR}
                  className="flagIcon"
                  alt="Flag BR"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
