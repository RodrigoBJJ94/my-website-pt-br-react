import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import WebImage from "../../images/WebImage.svg";
import "./Styles.css";

export default function Web({ screensRef }) {

  const { language } = useContextAPI();

  return (
    <section
      ref={screensRef.web}
      className="webMainContainer">
      <div className="webContainer">
        <div className="webContentContainer">
          <div className="webTitleContainer">
            <p className="webTitle">
              WEB APPS
            </p>
          </div>
          <div className="webSecondaryTitleContainer">
            <p className="webSecondaryTitle">
              {
                language === "us"
                  ? "My Web Apps"
                  : "Meus aplicativos Web"
              }
            </p>
          </div>
          <div className="webAppsMainContainer">
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-annotations-maker.netlify.app"
                  className="webAppText">
                  {
                    language === "us"
                      ? "Annotations Maker"
                      : "Criador de Anotaçãoes"
                  }
                </a>
              </p>
            </div>
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-currency-converter.netlify.app"
                  className="webAppText">
                  {
                    language === "us"
                      ? "Currency Converter"
                      : "Conversor de Moedas"
                  }
                </a>
              </p>
            </div>
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-pomodoro.netlify.app"
                  className="webAppText">
                  Pomodoro
                </a>
              </p>
            </div>
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-calculator-of-bmi.netlify.app"
                  className="webAppText">
                  {
                    language === "us"
                      ? "BMI Calculator"
                      : "Calculadora de IMC"
                  }
                </a>
              </p>
            </div>
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-text-case-converter.netlify.app"
                  className="webAppText">
                  {
                    language === "us"
                      ? "Text Case Converter"
                      : "Conversor de Textos"
                  }
                </a>
              </p>
            </div>
            <div className="webAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-lista-de-tarefas.netlify.app"
                  className="webAppText">
                  {
                    language === "us"
                      ? "To-do List"
                      : "Lista de Tarefas"
                  }
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="webImageContainer">
          <img
            src={WebImage}
            className="webImage"
            alt="Web image"
          />
        </div>
      </div>
    </section>
  );
};
