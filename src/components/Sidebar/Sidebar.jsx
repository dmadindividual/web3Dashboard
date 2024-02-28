import React from 'react'
import css from './Sidebar.module.css'
import logo from '../dash logo.png'
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src={logo} className={css.logo} alt="logo" width={20} height={20} />

      <div className={css.sidebar}>
        <FaHome />
        <IoSettings/>
        <CiMail/>
        <FaChartPie/>

      </div>
      <div className={css.logout}>
      <CiLogout/>
      </div>




    </div>
  )
}

export default Sidebar