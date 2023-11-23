import ProposalDescription from '@/components/Proposal/ProposalDescription';
import ProposalTitleCard from '@/components/Proposal/ProposalTitleCard';
import ProposalVotes from '@/components/Proposal/ProposalVotes';
import { SERVER_URL } from '@/constants';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Proposal = () => {
  const [proposalInfo, setProposalInfo] = useState(null);
  const router = useRouter();

  const { proposalId } = router.query;

  async function getData() {
    const data = await fetch(`${SERVER_URL}/proposal/${proposalId}`);

    const response = await data.json();

    console.log('response is', response);

    setProposalInfo(response.proposal);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='bg-[#111111] min-h-screen font-Avenir text-white p-10 pt-20 shadow-md shadow-[#3a3a3a]'>
      {proposalInfo && (
        <ProposalTitleCard
          title={proposalInfo.title}
          creator={proposalInfo.proposedBy}
          prId={proposalInfo.proposalId}
          createdAt={proposalInfo?.createdAt}
        />
      )}

      <div className='flex mt-10 gap-10'>
        {proposalInfo && (
          <ProposalDescription description={proposalInfo.description} />
        )}
        <ProposalVotes />
      </div>
    </div>
  );
};

export default Proposal;
