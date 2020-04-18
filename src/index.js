import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage/landingPage';
import Dashboard from './Tests/dashboard';
import NotFound from './NotFound';
import Results from './Tests/results';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
      <div>
          <Switch>
              <Route exact path ="/" component={LandingPage}/>
              <Route path="/industrie" render={(props) => <Dashboard {...props} test_type="industrie" />}/>
              <Route path="/phbmr" render={(props) => <Dashboard {...props} test_type="phbmr" />}/>
              <Route path="/autres" render={(props) => <Dashboard {...props} test_type="autres" />}/>
              <Route path="/results" component={Results}/>
              <Route component={NotFound}/>
          </Switch>
      </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
