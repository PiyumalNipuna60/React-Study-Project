import { type } from 'os'
import React, { Component } from 'react'

type CardProp={
  title:string
  description:string
  icon:React.ReactNode
}

type CardState={}

export default class Card extends Component<CardProp,CardState> {
  render() {
    return (
      <div className="border border-slate-400 flex flex-col p-6 w-1/4 text-center rounded-2xl">
      <h1 className="mb-2">{this.props.title}</h1>
      <p>{this.props.description}</p>
      </div>
    )
  }
}
