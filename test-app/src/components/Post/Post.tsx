import { type } from 'os'
import React, { Component } from 'react'
import Tag from '../Tag';

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
         {this.props.tags.map((tagText)=>
            <Tag text={tagText}/>
            )}
    
        </span>

       </div>
    )
  }
}
