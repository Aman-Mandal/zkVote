import CreateStep1 from '@/components/DAO/CreateStep1';
import CreateStep2 from '@/components/DAO/CreateStep2';
import CreateStep3 from '@/components/DAO/CreateStep3';
import VerticalStepper from '@/components/DAO/Stepper';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CreateDao = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    ethereumAddress: '',
    polygonAddress: '',
    zkEVMAddress: '',
    tokenName: '',
    daoAddress: '',
    threshold: '',
    twitter: '',
    discord: '',
    github: '',
    linkedIn: '',
    telegram: '',
    logo: '',
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CreateStep1
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <CreateStep2
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return (
        <CreateStep3
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };

  const isConnected = true;

  const nextPageHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousPageHandler = () => {
    if (page > 0) setPage((currPage) => currPage - 1);
  };

  const submitProjectHandler = (e) => {
    e.preventDefault();
    console.log('xxxSubmit', formData);
  };

  return (
    <div className='min-h-screen bg-[#111111] pt-20  font-Avenir'>
      <div className='flex  text-white'>
        <div className='flex-[0.35] flex flex-col px-20 py-14 border-r-[0.5px]  border-[#2E2E2E]'>
          <div className='mb-10'>
            <p className='text-3xl font-semibold mb-1 text-[#f2f2f2]'>
              Create DAO
            </p>
            <p className='text-sm text-[#707070]'>
              Setup your DAO in few simple steps.
            </p>
          </div>
          <VerticalStepper page={page} />
        </div>
        <form className=' w-[400px] flex-[0.5]  py-8 px-10  mb-10'>
          {PageDisplay()}
          <div className='flex justify-between mt-8 items-center'>
            {page !== 0 ? (
              <button
                type='button'
                onClick={previousPageHandler}
                className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <IoIosArrowBack />
                <p>Previous</p>
              </button>
            ) : (
              <p className='text-[#181818]'>.</p>
            )}

            {page === 2 ? (
              <div>
                {isConnected ? (
                  <button
                    className='w-[150px] text-center  py-3 bg-[#4f4f57] rounded-lg text-gray-100 text-sm hover:bg-[#3b3b44]'
                    onClick={submitProjectHandler}>
                    Submit
                  </button>
                ) : (
                  <ConnectButton />
                )}
              </div>
            ) : (
              <button
                type='button'
                onClick={nextPageHandler}
                className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <p>Next</p>
                <IoIosArrowForward />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDao;
