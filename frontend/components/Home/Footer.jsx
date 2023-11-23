import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full text-white px-20 mt-[150px] pb-20'>
      <h2 className='text-3xl font-semibold mb-10'>ZkVote</h2>
      <p className='text-gray-400 mb-4'>
        ZkVote is currrently built for Devx X Polygon Hackathon and should be
        used at your own risk. We take security seriously and our contracts have
        been thoroughly tested and formally verified but bugs may still exist.
      </p>

      <div className='flex justify-between font-light text-white items-center'>
        <p className='text-sm'>&#169; 2023 ZkVote.</p>
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
