import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const DAO = ({ id, name, logo, walletAddress, members }) => {
  const [image, setImage] = useState('');
  const router = useRouter();

  const getRandomImage = (number) => {
    return Math.floor(Math.random() * number) + 1;
  };

  useEffect(() => {
    const number = getRandomImage(2);

    if (number == 1) {
      setImage('/assets/pic.svg');
    } else {
      setImage('/assets/pic.png');
    }
  }, []);

  return (
    <div
      onClick={() => {
        router.push(`/dashboard/${id}`);
      }}
      className='text-white font-Avenir w-[285px] bg-[#181818] p-8  rounded-xl mt-10 cursor-pointer hover:bg-[#1b1b1b]'>
      <Image
        src={image}
        alt='project-logo'
        height={70}
        width={70}
        className='rounded-md mb-5'
      />

      <p className='font-medium text-lg mb-1'>{name}</p>
      <p className='text-gray-400 text-sm'>{getRandomImage(10)} Members</p>

      <button
        onClick={() => {
          router.push(`/dashboard/${id}`);
        }}
        className='w-full text-center mt-5 font-medium  py-3  bg-[#2E2E2E] rounded-full text-gray-100 text-sm'>
        View Details
      </button>
    </div>
  );
};

export default DAO;
