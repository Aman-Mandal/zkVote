import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { imagefrombuffer } from 'imagefrombuffer';
import { ethers } from 'ethers';

const DAO = ({ name, logo, walletAddress, members }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push('/dashboard/12');
      }}
      className='text-white font-Avenir w-[285px] bg-[#181818] p-8  rounded-xl mt-10 cursor-pointer hover:bg-[#1b1b1b]'>
      <Image
        src={logo}
        alt='project-logo'
        height={70}
        width={70}
        className='rounded-md mb-5'
      />

      <p className='font-medium text-lg mb-1'>{name}</p>
      <p className='text-gray-400 text-sm'>{members} Members</p>

      <button
        onClick={() => {
          router.push(`/${walletAddress}/${name}`);
        }}
        className='w-full text-center mt-5 font-medium  py-3  bg-[#2E2E2E] rounded-full text-gray-100 text-sm'>
        Join DAO
      </button>
    </div>
  );
};

export default DAO;
