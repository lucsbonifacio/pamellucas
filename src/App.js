import React from 'react';
import './App.css';
import Home from './pages/home';
import Thanks from './pages/thank-you';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/obrigado" component={Thanks} />
      </Router>
    </div>
  );
}

export default App;
