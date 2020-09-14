import React from 'react';
import Stock from './Stock';
import './App.css';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from "./theme.js";
import Card from './Card';

const defaultContextData = {
  dark: false,
  toggle: () => { }
};

function App() {
  return (
    <div className="App">
      <Stock></Stock>
      <Card></Card>
    </div>
  );
}

export default App;