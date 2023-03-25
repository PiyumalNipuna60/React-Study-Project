import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/profile/Profile";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hay semsy kella");
  }

  render() {
    return (
      <div className="text-center ">
        {/* <Counter /> */}
        <Content />
        {/* <Header /> */}

        <Login />
      </div>
    );
  }
}
