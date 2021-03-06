import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import TheList from './components/TheList'
import Generals from './components/Generals'
import PageDoesNotExist from './PageNotFound/404Error'
import General from './components/General'

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
            <Route path="/general/:generalsid"  render={props => <General {...props} />} />
            <Route component={PageDoesNotExist} />
          </Switch>
        </div>x
      </React.Fragment>
    );
  }
}

export default App;
