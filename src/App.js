import React from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard'
const choices = {
  rock: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "https://www.journeymexico.com/paper-you-can-write-on?showimg_aldggj=paper+you+can+write+on.jpg",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return (
    <div className="App">
      <ChoiceCard title="You" winner={true} imgURL={choices.scissors} />
      <ChoiceCard title="Computer" winner={false} imgURL={choices.paper} />
    </div>
  );
}

export default App;
