import React, {Component} from 'react';
import firebase from 'firebase'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Main from './routes/Main';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAbTakx5gdsOIKAKEABU2cp_55Z4huSa9E",
      authDomain: "manager-ee939.firebaseapp.com",
      databaseURL: "https://manager-ee939.firebaseio.com",
      projectId: "manager-ee939",
      storageBucket: "manager-ee939.appspot.com",
      messagingSenderId: "428426279650"
    }

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
