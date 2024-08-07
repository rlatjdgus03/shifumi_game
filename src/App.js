import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [choices, choicesChange] = useState(["✊", "✌️", "✋"]);
  let [choicesComputer, choicesComputerChange] = useState("✊");
  let [checkWinText, checkWinTextChange] = useState("");
  let[scoreComputer, scoreComputerChange] = useState(0);
  let[scorePlayer, scorePlayerChange] = useState(0);


  // function likeButton(){
  //   likeChange(like +1)
  //   console.log("clicked")
  // }
  const randNum = Math.floor(Math.random() * 3);
  let computerChoice = choices[randNum]
  function computerTurn()
  {
    choicesComputerChange(computerChoice)
  }

  function checkWinCondition(playerChoice)
  {
    console.log( playerChoice, computerChoice)

     if(playerChoice == computerChoice)
     {
      checkWinTextChange("DRAW");
     } else if (
      (playerChoice === "✊" && computerChoice === "✌️") ||
      (playerChoice === "✌️" && computerChoice === "✋") ||
      (playerChoice === "✋" && computerChoice === "✊")
    ) {
      checkWinTextChange("YOU WIN");
      scorePlayerChange(scorePlayer + 1);
    } else {
      checkWinTextChange("YOU LOSE");
      scoreComputerChange(scoreComputer + 1);
    }

  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>Shifumi game </h4>
      </div>
      <div className='body'>
        <div className='player-computer-div'>
          <div className='computer-container'>
          <h1>Computer</h1>
            <div className='card-container'>
            
              <div className='card-icon'>
              <p>{ choicesComputer }</p>
              </div>
            </div>
          </div>
        <div>
        <div className='score'>
            <div className='score-text'>
              <h1>{ scoreComputer }</h1>
            </div>
            <div className='score-text'>
              <h1>:</h1>
            </div>
            <div className='score-text'>
              <h1>{ scorePlayer }</h1>
            </div>
        </div>
        <div className='win-text'>
          <h1>{checkWinText}</h1></div>
        </div>
          <div className='player-container'>
          <h1>Player</h1>
            <div className='card-container'>
            
              <div className='card-icon'>
              <p>{ choices[0] }</p>
              </div>

            </div>
          </div> 
        </div>

        <div className='buttons-group'>
          <div className='button-card'><span onClick={ ()=> {
            let copy = [...choices]
            copy[0] = '✊';
            choicesChange(copy);
            computerTurn(); 
            checkWinCondition('✊')
            } }>✊</span></div>
          <div className='button-card'><span onClick={ ()=> {
             let copy = [...choices]
             copy[0] = '✌️';
             choicesChange(copy);
             computerTurn();
             checkWinCondition('✌️')
            } }>✌️</span></div>
          <div className='button-card'><span onClick={ ()=> {
            let copy = [...choices]
            copy[0] = '✋';
            choicesChange(copy);
            computerTurn();
            checkWinCondition('✋')
            } }>✋</span></div>
        </div>

        <div className='game-rule'>
          <h1>Rules</h1>
        <div className='rules'>
          <p>Welcome to Shifumi Game game. 
          The rules are simple: paper wins against rock; and scissors wins against paper. 
          If both players throw the same hand signal, it is considered a tie, and play resumes until 
          there is a clear winner.
          </p>
        </div>
        </div>

        






      </div>
    </div>
  );
}



{/* <div className="App">
<div className="black-nav">
  <h4>shifumi game </h4>
</div>
<button onClick={() => {
  let copy = [...글제목];
  copy.sort();
  TitleChange(copy)

}}>가나다순 정렬</button>





<Modal/>


</div>
);
}

function List()
{
let post = '강남우동맛집';
let [글제목, TitleChange] = useState(["성인 코트 추천", '강남우동', '파이썬독학']);
let[like, likeChange] = useState(0);

function likeButton(){
likeChange(like +1)
console.log("clicked")
}
<div className='list'>
<h4>{ 글제목[0] } <span onClick={ likeButton }>👍</span> {like} </h4>
<p>2월 15일 발행</p> 
<button onClick={ ()=> {
글제목.sort();

let copy = [...글제목];
copy[0] = '여자코트 추천';
TitleChange(copy) 
}}>버튼</button>
</div> 
}

function Modal()
{
return (
<div className='modal'>
<h4>제목</h4>
<p>날짜</p>
<p>상세내용</p>
</div>
)
} */}

function Modal()
{
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
