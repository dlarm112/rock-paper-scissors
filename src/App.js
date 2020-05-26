import React, { useState } from "react";
import './App.css';
import ChoiceCard from './components/ChoiceCard'

const CHOICES = {
  rock:{
    url:  "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    name: "rock"
  },
  paper: {
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    name: 'paper'
},
  scissors: {
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
    name: 'scissors'
},
};

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  let [userC, setUserC] = useState({}); 
  let [computerC, setComputerC] = useState({}); 
  const [previousWinner, setPreviousWinner] = useState(null);
  const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

  function ChoiceCard(props) {
    const won = props.title === props.previousWinner;
    let className;
    const hasPreviousGame =
      props.previousWinner === "Computer" || props.previousWinner === "You";
    if (hasPreviousGame) {
      className = won ? "winner" : "loser";
    }
  
    let prompt;
    if (won) {
      prompt = "Won";
      className = won ? "winner" : "loser";
    } else if (props.previousWinner === "Tie") {
      prompt = "Tie";
    } else if (props.previousWinner === null) {
      prompt = "Start";
    } else {
      prompt = "Lose";
    }
  
    return (
      <div className={`choice-card ${className}`}>
        <h1>{props.title}</h1>
        <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
        <h3>{prompt}</h3>
      </div>
    );
  }
  
  const onPlayerChoose = playerChoice => {
    setUserC(CHOICES[playerChoice])
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log("result", result)
    console.log("comp choice", compChoice)
    setComputerC(CHOICES[compChoice])
    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  };

  const getRoundOutcome = userChoice => {
    let computerChoice = getRandomChoice().name;
    let result;
    console.log(computerChoice,'result')
  
    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }
  
    if (userChoice === computerChoice) result = "Tie game!";
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);



    return [result, computerChoice];
  };
  const getRandomChoice = () => {
    
    let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
    let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
  };
  return (
<div className="App">
  <div className="container">
    <div className="row mb-3">
      <div className="col-md-8 themed-grid-col">   
      <ChoiceCard title="You" choice={userC.name} winner={true} imgURL={userC.url} previousWinner={previousWinner}/>
      <h1>{prompt}</h1>
      <div className="container">
        <button
         className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("rock")}>
          Rock
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => onPlayerChoose("paper")}>
          Paper
        </button>
        <button
           className="btn btn-success btn-lg"
           onClick={() => onPlayerChoose("scissors")}>
           Scissors
        </button>
      </div>
      <ChoiceCard title="Computer" choice={computerC.name} winner={false} imgURL={computerC.url} previousWinner={previousWinner}/>
      </div>
    </div>
  </div>
  <div className="col-md-4 themed-grid-col">
   <h3>History</h3>
   <ul>
    {gameHistory.map(result => {
      return <li>{result}</li>;
    })}
    </ul>
  </div>
</div>


  
  )
}

export default App;
