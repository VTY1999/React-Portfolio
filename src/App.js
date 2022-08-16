import React from 'react';
import NavBar from './components/navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
