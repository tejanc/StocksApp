import React from 'react';
import Stock from './Stock';
import './App.css';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from "./theme.js";

const defaultContextData = {
    dark: false,
    toggleL: () => { }
};


function App() {
  return (
    <div className="App">
      <Stock></Stock>
    </div>
  );
}

export default App;
