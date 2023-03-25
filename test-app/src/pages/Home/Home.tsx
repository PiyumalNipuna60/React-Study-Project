import { Component } from 'react'
import Post from '../../components/Post'

export default class Home extends Component {
  render() {
    return (
      <div className='p-4'>
       <Post title='Lecture 01' description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' tags={["like","comment","shear"]} />
       <Post title='Lecture 01' description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' tags={[]} />
       <Post title='Lecture 01' description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' tags={[]} />
      </div>
    )
  }
}
