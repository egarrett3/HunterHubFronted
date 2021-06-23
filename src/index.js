import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import configureStore from './store/store';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';

window.addEventListener('DOMContentLoaded', () => {
  let store = {};
  let preloadedState = {};

  store = configureStore(preloadedState);


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store.store} persistor={store.persistor}/>, root)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
