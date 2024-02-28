import React from "react";
import css from "./Order.module.css";
import spicy from './avatar (1).png'
import spicy2 from './avatar.png'
import spicy3 from './block avatar.png'
import spicy4 from './image 4.png'
import sol from './sol.png'
const Order = () => {
  return (
    <div className={`${css.container} flex flex-col gap-2 `}>
      <div className="bg-[#1F1D2B] flex flex-col gap-2 w-full h-3/6 rounded-lg">
        <div
          className={`${css.header} flex justify-between pt-2 px-5 items-center`}
        >
          <h2 className="font-bold">Sales metrics</h2>
          <button className="text-xs font-semibold border-white">See all</button>
        </div>

        <div className={`${css.card} flex flex-col gap-2 overflow-y-hidden`}>
            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                    <img src={spicy} c alt="spicy" y />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                    <img src={spicy} c alt="spicy" y />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                    <img src={spicy} c alt="spicy" y />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                    <img src={spicy} c alt="spicy" y />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>
       
        </div>
      </div>


      <div className="bg-[#1F1D2B] flex flex-col gap-2 w-full h-3/6 rounded-lg">
        <div
          className={`${css.header} flex justify-between pt-2 px-5 items-center`}
        >
          <h2 className="font-bold">Sales metrics</h2>
          <button className="text-xs font-semibold border-white">See all</button>
        </div>

        <div className={`${css.card} flex flex-col gap-2 overflow-y-hidden`}>
            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                    <img src={sol}  alt="spicy"  />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                <img src={sol}  alt="spicy"  />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                <img src={sol}  alt="spicy"  />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>

            <div className="flex justify-between items-center px-5">
                <div className='flex gap-2'>
                <img src={sol}  alt="spicy"  />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-bold">Spicy seasoned sea...</h4>
                        <span>18,000 sold</span>
                    </div>
                </div>

                <h2 className="font-bold">100 SOL</h2>

            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Order;
