import React from "react";
import css from "./Dashboard.module.css";
import Transaction from "../../components/Transactions/Transaction";
import Calendar from "../../components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="m-8 px-2 ">
      <div className="paragrahText flex justify-between items-center ">
        <div className="profile flex flex-col gap-2 ">
          <h2 className="font-black  text-2xl">Welcome back, Top G</h2>
          <span className="font-bold text-gray-50">
            Monitor your customer activities and gain market insight
          </span>
        </div>

        <div className="left flex gap-3">
          <select className={css.select}>
            <option value="volvo">SOL</option>
            <option value="saab">USDC</option>
            <option value="opel">BTC</option>
            <option value="audi">USDT</option>
          </select>

          <select className={css.select}>
            <option value="volvo">Week</option>
            <option value="saab">Day</option>
            <option value="opel">Month</option>
            <option value="audi">Year</option>
          </select>
        </div>
      </div>
      <Transaction/>
      <Calendar/>
    </div>
  );
};

export default Dashboard;
