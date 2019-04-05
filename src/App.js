import React from 'react';
import { Route } from 'react-router'
// import ProgramCalc from './components/programCalc'
import Container from './views/Container'
import Nav from './components/Nav'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Route to="/"><Nav /></Route>
        <p>Calculator</p>
      </Container>
    </div>
  );
}


export default App;
