import { type } from 'os'
import React, { Component } from 'react'
import Tag from '../Tag';

type PostProp={
    title:string;
    description:React.ReactNode;
    hourseCount ?:number;
lectureName ?:string;
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
         <span className='flex space-x-5'>
            {this.props.hourseCount ? (
                <p>
                    <strong>House Count : </strong> {this.props.hourseCount}
                </p>
            ):null}
            {this.props.lectureName ? (
                <p>
                    <strong>Lecture Name : </strong> {this.props.lectureName}
                </p>
            ):null}
         </span>
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
