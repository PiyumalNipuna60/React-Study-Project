import { type } from 'os'
import { Component } from 'react'
import Post from '../../components/Post'


type PostDetails={
id:string;
title:string;
description : React.ReactNode;
hoursCount ?:number;
lectureName ?:string;
tags:string[];
}

type HomeProps={}

type homeState={
  postList:PostDetails[];
}




export default class Home extends Component <HomeProps,homeState>{

  constructor(props: HomeProps) {
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
      <div className='p-4'>

{this.state.postList.map((post,index)=>(
  <Post
  key={post.id}
  title={post.title}
  description={post.description}
  hourseCount={post.hoursCount}
  lectureName={post.lectureName}
  tags={post.tags}
  />
))}

        
       {/* <Post title='Lecture 01' 
       description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' 
       tags={["like","comment","shear"]} />

       <Post title='Lecture 02' 
       description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' 
       tags={["like","comment","shear"]} />
      
       <Post title='Lecture 03' 
       description=' ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia explicabo similique, at nihil necessitatibus debitis voluptate perferendis ullam eligendi veritatis, hic, consequatur blanditiis fugiat deserunt veniam commodi corporis accusantium?' 
       tags={["like","comment","shear"]} /> */}


      </div>
    );
  }
}
