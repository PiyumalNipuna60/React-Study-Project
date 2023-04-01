import React, { Component } from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post';
import { PostDetails } from '../../type/postDetails/PostDetails';


// type PostDetails={
//   id:string;
//   title:string;
//   description : React.ReactNode;
//   hoursCount ?:number;
//   lectureName ?:string;
//   tags:string[];
//   }
  
  type ProfileProps={}
  
  type ProfileState={
    postList:PostDetails[];
  }

export default class Profile extends Component <ProfileProps,ProfileState>{

  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Post 1",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
            hoursCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "2",
          title: "Post 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
            hoursCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "3",
          title: "Post 3",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
            hoursCount: 10,
            lectureName:"Piyumal",
          tags: ["ui", "ux"],
        },
        {
          id: "4",
          title: "Post 4",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
            hoursCount: 10,
          tags: ["ui", "ux"],
        },
      ],
    };
  }

  render() {
    return (
      <>
      <Header />
      <div className='mt-20 py-6 px-32'>
       {this.state.postList.map((post)=>
       <Post 
       key={post.id}
       title={post.title}
       description={post.description}
       tags={post.tags}
       hourseCount={post.hoursCount}
       lectureName={post.lectureName}
       />
       )}
      </div>
      </>
    )
  }
}
