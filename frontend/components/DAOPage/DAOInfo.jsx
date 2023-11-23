const chains = ["Ethereum", "Polygon ZkEVM"];
import Image from "next/image";
import {
  BiLogoDiscordAlt,
  BiLogoTelegram,
  BiLogoTwitter,
} from "react-icons/bi";

const DAOInfo = ({ name, description, socials }) => {
  return (
    <>
      <div className="bg-[#181818] p-8 rounded-t-xl flex">
        <div className="flex-[0.75] ">
          <div className="flex items-center gap-4">
            <Image
              src={"/assets/pic.svg"}
              alt="project-logo"
              height={50}
              width={50}
              className="rounded-full"
            />
            <p className="font-semibold text-2xl text-[#f2f2f2]">{name}</p>
          </div>

          <p className="text-[#828282] mt-4">{description}</p>
        </div>
        <div className="flex-[0.25] flex flex-col justify-between">
          {/* <button className="bg-[#f2f2f2] py-3 px-6  text-black font-semibold w-[200px] rounded-md hover:bg-white">
            Join DAO
          </button> */}

          <div className="flex gap-4 mt-4 text-2xl text-[#828282]">
            <BiLogoTwitter className="cursor-pointer hover:text-white" />
            <BiLogoDiscordAlt className="cursor-pointer hover:text-white" />
            <BiLogoTelegram className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
      <div className="w-full flex p-3 rounded-b-xl bg-[#232323] gap-4">
        {chains.map((chain) => (
          <div className="bg-[#3a3a3a] text-[#8b8b8b] cursor-pointer py-1 px-4 rounded-full hover:bg-[#454545]">
            <p>{chain}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DAOInfo;
