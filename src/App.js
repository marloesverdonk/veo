import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/trainers" exact component = {Trainers}/> */}
        </div>
      </main>
    </div>
  );
}

export default App;
