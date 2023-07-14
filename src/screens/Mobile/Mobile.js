import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import MobileImage from "../../images/MobileImage.svg";
import "./Styles.css";

export default function Mobile({ screensRef }) {

  const { language } = useContextAPI();

  return (
    <section
      ref={screensRef.mobile}
      className="mobileMainContainer">
      <div className="mobileContainer">
        <div className="mobileContentContainer">
          <div className="mobileTitleContainer">
            <p className="mobileTitle">
              MOBILE APPS
            </p>
          </div>
          <div className="mobileSecondaryTitleContainer">
            <p className="mobileSecondaryTitle">
              {
                language === "us"
                  ? "My Mobile Android Apps"
                  : "Meus aplicativos Mobile Android"
              }
            </p>
          </div>
          <div className="mobileAppsMainContainer">
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.animeApp"
                  className="mobileAppText">
                  Anime App
                </a>
              </p>
            </div>
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.weathercitiesclima"
                  className="mobileAppText">
                  {
                    language === "us"
                      ? "Cities Weather"
                      : "Climas das Cidades"
                  }
                </a>
              </p>
            </div>
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ticTacToeJogoDaVelha"
                  className="mobileAppText">
                  {
                    language === "us"
                      ? "Tic Tac Toe"
                      : "Jogo da Velha"
                  }
                </a>
              </p>
            </div>
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.conversormedidas"
                  className="mobileAppText">
                  {
                    language === "us"
                      ? "Measure Converter"
                      : "Conversor de Medidas"
                  }
                </a>
              </p>
            </div>
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.calories"
                  className="mobileAppText">
                  {
                    language === "us"
                      ? "Calorie Counter"
                      : "Contador de Calorias"
                  }
                </a>
              </p>
            </div>
            <div className="mobileAppsContainer">
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.calculatorCalculadoraCalculator"
                  className="mobileAppText">
                  {
                    language === "us"
                      ? "Calculator"
                      : "Calculadora"
                  }
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mobileImageContainer">
          <img
            src={MobileImage}
            className="mobileImage"
            alt="Mobile image"
          />
        </div>
      </div>
    </section>
  );
};
