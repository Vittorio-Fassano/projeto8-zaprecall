import React from "react";
import TelaFlashCard from "./telaflashcard";

export default function TelaInicial() {
    const [escondido, setEscondido] = React.useState(true);

    console.log("entrei 1")
    return (
        escondido === true ?
        <div className = "primeira-tela">
            <img src = "imagens/logo.png" alt = "logo"/>
            <h1>ZapRecall</h1>
            <button className = "botao" onClick = {() => setEscondido(false)}>Iniciar Recall!</button>
        </div>
        :
        <TelaFlashCard />
    );
}