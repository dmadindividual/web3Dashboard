import React from 'react';
import products from '../../data/data';
import { FcSalesPerformance } from 'react-icons/fc';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { IoIosWallet } from 'react-icons/io';
import { GrTransaction } from 'react-icons/gr';
import { FaShareAlt } from 'react-icons/fa';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { SlOptionsVertical } from "react-icons/sl";
import css from './Transaction.module.css'

const Transaction = () => {
  const icons = [FcSalesPerformance, MdOutlineDocumentScanner, IoIosWallet, GrTransaction, FaShareAlt, CiMoneyCheck1];

  return (
    <div className='mt-5   '>
      <div className='flex justify-between gap-2'>
        {products.map((product, index) => (
          <div className={`${css.item} Item flex flex-col gap-2`} key={product.id}>
            {/* Dynamically render the icon based on index */}
           <div className={`${css.icons} cursor-pointer flex justify-between`}>
           {React.createElement(icons[index], { size: 36 }, )}
           <SlOptionsVertical size={15} />
           </div>
            <p>{product.name}</p>
            <p className='text-2xl'>{product.price}</p>
            <p className='font-bold'>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
