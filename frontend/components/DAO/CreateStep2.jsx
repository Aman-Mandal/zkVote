import React, { useState } from 'react';
import {
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoDiscord,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

const CreateStep2 = ({ formData, setFormData }) => {
  const [isExistingDAO, setIsExistingDAO] = useState(false);

  return (
    <div className='min-h-[70vh]'>
      <div className='flex flex-col mt-2 gap-4'>
        <div>
          <label className='text-sm text-gray-400'>Governance Tokens *</label>
          <p className='text-xs  text-gray-600 '>
            Enter governor token addresses across all the chains.
          </p>
        </div>

        {/* Twitter */}
        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoTwitter />
            <p>Ethereum</p>
          </div>
          <input
            className='bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     twitter: e.target.value,
            //   });
            // }}
            // value={formData?.twitter}
            type='text'
            required
          />
        </div>

        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoGithub />
            <p>Polygon</p>
          </div>
          <input
            className='bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     github: e.target.value,
            //   });
            // }}
            // value={formData?.github}
            type='text'
            required
          />
        </div>
        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoTelegram />
            <p>ZkEVM</p>
          </div>
          <input
            className='bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     telegram: e.target.value,
            //   });
            // }}
            // value={formData?.telegram}
            type='text'
            required
          />
        </div>

        <div className='flex flex-col mt-6'>
          <label className='text-sm  mb-1 text-gray-400'>Token Name *</label>
          <input
            placeholder='AAVE'
            className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
            // onChange={(e) => {
            //   setFormData({
            //     ...formData,
            //     liveLink: e.target.value,
            //   });
            // }}
            // value={formData?.liveLink}
            type='text'
            required
          />
        </div>
      </div>

      <div className='flex gap-3 items-center mt-6'>
        <input
          onChange={(e) => {
            setIsExistingDAO(e.target.checked);
            console.log('xxx', e.target.checked);
          }}
          type={'checkbox'}
          value={isExistingDAO}
        />
        <label className='text-sm text-gray-400'>
          Already have an existing DAO?
        </label>
      </div>

      <div className='flex flex-col mt-6'>
        <label className='text-sm  mb-1 text-gray-400'>
          Governor Address (optional){' '}
        </label>
        <input
          className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
          // onChange={(e) => {
          //   setFormData({
          //     ...formData,
          //     liveLink: e.target.value,
          //   });
          // }}
          // value={formData?.liveLink}
          type='text'
          required
        />
        <p className='text-xs  text-gray-600 '>
          Enter governor (DAO) address on zkEVM chain.
        </p>
      </div>
    </div>
  );
};

export default CreateStep2;
