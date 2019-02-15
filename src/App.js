import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import TheList from './components/TheList'
import Generals from './components/Generals'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main" data-test="app-component">
          <Switch>
            <Route exact path="/"  render={props => <Home {...props} />} />
            <Route path="/theList"  render={props => <TheList {...props} />} />
            <Route path="/generals"  render={props => <Generals {...props} />} />
            <Route path="/generals/:generalsid"  render={props => <Generals {...props} />} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
