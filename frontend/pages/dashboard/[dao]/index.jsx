import DAOInfo from "@/components/DAOPage/DAOInfo";
import ProposalCard from "@/components/DAOPage/ProposalCard";
import PageTitle from "@/components/PageTitle/PageTitle";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SERVER_URL } from "@/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DAO = () => {
  const proposals = [
    {
      id: "1",
      title: "Activate Stargate proposals",
      description:
        "Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum         Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum",
      status: "active",
      address: "0xD9A5A56eE4eCAD795B274015e3c90884402b2138",
    },
    {
      id: "2",
      title: "Activate Stargate proposals",
      description:
        "Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum         Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum",
      status: "active",
      address: "0xD9A5A56eE4eCAD795B274015e3c90884402b2138",
    },
    {
      id: "3",
      title: "Activate Stargate proposals",
      description:
        "Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum         Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum",
      status: "active",
      address: "0xD9A5A56eE4eCAD795B274015e3c90884402b2138",
    },
    {
      id: "4",
      title: "Activate Stargate proposals",
      description:
        "Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum         Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum",
      status: "active",
      address: "0xD9A5A56eE4eCAD795B274015e3c90884402b2138",
    },
    {
      id: "5",
      title: "Activate Stargate proposals",
      description:
        "Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum         Aave DAO is a community-driven governance model that enables token holders to propose and vote on changes to the Aave protocol on Ethereum",
      status: "active",
      address: "0xD9A5A56eE4eCAD795B274015e3c90884402b2138",
    },
  ];
  const router = useRouter();
  const [daoInfo, setDaoInfo] = useState(null);

  const { dao } = router.query;

  const getDaoInfo = async () => {
    const response = await fetch(`${SERVER_URL}/proposals/${dao}`);

    const data = await response.json();

    setDaoInfo(data.info);
    console.log("data issss s", data.info);
  };

  useEffect(() => {
    if (dao) {
      getDaoInfo();
    }
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen font-Avenir text-white p-10 pt-20 shadow-md shadow-[#3a3a3a]">
      {daoInfo && (
        <DAOInfo
          key={daoInfo._id}
          name={daoInfo.name}
          description={daoInfo.description}
          socials={daoInfo.socials}
        />
      )}

      <div className="mt-10">
        <div className="sticky top-[60px] bg-[#111111] py-10">
          <PageTitle
            title={"Proposals"}
            subtext="Catch up with all the active/executed proposal of the DAO from here!"
          />

          <div className="flex justify-between items-center ">
            <SearchBar />
            <button
              onClick={() => {
                router.push(`/dashboard/${dao}/create/proposal`);
              }}
              className="bg-[#f2f2f2] py-3 px-6 text-black font-semibold rounded-md hover:bg-white"
            >
              Create Proposal
            </button>
          </div>
        </div>

        <div className="overflow-y-scroll mt-10 flex flex-col gap-5">
          {daoInfo?.proposals.length > 0 &&
            daoInfo.proposals.map((proposal) => (
              <ProposalCard
                id={proposal._id}
                address={proposal.proposalId}
                description={proposal.description}
                status={proposal.status}
                title={proposal.title}
                key={proposal._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DAO;
