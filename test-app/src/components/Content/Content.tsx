import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home";
import Profile from "../../pages/profile/Profile";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-20">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    );
  }
}