'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaMicrophone, FaSearch, FaBell } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Context } from '@/context/AppContext';
const Header = () => {
  const context = useContext(Context);
  const handleToggle = () => {
    context.setToggles(!context.toggles);
  };
  return (
    <div className=' py-3 fixed top-0 w-screen z-10 bg-black '>
      <div className='container grid grid-cols-3 '>
        <div className='  justify-self-start flex items-center gap-5'>
          <HiMenu
            onClick={handleToggle}
            className='text-2xl text-white/65 cursor-pointer'
          />
          <div className='relative cursor-pointer'>
            <Image
              alt=''
              src={'/logo (1).png'}
              className=' h-10 w-24'
              height={60}
              width={40}
            />
            <span className='absolute -right-5 -top-0 text-white/75 text-xs'>
              BD
            </span>
          </div>
        </div>
        <div className=' justify-self-center flex items-center w-full gap-5'>
          <div className='flex items-center w-full'>
            <Input placeholder='Search' />
            <FaSearch className='text-4xl text-gray-400 bg-slate-700/45 cursor-pointer h-12 w-14 py-2 px-4 rounded-r-full' />
          </div>
          <div className=' h-12 w-14'>
            <FaMicrophone className='text-gray-400 bg-slate-700/45 text-4xl p-2 rounded-full  w-full h-full cursor-pointer' />
          </div>
        </div>
        <div className='  justify-self-end flex items-center gap-8'>
          <div className=' items-center cursor-pointer flex relative'>
            <FaBell className='text-2xl bg-transparent text-white/65 ' />
            <span className='bg-red-600 absolute right-0 -top-2 p-[3px]  rounded-full text-xs'>
              1
            </span>
          </div>
          <div>
            <Image
              alt=''
              src={'/img.png'}
              className=' h-10 w-10 rounded-full border border-white/60 cursor-pointer'
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
