import React, { Component } from 'react';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';



export default class App extends Component{

  componentDidMount(): void {
    console.log("Hay semsy kella");
  }

render() {
  return (
    <div className=''>
    <Home/>
    <About/>
    <Contact/>
    </div>

    
  );
}
}
