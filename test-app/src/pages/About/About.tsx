import React, { Component } from 'react'
import AboutIntro from '../../components/AboutIntro'
import CardContainer from '../../components/CardContainer'
import Post from '../../components/Post'

export default class About extends Component {

  render() {
    return (
    <div>
        <AboutIntro />
        <CardContainer />
    </div>
    )
  }
}
