import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Root, RootHeader } from './Root';
import Container from './Container';
import Entries from './Entries';
import Sponsors from './Sponsors';
import Judging from './Judging';
import Reggie from './Reggie';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute components={{ header: RootHeader, body: Root }} />
      <Route path="entry-details" components={{ body: Entries }} />
      <Route path="sponsors" component={{ body: Sponsors }} />
      <Route path="judging-details" component={{ body: Judging }} />
      <Route path="reggie" component={{ body: Reggie }} />
    </Route>
  </Router>
);
// TODO: role component
// TODO: contest id constant, registration widgets
// TODO: sponsor list as data

ReactDOM.render(<App />, document.getElementById('root'));
