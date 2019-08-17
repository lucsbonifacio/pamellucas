import React from 'react';
import './App.css';
import Home from './pages/home';
import Thanks from './pages/thank-you';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="pamellucas">
        <Route path="/" exact component={Home} />
        <Route path="/obrigado" component={Thanks} />
        <Route component={Home} />
      </Router>
    </div>
  );
}

export default App;
