import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import  ParentComponent from './components/ParentComponent'
import  UserGreeting from './components/UserGreeting'
import  NameList from './components/NameList'
class App extends Component{
  render() {
    return(
      <div className = "App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message></Message> */}
        {/* <Greet name = "Bruce" heroName = "Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name = "Clark" heroName = "SuperMan" >
          <button>Action</button>
        </Greet>
        <Greet name = "Diana" heroName = "Wonder Woman "/>
        <Welcome name = "Bruce" heroName = "Batman"></Welcome>
        <Welcome name = "Clark" heroName = "SuperMan"></Welcome>
        <Welcome name = "Diana" heroName = "Wonder Woman"></Welcome> */}

      </div>
    )
   
  }
}

export default App;
