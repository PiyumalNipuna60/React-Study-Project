import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import UserImage from "./../../assets/user.png";
import LogoutIcon from '@mui/icons-material/Logout';



export default class Header extends Component {
  render() {
    const activeLink = " border-b-4 cursor-pointer border-accent-main text-accent-main";
    const activeLink2="border-4 cursor-pointer border-accent-main rounded-full";
    const normalLink = "cursor-pointer";

    return (
        <div className="bg-accent-tes-200 h-13 w-full text-black fixed top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full h-full ">
            <div className="w-11/12 ">
              <h1 className="font-babylonica jus text-accent-main">MyFeed.com</h1>
            </div>
            <div className="w-11/12  ">
              <nav className="flex w-full justify-between font-heading pl-10">

              <NavLink to={"/home"}
              className={({ isActive })=>
              isActive ? activeLink : normalLink
              }>Home</NavLink>

              <NavLink to={"/about"}
              className={({isActive})=>
            isActive ? activeLink : normalLink
            } >About</NavLink>

              <NavLink to={"/Contact"} 
              className={({isActive})=>
            isActive ? activeLink : normalLink
            }>Contact</NavLink>

               <NavLink to={"/profile"} 
               className={({isActive})=>
                isActive ? activeLink2 : normalLink
            }>
                <img src={UserImage} alt="userImage" className="w-8 h-8 " />
                </NavLink>

                <NavLink to={"/"} >

                 <LogoutIcon />
                </NavLink>
             
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
