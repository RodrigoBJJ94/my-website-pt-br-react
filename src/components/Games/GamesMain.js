import React from "react";

export default function GamesMain({ language }) {
  return (
    <div className="games">
      <h4><a
        href="https://rodrigobrentano-jogo-da-velha.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Tic Tac Toe - 2 Players" : "Jogo da Velha - 2 Jogadores"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-jogo-da-velha-versus-cpu.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Tic Tac Toe - vs CPU" : "Jogo da Velha - vs CPU"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-jogo-da-forca.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Hangman Game" : "Jogo da Forca"}
      </a></h4>
      <h4><a
        href="https://rodrigobrentano-ping-pong.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Ping Pong - for Computer" : "Ping Pong - p/ Computador"}
      </a></h4>
      <h4><a
        href="https://rodrigo-brentano-jogo-da-nave.netlify.app"
        target="_blank"
        rel="noreferrer">
        {language === "English" ? "Ship Game - for Computer" : "Jogo da Nave - p/ Computador"}
      </a></h4>
    </div>
  );
};
