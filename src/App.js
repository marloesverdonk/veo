import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Jeugd from "./components/Jeugd"
import Senioren from "./components/Senioren"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/jeugd" exact component = {Jeugd}/> 
          <Route path="/senioren" exact component = {Senioren}/> 

        </div>
      </main>
    </div>
  );
}

export default App;
