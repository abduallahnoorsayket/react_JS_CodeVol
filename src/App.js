import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import { Hello } from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { FunctionClick } from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComp from "./components/MethodAsProps/ParentComp";
import UserGreeting from "./components/Rendering/UserGreeting";
import { NameList } from "./components/Rendering/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComp /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Morgan" heroName="Spiderman" />
        <Welcome name="Bruce" heroName="SuperMan" /> */}
        {/* <Greet name="Bruce" heroName="SuperMan">
          <p>hello Super man</p>
        </Greet>
        <Greet name="diana" heroName="WondaerMan">
          <button>Action</button>
        </Greet>
        

        
        <Welcome name="diana" heroName="WondaerMan" />
        <Welcome name="Morgan" heroName="Spiderman" /> */}
        {/*
         */}
        {/* <Hello /> */}
      </div>
    );
  }
}
export default App;
