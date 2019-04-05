import React from 'react';
import Container from './views/Container'
import Tabs from './components/top/Tabs'
import OutPut from './views/OutPut'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <OutPut />
        <Tabs />
      </Container>
    </div>
  );
}


export default App;
