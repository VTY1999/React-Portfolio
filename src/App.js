import React from 'react';
import NavBar from './components/NavBar/navbar';
import MobileMenu from './components/NavBar/mobileMenu';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MobileMenu />
      <Home />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
