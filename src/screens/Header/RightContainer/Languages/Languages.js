import React from "react";
import { useContextAPI } from "../../../../context/ContextAPI";
import FlagUS from "../../../../icons/FlagUS.svg";
import FlagBR from "../../../../icons/FlagBR.svg";
import "./Styles.css";

export default function Languages() {

  const { setLanguage } = useContextAPI();

  return (
    <div className="headerLanguagesContainer">
      <div className="headerLanguageEnglishContainer">
        <button
          className="buttonLanguages"
          onClick={() => {
            setLanguage("us");
          }}>
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
          onClick={() => {
            setLanguage("br");
          }}>
          <img
            src={FlagBR}
            className="flagIcon"
            alt="Flag BR"
          />
        </button>
      </div>
    </div>
  );
};
