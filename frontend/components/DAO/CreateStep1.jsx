import React, { useRef, useState } from 'react';
import Image from 'next/image';

const CreateStep1 = ({ formData, setFormData }) => {
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState();
  return (
    <div>
      <div className='flex flex-col mt-8'>
        <label className='text-sm  mb-1 text-gray-400'>Name *</label>
        <input
          className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData?.name}
          type='text'
        />
      </div>

      <div className='flex flex-col mt-3 mb-5'>
        <label className='text-sm  mb-1 text-gray-400'>Description *</label>
        <textarea
          rows={6}
          className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
          value={formData?.description}
          type='text'
        />
        <p className='text-xs  text-gray-600 '>
          Keep the description short, engaging, and descriptive. It should show
          the essence of your project in few sentences.
        </p>
      </div>

      <div className='flex flex-col '>
        <label className='text-sm text-gray-400 mb-1'>Choose Category *</label>
        <select
          onChange={(e) => {
            setFormData({
              ...formData,
              category: e.target.value,
            });
          }}
          value={formData?.category}
          class='bg-[#181818] outline-none border border-gray-900 mb-4  py-3 px-2 text-gray-300 text-sm rounded-lg '>
          <option
            unselectable='on'
            disabled>
            Select categories from here
          </option>
          <option value={'Social'}>Social</option>
          <option value={'Defi'}>Defi</option>
          <option value={'Protocol'}>Protocol</option>
          <option value={'Gaming'}>Gaming</option>
        </select>
      </div>

      <>
        <p className='text-sm  mb-1 text-gray-400 mt-3'>Logo *</p>
        <div className='flex gap-12'>
          <div className='h-[90px] overflow-hidden'>
            <Image
              className='rounded-lg cursor-pointer'
              src={file ? file : '/assets/pic.svg'}
              alt='profile pic'
              priority
              height={90}
              width={90}
            />
          </div>
          <div>
            <label className='cursor-pointer'>
              <button
                type='button'
                onClick={() => {
                  hiddenFileInput.current.click();
                }}
                className='w-[200px] text-center  py-3 bg-[#292929] rounded-lg text-gray-100 text-sm hover:bg-[#3b3b44]'>
                Upload here
              </button>
              <input
                ref={hiddenFileInput}
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => {
                  try {
                    setFile(URL.createObjectURL(e.target.files[0]));
                    setFormData({
                      ...formData,
                      logo: e.target.files[0],
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
              <p className='text-sm  text-gray-400 mt-2 w-[300px]'>
                Upload a 1:1 aspect ratio Image of size at max 5MB.
              </p>
            </label>
          </div>
        </div>
      </>
    </div>
  );
};

export default CreateStep1;
