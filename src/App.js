import React from 'react';
import Timer from './Timer';
import './App.css';

const App = () => {

  return (
    <div className="app-container">
      <h1 style={{color: 'white', fontSize: '3rem'}}>Reloj Pomodoro</h1>
      <Timer />
    </div>
  );
}

export default App;
