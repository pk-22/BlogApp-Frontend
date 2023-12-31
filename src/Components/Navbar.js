import React from "react";
import { Link } from "react-router-dom";
import "../css/NavbarStyle.css";
import PopUpWorkerLogin from "../Components/Auth/PopupWorkerLogin";
import PopUpWorkerRegister from "../Components/Auth/PopUpWorkerRegister";

export const Navbar = (props) => {
  return (
    <div className="sidenav">
      <PopUpWorkerLogin />
      <PopUpWorkerRegister />
      <div className="logo">
        <Link to="/">
          <h3>{props.title}</h3>
        </Link>
      </div>
      <ul className="sidenav-list">
        <li>
          <Link to="/" className="navLink">
            <i className="fa fa-home icon"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" className="navLink">
            <i class="fa fa-bookmark icon"></i>Bookmarks
          </Link>
        </li>
        <li>
                <Link to='/random' className='navLink'>	
                <i className="fa fa-random icon"></i>Random</Link>
            </li>
            <li>
          <Link to="/new-blog" className="navLink">
            <i class="fa fa-pencil icon"></i>Write
          </Link>
        </li>
      </ul>
        <div className='auth'>
        <div class="dropup">
        <button class="dropbtn">Name</button>
        <div class="dropup-content">
            <Link to='/profile' className='navLink dropup-link'><i class="fa fa-user icon"></i>Profile</Link>
            <a href="#" className='navLink dropup-link'><i class="fa fa-cog icon"></i>Settings</a>
            <a href="#" className='navLink dropup-link'><i class="fa fa-sign-out icon"></i>LogOut</a>
        </div>
        {/* <br /> */}
        </div>
            <a href="" className='navLink'>Login</a> |
            <a href="" className='navLink'>Register</a> 
        </div>
    </div>
  );
};
