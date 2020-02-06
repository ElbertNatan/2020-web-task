import React from 'react';
import logo from './logo.svg';
import loho from './loho.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loho} className="App-logo" height="600px" alt="logo" />
        <p>
         Elbert God
        </p>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Aprenda forte de noite
        </a>
      </header>
    </div>
  );
}

export default App;
