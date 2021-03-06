import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Video from './components/video'

function App(props) {
  // we get 2 pieces from useState to put inside the brackets:
  // the variable (counter) and the function (setCounter) to operate this variable
  // the starting point for this state begins at 0
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    // We define the function setCounter inside the parenthesis
    // (toggles the previous known state)
    // setCounter((prev) => !prev);
    // the following does the same
    setToggle(!toggle);
    console.log(toggle)
  }
  const incrementer = () => {
    // We define the function setCounter inside the parenthesis
    // (adds 1 to the previous known state)
    // setCounter((prev) => prev + 1);
    // the following does the same
    setCounter(counter + 1);
    console.log(counter)
  }
  return (
    <div className="App">
      <Nav tgl = {toggle}/>
      <h1>state</h1>
      <h2 className = {toggle ? "active" : ""}>
        Hello React
      </h2>
      <button onClick = {toggler}>
        Toggle
      </button>
      <h2>Counter: {counter}</h2>
      <button onClick = {incrementer}>
        Increment
      </button>
      <Video nr = {counter} sToggle = {toggler}/>
    </div>
  );
}

export default App;
