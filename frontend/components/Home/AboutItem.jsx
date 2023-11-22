import Image from 'next/image';
import React from 'react';

const AboutItem = ({ imgUrl, title, subtitle, index }) => {
  return (
    <div className='flex flex-col justify-center items-center my-40 relative'>
      <Image
        src={imgUrl}
        height={300}
        width={300}
        alt={title}
      />
      <h2 className='text-white font-semibold text-3xl mt-8 w-full'>{title}</h2>
      <p className='text-gray-200 mt-3 '>{subtitle}</p>

      <p className='absolute -top-10 right-4 text-8xl text-[#441ABB]'>
        {index}.
      </p>
    </div>
  );
};

export default AboutItem;
