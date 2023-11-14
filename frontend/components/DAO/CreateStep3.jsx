import Image from 'next/image';
import React, { useState } from 'react';
import {
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoGithub,
  BiLogoDiscord,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

const CreateStep3 = ({ formData, setFormData }) => {
  return (
    <div className='min-h-[70vh] py-10'>
      <label className='text text-gray-400'>Socials </label>

      <div className='flex flex-col mt-2 gap-4'>
        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px]  py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoTwitter />
            <p>Twitter</p>
          </div>
          <input
            placeholder='https://twitter.com/@username'
            className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                twitter: e.target.value,
              });
            }}
            value={formData?.twitter}
            type='text'
          />
        </div>

        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px]  py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoGithub />
            <p>Github</p>
          </div>
          <input
            placeholder='https://github.com/example'
            className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                github: e.target.value,
              });
            }}
            value={formData?.github}
            type='text'
          />
        </div>
        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px]  py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoTelegram />
            <p>Telegram</p>
          </div>
          <input
            placeholder='https://telegram.com'
            className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                telegram: e.target.value,
              });
            }}
            value={formData?.telegram}
            type='text'
          />
        </div>

        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px]  py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoLinkedinSquare />
            <p>LinkedIn</p>
          </div>
          <input
            placeholder='https://www.linkedin.com/company/example'
            className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                linkedIn: e.target.value,
              });
            }}
            value={formData?.linkedIn}
            type='text'
          />
        </div>

        <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px]  py-2 border-r-[0.5px] border-gray-700'>
            <BiLogoDiscord />
            <p>Discord</p>
          </div>
          <input
            placeholder='https://discord.gg'
            className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                discord: e.target.value,
              });
            }}
            value={formData?.discord}
            type='text'
          />
        </div>
      </div>
    </div>
  );
};

export default CreateStep3;
