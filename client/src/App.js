import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from './containers/SignUpContainer';
import SignInContainer from './containers/SignInContainer';
import PrivateRoute from './components/routes/PrivateRoute';
import AuthToken from './config/token';
import NavigationContainer from './containers/NavigationContainer';
import PostFormContainer from './containers/PostFormContainer';
import FeedContainer from './containers/FeedContainer';

const token = localStorage.getItem('token');

if (token) {
  AuthToken(token);
}

function App() {
  return (
    <div className="App">
      <NavigationContainer />
      <Router>
        <Switch>
          <Route exact path="/sign-in" component={SignInContainer} />
          <Route exact path="/sign-up" component={SignUpContainer} />
          <PrivateRoute exact path="/" component={FeedContainer} />
          <PrivateRoute exact path="/feed" component={PostFormContainer} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
