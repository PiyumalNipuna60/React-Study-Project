import { count } from 'console';
import { type } from 'os'
import React, { Component } from 'react'


type CounterPropes = {}
type CounterState={
    count:number;
}

export default class Counter extends Component<CounterPropes,CounterState> {
constructor(props: CounterPropes){
  super(props);
  this.state={
    count: 0,
  };
}

increseCount=()=>{
this.setState({count : this.state.count+1});
}

decreseCount=()=>{
this.setState({count:this.state.count-1});
}



  render() {
    return (
      <div className='p-10'>
        <h1>Count : {this.state.count}</h1>
         <li className='py-2'></li>
        <div className='flex mt-5 space-x-3 justify-center'>
    
       <button
       disabled={this.state.count==10 ? true : false} 
       className='border border-green-800 px-4 py-2 text-green-800 rounded-2xl hover:text-white hover:bg-green-800 hover:h-12 hover:w-30 ' onClick={this.increseCount}>Increes </button>
        <button 
        disabled={this.state.count==0 ? true : false}
        className='border border-red-800 py-2 px-4 text-red-800 rounded-2xl hover:text-white hover:bg-red-800' onClick={this.decreseCount}>Decrease </button>
        </div>
      </div>
    )
  }
}
