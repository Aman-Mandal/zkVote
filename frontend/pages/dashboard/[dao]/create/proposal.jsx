"use client";

import CreateStep2 from "@/components/Proposal/CreateStep2";
import CreateStep3 from "@/components/Proposal/CreateStep3";
import VerticalStepper from "@/components/DAO/Stepper";
import CreateStep1 from "@/components/Proposal/CreateStep1";
import {
  PROPOSAL_STEPS,
  SERVER_URL,
  VoteOnZkEvmABI,
  voteOnZkEvmAddress,
} from "@/constants";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAccount } from "wagmi";
import CreateStep4 from "@/components/Proposal/CreateStep4";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { GovernorABI } from "../../../../constants/index";
import Loader from "@/components/Layout/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProposal = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    votingOptions: [{ votingOption: "YES" }, { votingOption: "NO" }],
    contractAddress: "",
    contractAbi: [],
    functionName: "",
    inputParams: [],
    targetAddress: "",
  });
  const [daoInfo, setDaoInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const { dao } = router.query;

  const getData = async () => {
    const data = await fetch(`${SERVER_URL}/dao/${dao}`);

    const response = await data.json();

    setDaoInfo(response.dao);
    console.log("response is", response);
  };

  useEffect(() => {
    getData();
  }, []);

  const createProposal = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      console.log("xxx", formData);
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const proposer = await signer.getAddress();

      const contract = new ethers.Contract(
        daoInfo.daoContract,
        GovernorABI,
        signer
      );

      const iface = new ethers.utils.Interface(formData.contractAbi);
      console.log({
        iface,
        ff: formData.functionName,
        pp: formData.inputParams,
      });

      const calldata = iface.encodeFunctionData(
        formData.functionName.trim(),
        formData.inputParams
      );

      // const address = await contract.proposalThreshold();

      // console.log({
      //   address,
      //   data: ethers.utils.toUtf8Bytes(calldata),
      //   tp: typeof ethers.utils.toUtf8Bytes(calldata),
      // });
      // console.log("[[[", process.env.NEXT_PUBLIC_PRIVATE_KEY);

      const tx = await contract.propose(
        [formData.targetAddress],
        [0],
        [calldata],
        formData.description,
        { gasLimit: 23000999 }
      );

      const res = await tx.wait();

      const provider2 = new ethers.providers.JsonRpcProvider(
        "https://polygonzkevm-testnet.g.alchemy.com/v2/HdlDu7E4M24le4vwHbSnb998HL6kFPEp"
      );

      const wallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider2
      );

      const contract2 = new ethers.Contract(
        voteOnZkEvmAddress,
        VoteOnZkEvmABI,
        wallet
      );

      console.log({ res, tx });

      const receipt = await provider.getTransactionReceipt(res.transactionHash);

      console.log({ receipt });

      const decodedData = ethers.utils.defaultAbiCoder.decode(
        [
          "uint",
          "address",
          "address[]",
          "uint[]",
          "string[]",
          "bytes[]",
          "uint",
          "uint",
          "string",
        ],
        receipt.logs[0].data
      );

      console.log("proposalId", decodedData[0].toString());

      await contract2.registerProposal(
        daoInfo.tokenAddresses[1].address,
        decodedData[0].toString(),
        "0x9A5d0A5aD88C00308C53aA0b692Af33edAe7d895"
      );

      const data = await fetch(`${SERVER_URL}/proposal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          proposedBy: proposer,
          proposalId: decodedData[0].toString(),
          daoId: dao,
          status: "Active",
        }),
      });

      const response = await data.json();

      console.log({ response });
      setLoading(false);
      toast.success("Proposal created successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Some error occurred!");
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
          onSubmit={createProposal}
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
                    {loading ? <Loader inComp={true} /> : "Submit"}
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
      <ToastContainer theme="dark" />
    </div>
  );
};

export default CreateProposal;
