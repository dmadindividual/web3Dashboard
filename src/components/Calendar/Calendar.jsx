import React from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import css from "./Calenda.module.css";
import {  IoSearchOutline } from "react-icons/io5";
import Order from "../Order/Order";

const Calendar = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    darkMode: true,
    backgroundColor: "#1F1D2B",
    borderRadius: "4px",
    animation: "auto",
    animationDuration: 1000,
    animationDurationUpdate: 500,
    yAxis: {
      type: "value",
    },
    series: [
      {
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191,0)",
            },
            {
              offset: 1,
              color: "#f450D3",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#fe4c00",
            },
            {
              offset: 1,
              color: "#252836",
            },
          ]),
        },
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  return (
    <div className="mt-8 flex gap-2">
      <div className={`${css.container}flex flex-col gap-6 w-3/4`}>
        <div className={`${css.charts} p-3 rounded-md`}>
          <div className="flex flex-col gap-2 ml-14">
            <h1 className="text-xl font-semibold">Sales overview</h1>
            <p className="text-sm font-medium">
              Get a bird's eye view of your sales performance
            </p>
          </div>

          <ReactECharts option={option} />
        </div>

        <div className={`${css.history} mt-3 rounded-md flex flex-col justify-center border-white`}>
          <div className="flex justify-between p-4 bg-[#1f1d2b]">
            <div className="flex flex-col gap-1">
              <h2>Transaction history</h2>
              <p>Recent transaction details</p>
            </div>

            <div
              className={`flex items-center ${css.search} justify-center gap-3 `}
            >
              <IoSearchOutline size={20} />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center  p-5">
            <div className="flex gap-1">
              <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
              <span>No</span>
            </div>
            <p>Address</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Amount</p>
          </div>

          <div className="flex justify-between items-center gap-2 bg-[#1f1d2b] p-5">
          <div className="flex gap-1">
              <input type="checkbox" id="myCheckbox" name="myCheckbox"></input>
              <span>1</span>
            </div>
            <p>Address</p>
            <p>Product</p>
            <p>100 SOL</p>
            <p>25 pcs</p>
            <p>2500 SOL</p>
          </div>
        </div>
      </div>

  <Order/>
    </div>
  );
};

export default Calendar;
