import React from 'react';
import logo from './logo.svg';
import loho from './loho.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loho} className="App-logo" height="900px" alt="logo" />
        <p>
         Elbert programator
        </p>
     
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=-i3mnXuTlmI"
          target="_blank"
          rel="noopener noreferrer"
        >
         Aprenda a jogar forte de noite
        </a>
      </header>
    </div>
  );
}

export default App;
