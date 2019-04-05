import React from 'react';
import Container from './views/Container'
import Header from './components/top'
import OutPut from './views/OutPut'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <OutPut />
      </Container>
    </div>
  );
}


export default App;
