import Image from "next/image";
import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";

const CreateStep2 = ({ formData, setFormData }) => {
  return (
    <div className="min-h-[70vh]">
      <div className="flex flex-col mt-2 gap-4">
        <div>
          <label className="text-sm text-gray-400">Governance Tokens *</label>
          <p className="text-xs  text-gray-600 ">
            Enter governor token addresses across all the chains.
          </p>
        </div>

        <div className="flex items-center bg-[#181818] py-1 rounded-md px-3">
          <div className="flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700">
            <FaEthereum />
            <p>Ethereum</p>
          </div>
          <input
            placeholder="0x00..."
            className="bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none "
            onChange={(e) => {
              setFormData({
                ...formData,
                ethereumAddress: e.target.value,
              });
            }}
            value={formData?.ethereumAddress}
            type="text"
            required
          />
        </div>

        {/* <div className='flex items-center bg-[#181818] py-1 rounded-md px-3'>
          <div className='flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700'>
            <Image
              src={'/assets/polygon.svg'}
              height={15}
              width={15}
              alt='pol'
            />
            <p>Polygon</p>
          </div>
          <input
            placeholder='0x00...'
            className='bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
            onChange={(e) => {
              setFormData({
                ...formData,
                polygonAddress: e.target.value,
              });
            }}
            value={formData?.polygonAddress}
            type='text'
            required
          />
        </div> */}
        <div className="flex items-center bg-[#181818] py-1 rounded-md px-3">
          <div className="flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700">
            <Image
              src={"/assets/polygon.svg"}
              height={15}
              width={15}
              alt="pol"
            />
            <p>ZkEVM</p>
          </div>
          <input
            placeholder="0x00..."
            className="bg-[#181818] py-1 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none "
            onChange={(e) => {
              setFormData({
                ...formData,
                zkEVMAddress: e.target.value,
              });
            }}
            value={formData?.zkEVMAddress}
            type="text"
            required
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm  mb-1 text-gray-400">Token Name *</label>
          <input
            placeholder="AAVE"
            className="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2"
            onChange={(e) => {
              setFormData({
                ...formData,
                tokenName: e.target.value,
              });
            }}
            value={formData?.tokenName}
            type="text"
            required
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <label className="text-sm  mb-1 text-gray-400">
          Governor Address (optional)
        </label>
        <input
          className="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2"
          onChange={(e) => {
            setFormData({
              ...formData,
              daoAddress: e.target.value,
            });
          }}
          value={formData?.daoAddress}
          type="text"
          required
        />
        <p className="text-xs  text-gray-600 ">
          Enter governor (DAO) address of zkEVM chain if you have an existing
          DAO.
        </p>
      </div>

      <div className="flex flex-col mt-6">
        <label className="text-sm  mb-1 text-gray-400">Threshold *</label>
        <input
          placeholder="20"
          className="bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2"
          onChange={(e) => {
            setFormData({
              ...formData,
              threshold: e.target.value,
            });
          }}
          value={formData?.threshold}
          type="number"
          required
        />
        <p className="text-xs  text-gray-600 ">
          Enter minimum percentage of votes (Yes/No) needed .
        </p>
      </div>
    </div>
  );
};

export default CreateStep2;
