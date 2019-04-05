import React from 'react';
import Container from './views/Container'
import Tabs from './components/top/Tabs'
import TopSection from './views/TopSection'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Container>
        <TopSection />
        <Tabs />
      </Container>
    </div>
  );
}


export default App;
