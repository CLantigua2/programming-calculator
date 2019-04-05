import React from 'react';
import Container from './views/Container'
import Header from './views/Header'
import OutPut from './views/OutPut'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <OutPut />
      </Container>
    </div>
  );
}


export default App;
