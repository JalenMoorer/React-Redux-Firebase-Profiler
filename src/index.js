import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './components/routes/History';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { getUserSuccess } from './actions';
import firebase from 'firebase'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const config = {
  apiKey: "AIzaSyAbTakx5gdsOIKAKEABU2cp_55Z4huSa9E",
  authDomain: "manager-ee939.firebaseapp.com",
  databaseURL: "https://manager-ee939.firebaseio.com",
  projectId: "manager-ee939",
  storageBucket: "manager-ee939.appspot.com",
  messagingSenderId: "428426279650"
}

firebase.initializeApp(config);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

firebase.auth().onAuthStateChanged((user) => {

  store.dispatch(getUserSuccess(user))

  ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('root'));
  registerServiceWorker();
});
