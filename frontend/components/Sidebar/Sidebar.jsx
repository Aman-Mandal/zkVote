import { useRouter } from 'next/router';
import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col w-[70px] font-Poppins text-white py-6 items-center px-1 bg-[#111111] border-r border-[#2E2E2E] h-screen fixed z-20'>
      <p
        className='cursor-pointer'
        onClick={() => {
          router.push('/dashboard');
        }}>
        GX.
      </p>
      <div className='flex flex-col gap-5 mt-20 text-xl'>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
