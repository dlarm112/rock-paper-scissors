export const CHOICES = {
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

  
  export const getRoundOutcome = userChoice => {
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