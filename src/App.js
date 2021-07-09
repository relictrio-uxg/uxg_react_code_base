import './App.css';
import React, { Suspense } from 'react';
import UXG from './components/views/UXG';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// This file could be used as a playground to test out your components and/or pages
// Please make sure to replace your id in the env.local file

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <UXG />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
