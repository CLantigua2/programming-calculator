import React, { Component } from 'react';
import { Route } from 'react-router'
// import ProgramCalc from './components/programCalc'
import Container from './views/Container'
import Nav from './components/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Route to="/" render={Nav} />
          <p>Calculator</p>
        </Container>
      </div>
    );
  }
}

export default App;
