import React from "react";

const perguntas = [
  { numero: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
  { numero: "Pergunta 2", pergunta: "O React é __", resposta: "ma biblioteca JavaScript para construção de interfaces" },
  { numero: "Pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
  { numero: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
  { numero: "Pergunta 5", pergunta: " O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
  { numero: "Pergunta 6", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências" },
  { numero: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes " },
  { numero: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
]

export default function TelaFlashCard() {
  const[contador,setContador] = React.useState(0);
  const[concluidos,setConcluidos] = React.useState([]);
  return (
    <>
      <header>
        <img src="imagens/logo-pequeno.png" alt="logo-pequeno" />
        <h1>ZapRecall</h1>
      </header>

      <main>
        {perguntas.map(pergunta => <Perguntas numeroPergunta={pergunta} dados={pergunta} contador={() => setContador(contador + 1)} concluidos={(resultado) => setConcluidos([...concluidos, resultado])} />)}
      </main>

      <footer>
        <Resultado contador = {contador} concluidos = {concluidos} perguntas = {perguntas.length}/>
      </footer>
    </>
  );
}

function Perguntas(props) {
  const [tela, setTela] = React.useState("tela1");

  const [cor, setCor] = React.useState("");

  if (tela === "tela1") {
    return (
      <div className = {`perguntas ${cor}`} >
        <p>{props.numeroPergunta.numero}</p> 
        {cor == "" && <ion-icon name="play-outline" onClick={() => setTela("tela2")}></ion-icon>}
        {cor == "red" && <ion-icon name="play-outline" ></ion-icon>}
        {cor == "orange" && <ion-icon name="play-outline" ></ion-icon>}
        {cor == "green" && <ion-icon name="play-outline" ></ion-icon>}
      </div>
    );

  } else if (tela === "tela2") {
    return (
      <div className="tela-2">
        <p>{props.dados.pergunta}</p>
        <img src="imagens/setinha.png" alt="setinha" onClick={() => setTela("tela3")} />
      </div>
    );

  } else if (tela === "tela3") {
    return (
      <div className="tela-3">
        <h1>{props.dados.resposta}</h1>

        <button className="botao-tela3" onClick={
          () => {
            setTela("tela1");
            setCor("red");
            props.contador();
            props.concluidos("red");
          }}>Não lembrei</button>

        <button className="botao-tela3" onClick={
          () => {
            setTela("tela1");
            setCor("orange");
            props.contador();
            props.concluidos("orange");
          }
        }>Quase não lembrei</button>

        <button className="botao-tela3" onClick={
          () => {
            setTela("tela1");
            setCor("green");
            props.contador();
            props.concluidos("green");
          }
        }>Zap!</button>
      </div>
    )
  };
}

function Resultado(props) {
    let fim = props.concluidos.length === props.perguntas;
    let mensagem = true;
    for(let i = 0;i < props.concluidos.length; i++) {
      if(props.concluidos[i] == "red") {
        mensagem = false;
      }
    }
    return (
    <>
    {fim && mensagem && <p>Mensagem feliz</p>}
    {fim && !mensagem && <p>Mensagem triste</p>}
    {props.contador}/8 CONCLUÍDOS
      {props.concluidos.map(concluido => {
        if(concluido === "green") {
          return <ion-icon name="checkmark-circle"></ion-icon>
        } else if(concluido === "red"){
          return <ion-icon name="close-circle"></ion-icon>
        } else if(concluido === "orange") {
          return <ion-icon name="help-circle"></ion-icon>
        }
      })}
    </>
  );
}
