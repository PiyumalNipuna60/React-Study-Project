import { Login } from "@mui/icons-material";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home";
import Profile from "../../pages/profile/Profile";
import Header from "../Header";

export default class Content extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="mt-20">
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
      </>
    );
  }
}