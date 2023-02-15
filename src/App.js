import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Task2} from "./Components/Task2";
import React from "react";
import {Task} from "./Components/Task";

function App() {
  return (
    <div className="App">
     <Task/>
     <Task2/>
    </div>
  );
}

export default App;
