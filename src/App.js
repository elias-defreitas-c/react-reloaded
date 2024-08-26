import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={HeroSection}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
