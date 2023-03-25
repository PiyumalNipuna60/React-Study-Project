import { type } from 'os'
import React, { Component } from 'react'

type TagProp={
    text:string;
}

type TagState={}

export default class Tag extends Component <TagProp,TagState>{
  render() {
    return (
        <span className='  border border-slate-500 rounded-2xl px-6 py-2' >
        <h6>{this.props.text}</h6>
        </span>
    )
  }
}
