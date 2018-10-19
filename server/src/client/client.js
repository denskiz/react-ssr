// Startup point for the client side application
// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

// Re hydrate application on the browser
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
