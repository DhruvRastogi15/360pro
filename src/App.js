import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/layout/home";
import Login from "./components/layout/login";
import Admin from "./components/Admin/admin";
import TestAdd from "./components/Admin/testAdd";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/testAdd" component={TestAdd} />
      </div>
    </Router>
  );
}

export default App;
