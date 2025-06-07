import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret World</h1>
        <p>Clique no botão abaixo para começar!</p>
        <button onClick={startGame}>Iniciar jogo</button>
    </div>
  )
}

export default StartScreen