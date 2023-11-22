import React, { useEffect, useState } from "react";
import ParameterInput from "./ParameterInput";

const CreateStep2 = ({ formData, setFormData }) => {
  const [mutableFuncs, setMutableFuncs] = useState([]);
  const [selectedFun, setSelectedFun] = useState(null);

  useEffect(() => {
    if (formData.contractAbi.length) {
      const parsedData = JSON.parse(formData.contractAbi);
      const funcs = parsedData.filter((fun) => {
        return (
          fun.stateMutability !== "view" &&
          fun.stateMutability !== "pure" &&
          fun.type === "function"
        );
      });

      setMutableFuncs(funcs);
    }
  }, [formData.contractAbi]);

  const handleSelectChange = (event) => {
    setFormData((prevVal) => {
      return {
        ...prevVal,
        functionName: event.target.value,
      };
    });

    const selectedFunction = mutableFuncs.filter(
      (fun) => fun.name === event.target.value
    );

    setSelectedFun(...selectedFunction);
  };

  return (
    <div className="min-h-[70vh]">
      <div className="flex flex-col mt-3 mb-5">
        <label className="text-sm  mb-1 text-gray-400">Contract ABI *</label>
        <textarea
          rows={6}
          className="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2"
          onChange={(e) => {
            setFormData({
              ...formData,
              contractAbi: e.target.value,
            });
          }}
          value={formData?.contractAbi}
          type="text"
        />
      </div>

      <div className="flex flex-col mt-8 ">
        <label className="text-sm  mb-1 text-gray-400">Target Address *</label>
        <input
          placeholder="0x0000000000000000000000000000000000"
          className="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-[#2e2e2e] text-gray-300  outline-none mb-2 "
          onChange={(e) => {
            setFormData({
              ...formData,
              targetAddress: e.target.value,
            });
          }}
          value={formData?.targetAddress}
          type="text"
        />
      </div>

      <div className="flex flex-col mt-3 mb-5">
        <label className="text-sm  mb-1 text-gray-400">Select Function *</label>
        <select
          onChange={handleSelectChange}
          class="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md  text-[#444444]  outline-none mb-2"
        >
          <option selected>Select function here</option>
          {mutableFuncs.map((fun, index) => (
            <option key={index} value={fun.name}>
              {fun.name}
            </option>
          ))}
        </select>

        {selectedFun?.inputs.length ? (
          <>
            <label className="text-sm text-gray-400 mb-1 mt-3">
              Input Parameters
            </label>

            {selectedFun.inputs?.map((input, index) => (
              <div className="flex mb-3 items-center">
                <ParameterInput
                  setFormData={setFormData}
                  formData={formData}
                  input={input}
                  index={index}
                />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CreateStep2;
