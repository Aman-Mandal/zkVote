import React from 'react';

const PageTitle = ({ title, subtext }) => {
  return (
    <div className='border-b-[0.5px] border-[#2E2E2E] pb-4 mb-8'>
      <p className='font-semibold text-3xl mb-1'>{title}</p>
      <p className='text-[#9a9a9a] text-sm font-Avenir'>{subtext}</p>
    </div>
  );
};

export default PageTitle;
