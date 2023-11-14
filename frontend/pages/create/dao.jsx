import CreateStep1 from '@/components/DAO/CreateStep1';
import CreateStep2 from '@/components/DAO/CreateStep2';
import CreateStep3 from '@/components/DAO/CreateStep3';
import VerticalStepper from '@/components/DAO/Stepper';
import { SERVER_URL } from '@/constants';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useAccount } from 'wagmi';

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

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

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

  const nextPageHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousPageHandler = () => {
    if (page > 0) setPage((currPage) => currPage - 1);
  };

  const submitProjectHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${SERVER_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        tokenAddresses: [
          { chain: 'Ethereum', address: formData.ethereumAddress },
          { chain: 'zkEvm', address: formData.zkEVMAddress },
        ],
        daoContract: formData.daoAddress,
        socials: {
          twitter: formData.twitter,
          github: formData.github,
          telegram: formData.telegram,
          linkedin: formData.linkedIn,
          discord: formData.discord,
        },
      }),
    });

    const data = await response.json();

    console.log('data is', data);
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
        <form
          onSubmit={submitProjectHandler}
          className=' w-[400px] flex-[0.5]  py-8 px-10  mb-10'>
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
                    type='submit'
                    className='bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md'>
                    Submit
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => open()}
                    className='bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md'>
                    Connect
                  </button>
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
