import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[70px] font-Poppins text-white py-6 items-center px-1 bg-[#111111] border-r border-[#1b1b1b] h-screen fixed z-20'>
      <p>GX.</p>
      <div className='flex flex-col gap-5 mt-20 text-xl'>
        <MdSpaceDashboard />
        <MdSpaceDashboard />
        <MdSpaceDashboard />
        <MdSpaceDashboard />
      </div>
    </div>
  );
};

export default Sidebar;
