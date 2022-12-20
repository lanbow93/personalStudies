import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import {useState} from "react"


function Example(props) {
  return <h1>{props.children}</h1>
}

function App() {

  const [counter, setCounter]= useState({
    value: 1
  })

  const addOne = () => {
    const newState = {...counter}
    newState.value += 1;
    setCounter(newState) 
    console.log("Add One" + counter)
  }

  return (
    <div className="App">
      <h1>{counter.value}</h1><br/>
      <button onClick={addOne}>Add One</button>
    </div>
  );
}

export default App;
