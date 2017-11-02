import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './components/routes/History';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
  <Router history={history}>
    <App style={{height: "100%"}} />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
