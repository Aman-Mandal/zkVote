import { useRouter } from 'next/router';
import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { BsDatabaseAdd, BsDatabaseFillAdd } from 'react-icons/bs';
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col w-[70px] font-Poppins text-white py-6 items-center px-1 bg-[#111111] border-r border-[#2E2E2E] h-screen fixed z-20'>
      <p
        className='cursor-pointer'
        onClick={() => {
          router.push('/dashboard');
        }}>
        ZV
      </p>
      <div className='flex flex-col gap-8 mt-20 text-xl'>
        {/* <GoHome /> */}

        <div
          onClick={() => {
            router.push('/dashboard');
          }}
          className={` ${
            router.pathname === '/dashboard' ? 'bg-white/10' : 'bg-transparent'
          } cursor-pointer hover:bg-white/10 p-2 rounded-md `}>
          <GoHomeFill />
        </div>

        <div
          onClick={() => {
            router.push('/create/dao');
          }}
          className={` ${
            router.pathname === '/create/dao' ? 'bg-white/10' : 'bg-transparent'
          } cursor-pointer hover:bg-white/10 p-2 rounded-md `}>
          <BsDatabaseFillAdd />
        </div>
        <div
          onClick={() => {
            router.push('/dashboard');
          }}
          className={` ${
            router.pathname === '/settings' ? 'bg-white/10' : 'bg-transparent'
          } cursor-pointer hover:bg-white/10 p-2 rounded-md `}>
          <IoSettingsSharp />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
