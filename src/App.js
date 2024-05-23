import './App.css';
import React, {Component} from 'react'
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome"
import Hello from "./Components/Hello"
import Message from "./Components/Message"
import Counter from "./Components/Counter" 
import FunctionClick from "./Components/FunctionClick"

class App extends Component {
  render() {
  return (
    <div className="App">
      <FunctionClick/>
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Brijesh" heroName="Batman"> 
      <p>This is children props</p>
      </Greet>
      <Greet name="Deep" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Ashu" heroName="Spiderman"/>

      <Welcome name="Brijesh" heroName="Batman"/>
      <Welcome name="Deep" heroName="Superman"/>
      <Welcome name="Ashu" heroName="Spiderman"/>



      <Hello/> 
       */}
    </div>
  );
}
}

export default App;
 