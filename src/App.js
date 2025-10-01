import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LegalStrip from './components/LegalStrip';
import TypeformModal from './components/TypeformModal';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <LegalStrip />
      <Footer />
      <TypeformModal />
    </div>
  );
}

export default App;
