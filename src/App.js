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
import StyleSheet from "./components/Styling/StyleSheet";
import Inline from "./components/Styling/Inline";
import "./components/appStyles.css";
import Style from "./components/appStyles.module.css";
import Form from "./components/FormHandle/Form";
import LifeCycleA from "./components/LifeCycleMet/LifeCycleA";
import FragmentDemo from "./components/Fragments/FragmentDemo";
import Table from "./components/Fragments/Table";
import ParentComponet from "./components/PureComponent/ParentComponet";
import RefsDemo from "./components/Refs/RefsDemo";
import FocusInput from "./components/Refs/FocusInput";
import FRParentInput from "./components/Refs/FRParentInput";
import PortalDemo from "./components/Portals/PortalDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PortalDemo/>
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComponet /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={Style.success}>Success</h1>
        <Inline /> */}
        {/* <StyleSheet primary={true} /> */}
        {/* <NameList /> */}
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
