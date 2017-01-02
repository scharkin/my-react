import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const initialState = {
  tracks: [
    'Smells like spirit',
    'Enter sandman'
  ],
  playlists: [
    'My home playlist',
    'My work playlist'
  ]
};
function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return {
      ...state,
      tracks: [...state.tracks, action.payload]
    }
  } else if (action.type === 'DELETE_TRACK') {
    return state;
  } else if (action.type === 'ADD_PLAYLIST') {
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
// store.subscribe(() => {
//   console.log('subscribe', store.getState());
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   })
// })
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({type: 'ADD_TRACK', payload: trackName});
// })
