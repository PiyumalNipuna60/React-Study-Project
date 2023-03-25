import { type } from 'os'
import React, { Component } from 'react'

type PostProp={
    title:string;
    description:string;
    tags:string[];
}

type PostState={}

export default class Post extends Component<PostProp,PostState> {
  render() {
    return (
        <div className='p-6 border border-slate-500 w-full rounded-2xl mt-2'>
        <h3 className='text-center'>{this.props.title}</h3>
        <p>
         {this.props.description}
        </p>

        <span className='mt-3 flex space-x-3 w-full'>
         <span className='  border border-slate-500 rounded-2xl px-6 py-2' >
         <h6>Tag 1</h6>
         </span>

         <span className='  border border-slate-500 rounded-2xl px-6 py-2' >
         <h6>Tag 1</h6>
         </span>
    

         <span className='  border border-slate-500 rounded-2xl px-6 py-2' >
         <h6>Tag 1</h6>
         </span>
        </span>

       </div>
    )
  }
}
