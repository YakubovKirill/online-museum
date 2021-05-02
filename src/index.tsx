import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './App';
import { allReducers } from './store/reducers';

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);