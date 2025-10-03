import React from 'react';
import './App.css';
import './components/ProfessionalStyles.css';
import CountdownPage from './components/CountdownPage';
import TypeformModal from './components/TypeformModal';

function App() {
  return (
    <div className="App">
      <CountdownPage />
      <TypeformModal />
    </div>
  );
}

export default App;
