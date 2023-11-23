import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { createRef, useState } from 'react';
import VotingModal from './VotingModal';

const ProposalTitleCard = ({ title, prId, creator, createdAt }) => {
  const [showVoteModal, setShowVoteModal] = useState(false);

  const router = useRouter();

  const { proposalId } = router.query;

  console.log(createdAt);
  return (
    <>
      <div className='bg-[#181818] p-8 rounded-t-md flex justify-between items-center'>
        <div className='flex-[0.75] '>
          <p className='bg-green-300 rounded-md px-4 py-1 text-green-800 font-semibold text-xs w-fit mb-5'>
            Active
          </p>
          <p className='font-semibold text-2xl text-[#f2f2f2]'>{title}</p>
        </div>
        <button
          onClick={() => {
            setShowVoteModal(true);
          }}
          className='bg-[#f2f2f2] py-3 px-6 w-[150px] text-black font-semibold text-sm rounded-md hover:bg-white'>
          Vote now
        </button>
      </div>
      <div className='w-full flex items-center py-4 px-8 rounded-b-md bg-[#232323] gap-8'>
        <div className='flex items-center gap-3 text-[#797979]'>
          <Image
            src={'/assets/pic.svg'}
            alt='project-logo'
            height={30}
            width={30}
            className='rounded-full'
          />

          <p>
            by{' '}
            <span className='font-semibold'>
              {creator.substring(0, 7) + '...' + creator.substring(37, 42)}
            </span>
          </p>
        </div>
        |
        <div className='flex items-center gap-1 font-semibold text-[#797979]'>
          <p>PID</p>
          <p>{prId.slice(0, 5) + '...' + prId.slice(-10)}</p>
        </div>
        |
        <div className='flex items-center gap-1 font-semibold text-[#797979]'>
          <p>Proposed on:</p>
          <p>
            {createdAt ? new Date(createdAt).toLocaleString() : 'Unknown'}
          </p>
        </div>
      </div>

      {showVoteModal && (
        <VotingModal
          proposalId={prId}
          proposalName={title}
          onClose={() => {
            setShowVoteModal(false);
          }}
        />
      )}
    </>
  );
};

export default ProposalTitleCard;
