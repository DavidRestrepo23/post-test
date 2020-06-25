import React from 'react';
import Navigation from './components/header/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
