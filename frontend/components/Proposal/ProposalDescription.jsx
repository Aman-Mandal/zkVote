import React, { useState } from "react";

const ProposalDescription = ({ description }) => {
  const [showDescription, setShowDescription] = useState(true);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex-[0.7] bg-[#181818]  rounded-md overflow-hidden">
      <div className="flex  bg-[#232323]">
        <p
          onClick={() => {
            setShowCode(false);
            setShowDescription(true);
          }}
          className={`${
            showDescription ? "bg-[#323232]" : "bg-inherit text-gray-400"
          } py-4 px-8 hover:bg-[#272727] cursor-pointer`}
        >
          Description
        </p>
        <p
          onClick={() => {
            setShowCode(true);
            setShowDescription(false);
          }}
          className={`${
            showCode ? "bg-[#323232]" : "bg-inherit text-gray-400"
          } py-4 px-8 hover:bg-[#272727] cursor-pointer`}
        >
          Executable Code
        </p>
      </div>

      {showDescription && (
        <div className="px-5 py-4 text-[#848484] text-justify">
          {description}
        </div>
      )}

      {showCode && (
        <div className="px-6 pb-10">
          <div className="border-[0.5px] border-[#333333]  rounded-md mt-6">
            <div className="flex flex-col gap-3 py-3 px-4">
              <div className="w-full">
                <p className="text-gray-400">Calldata:</p>
                <p className="text-[#454545] break-words">
                  0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dabad81af85554e9ae636395611c58f7ec1aaec5000000000000000000000000000000000000000000000000000000000000000f
                </p>
              </div>
              <div>
                <p className="text-gray-400">Target:</p>
                <p className="text-[#454545] break-words">0x930....0304903</p>
              </div>
              <div>
                <p className="text-gray-400">Value:</p>
                <p className="text-[#454545] break-words">0</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalDescription;
