import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Graph Plotter</h1>
        <Link to="/plot">Go to Plot Page</Link>
      </header>
    </div>
  );
}

export default App;
