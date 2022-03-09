import React from 'react';
import ReactDOM from 'react-dom';
import Theme from "./scripts/Theme";
import './scripts/Scripts';
import './scss/style.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
