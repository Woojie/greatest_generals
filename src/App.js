import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main" data-test="app-component">
          Hello World
        </div>
      </React.Fragment>
    );
  }
}

export default App;
