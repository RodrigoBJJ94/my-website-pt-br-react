import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import GamesImage from "../../images/GamesImage.svg";
import "./Styles.css";

export default function Games({ screensRef }) {

  const { language } = useContextAPI();

  return (
    <section
      ref={screensRef.games}
      className="gamesMainContainer">
      <div className="gamesContainer">
        <div className="gamesContentContainer">
          <div className="gamesTitleContainer">
            <p className="gamesTitle">
              GAMES
            </p>
          </div>
          <div className="gamesSecondaryTitleContainer">
            <p className="gamesSecondaryTitle">
              {
                language === "us"
                  ? "My Web Games"
                  : "Meus Games Web"
              }
            </p>
          </div>
          <div className="gamesAppsMainContainer">
            <div className="gamesAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-jogo-da-velha-versus-cpu.netlify.app"
                  className="gamesAppText">
                  {
                    language === "us"
                      ? "Tic Tac Toe - vs CPU"
                      : "Jogo da Velha - vs CPU"
                  }
                </a>
              </p>
            </div>
            <div className="gamesAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-jogo-da-velha.netlify.app"
                  className="gamesAppText">
                 {
                    language === "us"
                      ? "Tic Tac Toe - 2 Playes"
                      : "Jogo da Velha - 2 Jogadores"
                  }
                </a>
              </p>
            </div>
            <div className="gamesAppsContainer">
              <p>
                <a
                  href="https://rodrigobrentano-jogo-da-forca.netlify.app"
                  className="gamesAppText">
                  {
                    language === "us"
                      ? "Hangman"
                      : "Jogo da Forca"
                  }
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="gamesImageContainer">
          <img
            src={GamesImage}
            className="gamesImage"
            alt="Games image"
          />
        </div>
      </div>
    </section>
  );
};
