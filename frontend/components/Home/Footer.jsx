import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full text-white px-20  bg-[#1a1a1a] py-20 font-Poppins'>
      <h2 className='text-3xl font-semibold mb-10'>ZkVote</h2>
      <p className='text-gray-400 mb-12'>
        ZkVote is currrently built for Polygon x DevX Hackathon and should be
        used at your own risk. We take security seriously and our contracts have
        been thoroughly tested and formally verified but bugs may still exist.
      </p>

      <div className='flex justify-between font-light text-white items-center'>
        <p className='text-sm'>&#169; 2023 ZkVote Inc.</p>
        <ul className='flex gap-8 items-center text-white'>
          <li
            onClick={() => {
              router.push('/');
            }}
            className='cursor-pointer hover:scale-105'>
            Home
          </li>

          <li
            onClick={() => {
              router.push('/dashboard');
            }}
            className='cursor-pointer hover:scale-105'>
            Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
