import React, { Component } from 'react';
import './App.css';



export default class App extends Component{

  componentDidMount(): void {
    console.log("Hay semsy kella");
  }

render() {
  return (
    <div className='bg-orange-200 min-h-screen'>
      <h1 className='text-center text-red-600'>Fuck You..!</h1>
      <h2 className='text-center text-cyan-500'>Fuck You..!</h2>
      <h3 className='text-center text-blue-500'>Fuck You..!</h3>
      <h4 className='text-center text-lime-500'>Fuck You..!</h4>
    </div>
    
  );
}
}
