import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DayNightThemeProvider from "./context/ThemeProvider";
import {OpenCloseProvider} from "./context/OpenCloseProvider";

ReactDOM.render(
  <DayNightThemeProvider>
    <OpenCloseProvider>
      <App/>
    </OpenCloseProvider>
  </DayNightThemeProvider>
  , document.getElementById('root'));
