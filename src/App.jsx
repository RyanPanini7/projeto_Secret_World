//CSS
import "./App.css"
//react
import {useCallback, useEffect, useState} from "react"
//data
import {wordsList} from "./data/words"

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWorld, setPickedWorld] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickedWorldAndPickedCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] // math.floor para poder arredondar para baixo, pois com random e retornado um numero quebrado.

    console.log(category)
    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)] 

    console.log(word)
  }

// starts secrets worlds games
  const startGame = () => {
    pickedWorldAndPickedCategory();
    
    
    setGameStage(stages[1].name) //ultimo a ser usado.
  }

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  // retry the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
