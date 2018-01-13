import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import rootReducer from './rootReducer';
import DrummachineContainer from './containers/DrummachineContainer';
import './App.css';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

render(
  <Provider store={store}>
    <DrummachineContainer audioContext={audioContext} />
  </Provider>,
  document.getElementById('root')
);
