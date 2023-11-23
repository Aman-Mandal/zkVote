// *** YOU ARE LIMITED TO THE FOLLOWING IMPORTS TO BUILD YOUR PHAT CONTRACT     ***
// *** ADDING ANY IMPORTS WILL RESULT IN ERRORS & UPLOADING YOUR CODE TO PHALA  ***
// *** NETWORK WILL FAIL. IF YOU WANT TO KNOW MORE, JOIN OUR DISCORD TO SPEAK   ***
// *** WITH THE PHALA TEAM AT https://discord.gg/5HfmWQNX THANK YOU             ***
// *** FOR DOCS ON HOW TO CUSTOMIZE YOUR PC 2.0 https://bit.ly/customize-pc-2-0 ***
import "@phala/pink-env";
import { Coders, AbiCoder } from "@phala/ethers";

type HexString = `0x${string}`;

const uintCoder = new Coders.NumberCoder(32, false, "uint256");
const bytesCoder = new Coders.BytesCoder("bytes32[32]");
const types = [
  "uint256",
  "uint256",
  "bytes32[32]",
  "uint32",
  "bytes32",
  "bytes32",
  "uint32",
  "address",
  "uint32",
  "address",
  "uint256",
  "bytes",
];
function encodeReply(data: any): HexString {
  // return Coders.encode([uintCoder, uintCoder], reply) as HexString;
  const coder = AbiCoder.defaultAbiCoder();
  return coder.encode(types, data) as HexString;
}

// Defined in OracleConsumerContract.sol
const TYPE_READY = 0;
const TYPE_NOTREADY = 2;

enum Error {
  BadRequestString = "BadRequestString",
  FailedToFetchData = "FailedToFetchData",
  FailedToDecode = "FailedToDecode",
  MalformedRequest = "MalformedRequest",
  NotReady = "NotReady",
  AlreadyClaimed = "AlreadyClaimed",
}

function errorToCode(error: Error): number {
  switch (error) {
    case Error.BadRequestString:
      return 1;
    case Error.FailedToFetchData:
      return 2;
    case Error.FailedToDecode:
      return 3;
    case Error.MalformedRequest:
      return 4;
    default:
      return 0;
  }
}

function isHexString(str: string): boolean {
  const regex = /^0x[0-9a-f]+$/;
  return regex.test(str.toLowerCase());
}

function stringToHex(str: string): string {
  var hex = "";
  for (var i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
  }
  return "0x" + hex;
}

function fetchApiStats(): any {
  const url =
    "https://bridge-api.public.zkevm-test.net/bridges/0x9A5d0A5aD88C00308C53aA0b692Af33edAe7d895";
  const merkleProofUrl =
    "https://bridge-api.public.zkevm-test.net/merkle-proof";

  let response = pink.httpRequest({
    url,
    method: "GET",
    returnTextBody: true,
  });
  console.log(response);
  if (response.statusCode !== 200) {
    throw Error.FailedToFetchData;
  }
  let respBody = response.body;
  if (typeof respBody !== "string") {
    throw Error.FailedToDecode;
  }
  respBody = JSON.parse(respBody);

  let currentDeposit = (respBody as any).deposits[0];

  if (!currentDeposit.ready_for_claim) {
    throw Error.NotReady;
  }
  if (currentDeposit.claim_tx_hash != "") {
    throw Error.AlreadyClaimed;
  }

  response = pink.httpRequest({
    url: `https://bridge-api.public.zkevm-test.net/merkle-proof?deposit_cnt=${currentDeposit.deposit_cnt}&net_id=${currentDeposit.orig_net}`,
    method: "GET",
    returnTextBody: true,
  });
  console.log(response);

  respBody = response.body;
  if (typeof respBody !== "string") {
    throw Error.FailedToDecode;
  }
  respBody = JSON.parse(respBody);
  let proof = (respBody as any).proof;
  console.log(proof);

  return [
    TYPE_READY,
    1,
    proof.merkle_proof,
    currentDeposit.deposit_cnt,
    proof.main_exit_root,
    proof.rollup_exit_root,
    currentDeposit.orig_net,
    currentDeposit.orig_addr,
    currentDeposit.dest_net,
    currentDeposit.dest_addr,
    currentDeposit.amount,
    currentDeposit.metadata,
  ];
}

function parseReqStr(hexStr: string): string {
  var hex = hexStr.toString();
  if (!isHexString(hex)) {
    throw Error.BadRequestString;
  }
  hex = hex.slice(2);
  var str = "";
  for (var i = 0; i < hex.length; i += 2) {
    const ch = String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
    str += ch;
  }
  return str;
}

//
// Here is what you need to implemented for Phat Contract, you can customize your logic with
// JavaScript here.
//
// The Phat Contract will be called with two parameters:
//
// - request: The raw payload from the contract call `request` (check the `request` function in TestLensApiConsumerConract.sol).
//            In this example, it's a tuple of two elements: [requestId, profileId]
// - secrets: The custom secrets you set with the `config_core` function of the Action Offchain Rollup Phat Contract. In
//            this example, it just a simple text of the lens api url prefix. For more information on secrets, checkout the SECRETS.md file.
//
// Your returns value MUST be a hex string, and it will send to your contract directly. Check the `_onMessageReceived` function in
// OracleConsumerContract.sol for more details. We suggest a tuple of three elements: [successOrNotFlag, requestId, data] as
// the return value.
//
export default function main(): HexString {
  try {
    const respData = fetchApiStats();
    console.log("response:", respData);

    return encodeReply(respData);
  } catch (error) {
    throw error;
  }
}
