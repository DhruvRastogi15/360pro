import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/layout/home";
import Login from "./components/layout/login";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
