import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, TitleChange] = useState(["성인 코트 추천", '강남우동', '파이썬독학', '홍대', '여의도']);
  let[like, likeChange] = useState(0);

  function likeButton(){
    likeChange(like +1)
    console.log("clicked")
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
              <p>✊</p>
              </div>
            </div>
          </div>
        <div>
        <div className='score'>
            <div className='score-text'>
              <h1>0</h1>
            </div>
            <div className='score-text'>
              <h1>:</h1>
            </div>
            <div className='score-text'>
              <h1>0</h1>
            </div>
        </div>
        <div className='win-text'>
          <h1>YOU WIN</h1></div>
        </div>
          <div className='player-container'>
          <h1>Player</h1>
            <div className='card-container'>
            
              <div className='card-icon'>
              <p>✋</p>
              </div>

            </div>
          </div> 
        </div>

        <div className='buttons-group'>
          <div className='button-card'>✊</div>
          <div className='button-card'>✌️</div>
          <div className='button-card'>✋</div>
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
