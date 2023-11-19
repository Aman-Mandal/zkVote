import CreateStep2 from "@/components/Proposal/CreateStep2";
import CreateStep3 from "@/components/Proposal/CreateStep3";
import VerticalStepper from "@/components/DAO/Stepper";
import CreateStep1 from "@/components/Proposal/CreateStep1";
import { PROPOSAL_STEPS, SERVER_URL } from "@/constants";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAccount } from "wagmi";
import CreateStep4 from "@/components/Proposal/CreateStep4";
import { ethers } from "ethers";

const CreateProposal = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    votingOptions: [{ votingOption: "YES" }, { votingOption: "NO" }],
    contractAddress: "",
    contractAbi: [],
    inputParams: [],
    targetAddress: "",
  });

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const createProposal = async () => {
    const data = await fetch(`${SERVER_URL}/proposal`, {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        proposedBy: "Wallet address goes here", //!this entry needs to be filled
        proposalId: "proposalId goes here", //!this entry needs to be filled
      }),
    });

    const response = await data.json();

    if (data.status === 201) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "dao contract address", //! this entry needs to be filled
        "dao contract interface", //! this entry needs to be filled
        signer
      );

      const iface = new ethers.utils.Interface(formData.contractAbi);
      const calldata = iface.encodeFunctionData(
        formData.functionName,
        ...formData.inputParams
      );

      await contract.propose(
        [formData.targetAddress],
        [0],
        [calldata],
        formData.description
      );
      //post the data proposal on blockchain
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <CreateStep1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <CreateStep2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <CreateStep3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <CreateStep4 formData={formData} />;
    }
  };

  const nextPageHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousPageHandler = () => {
    if (page > 0) setPage((currPage) => currPage - 1);
  };

  const submitProposalHandler = async (e) => {
    e.preventDefault();
    console.log("DONE!");
  };

  return (
    <div className="min-h-screen bg-[#111111] pt-20  font-Avenir">
      <div className="flex  text-white">
        <div className="flex-[0.35] flex flex-col px-20 py-14 border-r-[0.5px]  border-[#2E2E2E]  ">
          <div className="sticky top-[140px]">
            <div className="mb-10">
              <p className="text-3xl font-semibold mb-1 text-[#f2f2f2]">
                Create Proposals (ZkEVM)
              </p>
              <p className="text-sm text-[#707070]">
                Create and raise an onchain proposal in few simple steps.
              </p>
            </div>
            <VerticalStepper steps={PROPOSAL_STEPS} page={page} />
          </div>
        </div>
        <form
          onSubmit={submitProposalHandler}
          className=" w-[400px] flex-[0.5]  py-8 px-10  mb-10"
        >
          {PageDisplay()}
          <div className="flex justify-between mt-8 items-center">
            {page !== 0 ? (
              <button
                type="button"
                onClick={previousPageHandler}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <IoIosArrowBack />
                <p>Previous</p>
              </button>
            ) : (
              <p className="text-[#181818]">.</p>
            )}

            {page === 3 ? (
              <div>
                {isConnected ? (
                  <button
                    type="submit"
                    className="bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="bg-[#292929] hover:bg-[#333333] text-sm py-2 px-6 rounded-md"
                  >
                    Connect
                  </button>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={nextPageHandler}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
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

export default CreateProposal;
