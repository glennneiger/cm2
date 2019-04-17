import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import ChannelList from './components/ChannelList';
import Lobby from './components/lobby/Lobby';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={ true } path="/" component={ Login } />
          <Route path="/channels" component={ ChannelList } />
          <Route path="/lobby" component={ Lobby } />
        </Switch>
      </Router>
    );
  }
}

export default App;
