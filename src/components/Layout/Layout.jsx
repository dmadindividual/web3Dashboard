import React from "react";
import css from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import profileimg from './profileImg.png'

const Layout = () => {

  return (

      <div className={css.container}>
        <Sidebar />



        <div className={css.dashboard}>
          <div
            className={`${css.header} flex justify-between pt-2 px-10 items-center`}
          >
            <div
              className={`flex items-center ${css.search} justify-center gap-3 `}
            >
              <IoSearchOutline size={20} />
              <input type="text" placeholder="Search" />
            </div>

            <div className={`${css.left} flex items-center justify-center gap-3`}>
              <IoIosNotifications />
              <div className={`flex`}>
             
                <span>Topg@gmail.com</span>
              </div>
             <img src={profileimg} alt='profileimg' width={30} height={30}/>
            </div>
          </div>
          <Dashboard/>
  
        </div>
  
      </div>
   
      

  );
};

export default Layout;
