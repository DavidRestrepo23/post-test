import React from 'react';
import Navigation from './components/header/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from './containers/SignUpContainer';
import Feed from './components/feed/Feed';
import CreateFeed from './components/feed/CreateFeed';
import SignInContainer from './containers/SignInContainer';
import PrivateRoute from './components/routes/PrivateRoute';
import AuthToken from './config/token';

const token = localStorage.getItem('token');

if (token) {
  AuthToken(token);
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Feed} />
          <PrivateRoute exact path="/create-feed" component={CreateFeed} />
          <Route exact path="/sign-in" component={SignInContainer} />
          <Route exact path="/sign-up" component={SignUpContainer} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
