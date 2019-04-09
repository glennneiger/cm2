import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import ChannelList from './ChannelList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={ true } path="/" component={ Login } />
          <Route path="/channels" component={ ChannelList } />
        </Switch>
      </Router>
    );
  }
}

export default App;
