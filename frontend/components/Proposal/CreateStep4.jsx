import React, { useEffect, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const CreateStep4 = ({ formData }) => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    console.log('here', formData);
  }, [formData]);

  return (
    <div className='min-h-[70vh] font-Avenir'>
      <p className='text-3xl font-semibold mb-3'>{formData.title}</p>
      <p className='text-[#c2c2c2]'>
        {showMore ? formData.description : formData.description.slice(0, 600)}
      </p>

      {formData?.description.length > 600 ? (
        <div
          className='cursor-pointer flex items-center gap-1 mt-2 text-gray-400'
          onClick={() => {
            setShowMore(!showMore);
          }}>
          <div>
            {showMore ? (
              <BiSolidUpArrow size={13} />
            ) : (
              <BiSolidDownArrow size={13} />
            )}
          </div>
          {showMore ? 'Read Less' : 'Read More'}
        </div>
      ) : null}

      <p className='text-gray-300 mt-6'>
        Proposal Ends on :{' '}
        <span className='font-semibold text-white'>
          {new Date(formData.date).toTimeString()}
        </span>
      </p>

      <div className='border-[0.5px] border-[#2E2E2E]  rounded-md mt-6'>
        <p className='py-5 border-b-[0.5px] border-[#2E2E2E] text-center text-lg font-semibold'>
          Voting
        </p>

        <div className='flex flex-col gap-3 py-3'>
          {formData.votingOptions.map((option) => (
            <p className='py-4 text-center mx-2 rounded-full border-[0.5px] bg-[#171717]  border-[#2E2E2E] '>
              {option.votingOption}
            </p>
          ))}
        </div>
      </div>

      <div className='border-[0.5px] border-[#2E2E2E]  rounded-md mt-6'>
        <p className='py-5 border-b-[0.5px] border-[#2E2E2E] text-center text-lg font-semibold'>
          Executable code
        </p>

        <div className='flex flex-col gap-3 py-3 px-4'>
          <div className='w-full'>
            <p className='text-gray-400'>Calldata:</p>
            <p className='text-[#454545] break-words'>
              0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dabad81af85554e9ae636395611c58f7ec1aaec5000000000000000000000000000000000000000000000000000000000000000f
            </p>
          </div>
          <div>
            <p className='text-gray-400'>Target:</p>
            <p className='text-[#454545] break-words'>
              {formData.targetAddress ? formData.targetAddress : '0x'}
            </p>
          </div>
          <div>
            <p className='text-gray-400'>Value:</p>
            <p className='text-[#454545] break-words'>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStep4;
