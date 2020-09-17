import React from 'react';
import Stock from './Stock';
import './App.css';

const defaultContextData = {
  dark: false,
  toggle: () => { }
};

function App() {
  return (
    <div className="App">
      <Stock></Stock>
    </div>
  );
}

export default App;