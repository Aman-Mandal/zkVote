import { useRouter } from 'next/router';
import React from 'react';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';
import Navbar from './Navbar';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className='flex h-[93vh] flex-col items-center pt-40'>
        <p className='text-gray-400 font-Poppins text-xl font-light uppercase'>
          Welcome to ZkVOTE
        </p>
        <p className='text-center text-[80px] text-white font-bold font-Poppins leading-[110px]'>
          Crosschain  governance<br /> via {' '}
          <span className='text-[#6736F1]'>ZkProofs</span>
        </p>

        <button
          onClick={() => {
            router.push('/dashboard');
          }}
          className='bg-[#6736F1] py-5 w-[300px] text-white text-xl font-semibold font-Poppins flex items-center gap-1  justify-center rounded-full mt-14 hover:bg-white hover:text-[#6736F1] '>
          <p className='text-center'>Get Started </p>
          <HiMiniArrowSmallRight size={35} />
        </button>
      </div>
    </>
  );
};

export default Header;
