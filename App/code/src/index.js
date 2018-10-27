import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

const startApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
  
if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}
