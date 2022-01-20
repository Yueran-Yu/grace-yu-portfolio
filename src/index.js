import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DayNightThemeProvider from "./context/ThemeProvider";

ReactDOM.render(
  <DayNightThemeProvider>
    <App/>
  </DayNightThemeProvider>
  , document.getElementById('root'));
