import React, { useEffect } from "react";
import VotingProgressBar from "../ProgressBar/ProgressBar";
import { ethers } from "ethers";
import { GovernorABI, SERVER_URL } from "@/constants";
import { useRouter } from "next/router";
import { useState } from "react";

const ProposalVotes = () => {
  const router = useRouter();
  const [forVotes, setForVotes] = useState(null);
  const [againstVotes, setAgainstVotes] = useState(null);

  const { dao, proposalId } = router.query;

  const getData = async () => {
    const data = await fetch(`${SERVER_URL}/dao/${dao}`);

    const response = await data.json();

    console.log({ response });

    const provider = new ethers.providers.JsonRpcProvider(
      "https://eth-goerli.g.alchemy.com/v2/rPfyhhDXz6kKnN7XlD_vI0HOuemQf5Tj"
    );

    const proposal = response.dao.proposals.filter(
      (proposal) => proposal._id.toString() === proposalId.toString()
    );

    console.log({ proposal });
    const contract = new ethers.Contract(
      response.dao.daoContract,
      GovernorABI,
      provider
    );

    const votes = await contract.proposals(proposal[0].proposalId);

    setForVotes(votes.forVotes.toString());
    setAgainstVotes(votes.againstVotes.toString());
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="flex-[0.3] bg-[#181818] font-Avenir rounded-md overflow-hidden h-fit">
      <p className="bg-[#232323] text-center py-4">Current Votes</p>
      <div className="px-3 py-5">
        <VotingProgressBar yesVotes={70} noVotes={30} />

        <div className="flex gap-3 mt-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-700 h-4 w-4 rounded-sm " />
            <p>YES</p>
          </div>

          <p>{forVotes && forVotes}</p>
        </div>

        <div className="flex gap-3 mt-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-700 h-4 w-4 rounded-sm" />
            <p>NO</p>
          </div>

          <p>{againstVotes && againstVotes}</p>
        </div>
      </div>
    </div>
  );
};

export default ProposalVotes;
