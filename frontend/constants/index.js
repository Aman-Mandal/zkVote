export const SERVER_URL = "https://governance-crosschain.onrender.com";
// export const SERVER_URL = "http://localhost:8000";

export const TimelockContract = "0xD2b6091F1e9Ad39e233d23728BCfe97AF658C787";

export const ERC20Contract = "0xCCae34d65308BD96c33d02906C5Db0e95d32620F"; //goerli

export const ERC20ZkEvm = "0x0DC86309F59920028c8b16a71492c5216319FaB5"; //zkevm

export const ZKEvmBridge = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7"; //same on goerli and zkevm

export const GovXWrapper = "0x9A5d0A5aD88C00308C53aA0b692Af33edAe7d895";

export const voteOnZkEvmAddress = "0x611bb13B02D8FD1E94762b976cAC1fb01Ae39111";

export const DAO_STEPS = [
  {
    label: "Add basic details ",
  },
  {
    label: "Enter governor token addresses",
  },
  {
    label: "Fill social details",
  },
];

export const PROPOSAL_STEPS = [
  {
    label: "Add basic details ",
  },
  {
    label: "Select executable values",
  },
  {
    label: "Enter Voting Options",
  },
  {
    label: "Preview",
  },
];

export const GovernorABI = [
  {
    inputs: [],
    name: "__acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "castVote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20VotesComp",
        name: "_token",
        type: "address",
      },
      {
        internalType: "contract ICompoundTimelock",
        name: "_timelock",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_votingPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onMessageReceived",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ProposalQueued",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
    ],
    name: "queue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "relay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voteOnZkEvmAddress",
        type: "address",
      },
    ],
    name: "setVoteOnZkEvmAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldTimelock",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTimelock",
        type: "address",
      },
    ],
    name: "TimelockChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICompoundTimelock",
        name: "newTimelock",
        type: "address",
      },
    ],
    name: "updateTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "VoteCastWithParams",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allProposals",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "_deadline",
            type: "uint64",
          },
        ],
        internalType: "struct Timers.BlockNumber",
        name: "voteStart",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "_deadline",
            type: "uint64",
          },
        ],
        internalType: "struct Timers.BlockNumber",
        name: "voteEnd",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BALLOT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "COUNTING_MODE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "EXTENDED_BALLOT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getActions",
    outputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "getReceipt",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "hasVoted",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "support",
            type: "uint8",
          },
          {
            internalType: "uint96",
            name: "votes",
            type: "uint96",
          },
        ],
        internalType: "struct IGovernorCompatibilityBravo.Receipt",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "getVotesOnProposal",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "voter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
        ],
        internalType: "struct MyGovernor.Votes[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "getVotesWithParams",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
    ],
    name: "hashProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasVoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkID",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "polygonZkEVMBridge",
    outputs: [
      {
        internalType: "contract IPolygonZkEVMBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalEta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstainVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalSnapshot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "quorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "quorumVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "showAllProposals",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "_deadline",
                type: "uint64",
              },
            ],
            internalType: "struct Timers.BlockNumber",
            name: "voteStart",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "_deadline",
                type: "uint64",
              },
            ],
            internalType: "struct Timers.BlockNumber",
            name: "voteEnd",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canceled",
            type: "bool",
          },
        ],
        internalType: "struct Governor.ProposalCore[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum IGovernor.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20VotesComp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteOnZkEvmAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VotingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const VoteOnZkEvmABI = [
  {
    inputs: [
      {
        internalType: "contract IPolygonZkEVMBridge",
        name: "_polygonZkEVMBridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "polygonZkEVMBridge",
    outputs: [
      {
        internalType: "contract IPolygonZkEVMBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposalForID",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timepoint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposalAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_proposalAddress",
        type: "address",
      },
    ],
    name: "registerProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "support",
        type: "uint8",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const GovernorBytecode =
  "0x6101c060405273f6beeebb578e214ca9e23b0e9683454ff88ed2a7610160523480156200002b57600080fd5b5060405162005cea38038062005cea8339810160408190526200004e91620002bd565b81836040518060400160405280600a81526020016926bca3b7bb32b93737b960b11b8152508062000084620001ce60201b60201c565b815160209283012081519183019190912060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801819052818301969096526060810194909452608080850193909352308483018190528151808603909301835260c094850190915281519190950120905291909152610120526001620001218282620003aa565b50506001600160a01b0316610140526200013b81620001e9565b50620001473362000252565b806101a08181525050610160516001600160a01b031663bab161bf6040518163ffffffff1660e01b81526004016020604051808303816000875af115801562000194573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ba919062000476565b63ffffffff166101805250620004a5915050565b6040805180820190915260018152603160f81b602082015290565b600654604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381168114620002ba57600080fd5b50565b600080600060608486031215620002d357600080fd5b8351620002e081620002a4565b6020850151909350620002f381620002a4565b80925050604084015190509250925092565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200033057607f821691505b6020821081036200035157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003a557600081815260208120601f850160051c81016020861015620003805750805b601f850160051c820191505b81811015620003a1578281556001016200038c565b5050505b505050565b81516001600160401b03811115620003c657620003c662000305565b620003de81620003d784546200031b565b8462000357565b602080601f831160018114620004165760008415620003fd5750858301515b600019600386901b1c1916600185901b178555620003a1565b600085815260208120601f198616915b82811015620004475788860151825594840194600190910190840162000426565b5085821015620004665787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200048957600080fd5b815163ffffffff811681146200049e57600080fd5b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516157bf6200052b600039600081816104340152818161062c0152613a0f0152600061092401526000818161075e01526113ba015260008181610d0a015261300201526000505060005050600050506000505060005050600050506157bf6000f3fe6080604052600436106103385760003560e01c80639a802a6d116101b0578063cab40f40116100ec578063e23a9a5211610095578063f2fde38b1161006f578063f2fde38b14610cb7578063f8ce560a14610cd7578063fc0c546a14610cf8578063fe0d94c114610d2c57600080fd5b8063e23a9a5214610b71578063eb9019d414610c52578063f23a6e6114610c7257600080fd5b8063dd4e2ba5116100c6578063dd4e2ba514610ad7578063ddf0b00914610b1d578063deaaa7cc14610b3d57600080fd5b8063cab40f4014610a5f578063d33219b414610a8c578063da95691a14610ab757600080fd5b8063bab161bf11610159578063c28bc2fa11610133578063c28bc2fa146109c0578063c59057e4146109d3578063c6e36a32146109f3578063ca8d774b14610a3f57600080fd5b8063bab161bf14610912578063bc197c811461095b578063c01f9e37146109a057600080fd5b8063ab58fb8e1161018a578063ab58fb8e146108c9578063b58131b0146108e9578063b9a61961146108fd57600080fd5b80639a802a6d1461085c578063a59df97e1461087c578063a890c910146108a957600080fd5b80632fe3e2611161027f5780634385963211610228578063715018a611610202578063715018a6146107a55780637d5e81e2146107ba5780638da5cb5b146107da578063938351b81461080557600080fd5b806343859632146106af57806354fd4d50146107065780635d43792c1461074c57600080fd5b80633932abb1116102595780633932abb11461064e5780633e4f49e61461066257806340e58ee51461068f57600080fd5b80632fe3e261146105b6578063328dd982146105ea57806337647da81461061a57600080fd5b8063160cbed7116102e157806325389709116102bb57806325389709146105615780632656227d146105835780632d63f6931461059657600080fd5b8063160cbed7146105195780631806b5f21461053957806324bc1a641461054c57600080fd5b80630385056711610312578063038505671461046257806306fdde0314610482578063150b7a02146104a457600080fd5b8063013cf08b1461036d57806301ffc9a7146103f557806302a251a31461042557600080fd5b366103685730610346610d3f565b73ffffffffffffffffffffffffffffffffffffffff161461036657600080fd5b005b600080fd5b34801561037957600080fd5b5061038d610388366004614637565b610d65565b604080519a8b5273ffffffffffffffffffffffffffffffffffffffff90991660208b0152978901969096526060880194909452608087019290925260a086015260c085015260e084015215156101008301521515610120820152610140015b60405180910390f35b34801561040157600080fd5b50610415610410366004614650565b610e1b565b60405190151581526020016103ec565b34801561043157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040519081526020016103ec565b34801561046e57600080fd5b5061036661047d3660046146b4565b610e2c565b34801561048e57600080fd5b50610497610e7b565b6040516103ec919061473f565b3480156104b057600080fd5b506104e86104bf36600461486c565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016103ec565b34801561052557600080fd5b50610454610534366004614a46565b610f0d565b610366610547366004614ad6565b6113a2565b34801561055857600080fd5b50610454611564565b34801561056d57600080fd5b50610576611574565b6040516103ec9190614b41565b610454610591366004614a46565b611622565b3480156105a257600080fd5b506104546105b1366004614637565b6117a2565b3480156105c257600080fd5b506104547fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b3480156105f657600080fd5b5061060a610605366004614637565b6117db565b6040516103ec9493929190614c81565b34801561062657600080fd5b506104547f000000000000000000000000000000000000000000000000000000000000000081565b34801561065a57600080fd5b506001610454565b34801561066e57600080fd5b5061068261067d366004614637565b611a79565b6040516103ec9190614d08565b34801561069b57600080fd5b506103666106aa366004614637565b611a84565b3480156106bb57600080fd5b506104156106ca366004614d49565b600082815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845260080190915290205460ff1692915050565b34801561071257600080fd5b5060408051808201909152600181527f31000000000000000000000000000000000000000000000000000000000000006020820152610497565b34801561075857600080fd5b506107807f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016103ec565b3480156107b157600080fd5b50610366611dfa565b3480156107c657600080fd5b506104546107d5366004614d79565b611e0e565b3480156107e657600080fd5b5060085473ffffffffffffffffffffffffffffffffffffffff16610780565b34801561081157600080fd5b50610825610820366004614637565b611e25565b60408051945167ffffffffffffffff90811686529351909316602085015290151591830191909152151560608201526080016103ec565b34801561086857600080fd5b50610454610877366004614e1a565b611e89565b34801561088857600080fd5b506009546107809073ffffffffffffffffffffffffffffffffffffffff1681565b3480156108b557600080fd5b506103666108c43660046146b4565b611ea0565b3480156108d557600080fd5b506104546108e4366004614637565b611f9b565b3480156108f557600080fd5b506002610454565b34801561090957600080fd5b50610366611fc8565b34801561091e57600080fd5b506109467f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016103ec565b34801561096757600080fd5b506104e8610976366004614e5d565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156109ac57600080fd5b506104546109bb366004614637565b61204c565b6103666109ce366004614f0b565b61207c565b3480156109df57600080fd5b506104546109ee366004614a46565b612209565b3480156109ff57600080fd5b50610a13610a0e366004614f94565b612261565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152016103ec565b348015610a4b57600080fd5b50610454610a5a366004614fc5565b6122b4565b348015610a6b57600080fd5b50610a7f610a7a366004614637565b6122d2565b6040516103ec919061500f565b348015610a9857600080fd5b5060065473ffffffffffffffffffffffffffffffffffffffff16610780565b348015610ac357600080fd5b50610454610ad2366004615067565b612367565b348015610ae357600080fd5b5060408051808201909152601a81527f737570706f72743d627261766f2671756f72756d3d627261766f0000000000006020820152610497565b348015610b2957600080fd5b50610366610b38366004614637565b612396565b348015610b4957600080fd5b506104547f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b348015610b7d57600080fd5b50610c1d610b8c366004614d49565b604080516060810182526000808252602082018190529181019190915250600091825260056020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845260089092018152918190208151606081018352905460ff8082161515835261010082041693820193909352620100009092046bffffffffffffffffffffffff169082015290565b6040805182511515815260208084015160ff1690820152918101516bffffffffffffffffffffffff16908201526060016103ec565b348015610c5e57600080fd5b50610454610c6d366004615109565b612611565b348015610c7e57600080fd5b506104e8610c8d366004615135565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b348015610cc357600080fd5b50610366610cd23660046146b4565b612632565b348015610ce357600080fd5b50610454610cf2366004614637565b50600290565b348015610d0457600080fd5b506107807f000000000000000000000000000000000000000000000000000000000000000081565b610366610d3a366004614637565b6126e6565b6000610d6060065473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b8060008080808080808080610d798a611f9b565b9750610d848b6117a2565b9650610d8f8b61204c565b60008c815260056020819052604082208054918101546006820154600783015473ffffffffffffffffffffffffffffffffffffffff9094169e50949a5098509296509450610ddc8d611a79565b90506002816007811115610df257610df2614cd9565b1493506007816007811115610e0957610e09614cd9565b14925050509193959799509193959799565b6000610e2682612961565b92915050565b610e346129b5565b600980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b606060018054610e8a9061519e565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb69061519e565b8015610f035780601f10610ed857610100808354040283529160200191610f03565b820191906000526020600020905b815481529060010190602001808311610ee657829003601f168201915b5050505050905090565b600080610f1c86868686612209565b90506004610f2982611a79565b6007811115610f3a57610f3a614cd9565b14610fcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c206e6f742073756363657373667560448201527f6c0000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600654604080517f6a42b8f8000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691636a42b8f89160048083019260209291908290030181865afa15801561103c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106091906151f1565b61106a9042615239565b90506110bd61107882612a36565b60008481526007602052604090209081547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff91909116179055565b60005b875181101561135d57600654885173ffffffffffffffffffffffffffffffffffffffff9091169063f2b06537908a90849081106110ff576110ff61524c565b60200260200101518984815181106111195761111961524c565b60200260200101518985815181106111335761113361524c565b60200260200101518660405160200161114f949392919061527b565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161118391815260200190565b602060405180830381865afa1580156111a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c491906152cf565b15611277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f476f7665726e6f7254696d656c6f636b436f6d706f756e643a206964656e746960448201527f63616c2070726f706f73616c20616374696f6e20616c7265616479207175657560648201527f6564000000000000000000000000000000000000000000000000000000000000608482015260a401610fc3565b600654885173ffffffffffffffffffffffffffffffffffffffff90911690633a66f901908a90849081106112ad576112ad61524c565b60200260200101518984815181106112c7576112c761524c565b60200260200101518985815181106112e1576112e161524c565b6020026020010151866040518563ffffffff1660e01b8152600401611309949392919061527b565b6020604051808303816000875af1158015611328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134c91906151f1565b50611356816152f1565b90506110c0565b5060408051838152602081018390527f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda289291015b60405180910390a15095945050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611467576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f50696e6752656365697665723a3a6f6e4d65737361676552656365697665643a60448201527f204e6f7420506f6c79676f6e5a6b45564d4272696467650000000000000000006064820152608401610fc3565b60095473ffffffffffffffffffffffffffffffffffffffff848116911614611511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f50696e6752656365697665723a3a6f6e4d65737361676552656365697665643a60448201527f204e6f7420566f74654f6e5a6b45766d000000000000000000000000000000006064820152608401610fc3565b6000806000808480602001905181019061152b9190615329565b9350935093509350600061154282610c6d856117a2565b905061155983866115538488615239565b85612ad4565b505050505050505050565b6000610d60610cf260014361536a565b60606000805480602002602001604051908101604052809291908181526020016000905b828210156116195760008481526020908190206040805160a08101825260038602909201805467ffffffffffffffff9081166080850190815284528251808601845260018084015490921681528486015260029091015460ff8082161515938501939093526101009004909116151560608301529083529092019101611598565b50505050905090565b60008061163186868686612209565b9050600061163e82611a79565b9050600481600781111561165457611654614cd9565b14806116715750600581600781111561166f5761166f614cd9565b145b6116fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c206e6f742073756363657373667560448201527f6c000000000000000000000000000000000000000000000000000000000000006064820152608401610fc3565b6000828152600260208190526040918290200180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f906117699084815260200190565b60405180910390a161177e8288888888612b6b565b61178b8288888888612c34565b6117988288888888612c41565b5095945050505050565b600081815260026020908152604080832081519283019091525467ffffffffffffffff16908190525b67ffffffffffffffff1692915050565b6060806060806000600560008781526020019081526020016000209050806001018160020182600301836004018380548060200260200160405190810160405280929190818152602001828054801561186a57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161183f575b50505050509350828054806020026020016040519081016040528092919081815260200182805480156118bc57602002820191906000526020600020905b8154815260200190600101908083116118a8575b5050505050925081805480602002602001604051908101604052809291908181526020016000905b828210156119905783829060005260206000200180546119039061519e565b80601f016020809104026020016040519081016040528092919081815260200182805461192f9061519e565b801561197c5780601f106119515761010080835404028352916020019161197c565b820191906000526020600020905b81548152906001019060200180831161195f57829003601f168201915b5050505050815260200190600101906118e4565b50505050915080805480602002602001604051908101604052809291908181526020016000905b82821015611a635783829060005260206000200180546119d69061519e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a029061519e565b8015611a4f5780601f10611a2457610100808354040283529160200191611a4f565b820191906000526020600020905b815481529060010190602001808311611a3257829003601f168201915b5050505050815260200190600101906119b7565b5050505090509450945094509450509193509193565b6000610e2682612c94565b6000818152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611af3575060028154611af19073ffffffffffffffffffffffffffffffffffffffff16610c6d60014361536a565b105b611b7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f476f7665726e6f72427261766f3a2070726f706f7365722061626f766520746860448201527f726573686f6c64000000000000000000000000000000000000000000000000006064820152608401610fc3565b611df581600101805480602002602001604051908101604052809291908181526020018280548015611be757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611bbc575b505050505082600201805480602002602001604051908101604052809291908181526020018280548015611c3a57602002820191906000526020600020905b815481526020019060010190808311611c26575b5050505050611deb84600301805480602002602001604051908101604052809291908181526020016000905b82821015611d12578382906000526020600020018054611c859061519e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cb19061519e565b8015611cfe5780601f10611cd357610100808354040283529160200191611cfe565b820191906000526020600020905b815481529060010190602001808311611ce157829003601f168201915b505050505081526020019060010190611c66565b50505060048701805460408051602080840282018101909252828152935060009084015b82821015611de2578382906000526020600020018054611d559061519e565b80601f0160208091040260200160405190810160405280929190818152602001828054611d819061519e565b8015611dce5780601f10611da357610100808354040283529160200191611dce565b820191906000526020600020905b815481529060010190602001808311611db157829003601f168201915b505050505081526020019060010190611d36565b50505050612d92565b8460090154612ec5565b505050565b611e026129b5565b611e0c6000612ed3565b565b6000611e1c85858585612f4a565b95945050505050565b60008181548110611e3557600080fd5b60009182526020918290206040805180850182526003909302909101805467ffffffffffffffff90811684528251948501909252600181015490911683526002015490925060ff8082169161010090041684565b6000611e96848484612fb3565b90505b9392505050565b611ea8610d3f565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611f3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f476f7665726e6f723a206f6e6c79476f7665726e616e636500000000000000006044820152606401610fc3565b30611f45610d3f565b73ffffffffffffffffffffffffffffffffffffffff1614611f8f5760008036604051611f7292919061537d565b604051809103902090505b80611f886003613085565b03611f7d57505b611f9881613142565b50565b600081815260076020908152604080832081519283019091525467ffffffffffffffff16908190526117cb565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e18b6816040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561203257600080fd5b505af1158015612046573d6000803e3d6000fd5b50505050565b600081815260026020908152604080832081519283019091526001015467ffffffffffffffff16908190526117cb565b612084610d3f565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612118576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f476f7665726e6f723a206f6e6c79476f7665726e616e636500000000000000006044820152606401610fc3565b30612121610d3f565b73ffffffffffffffffffffffffffffffffffffffff161461216b576000803660405161214e92919061537d565b604051809103902090505b806121646003613085565b0361215957505b6000808573ffffffffffffffffffffffffffffffffffffffff1685858560405161219692919061537d565b60006040518083038185875af1925050503d80600081146121d3576040519150601f19603f3d011682016040523d82523d6000602084013e6121d8565b606091505b50915091506122008282604051806060016040528060288152602001615762602891396131dd565b50505050505050565b600084848484604051602001612222949392919061538d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012095945050505050565b600a602052816000526040600020818154811061227d57600080fd5b60009182526020909120600290910201805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169250905082565b6000611e1c85838686604051806020016040528060008152506131f6565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561235c5760008481526020908190206040805180820190915260028502909101805473ffffffffffffffffffffffffffffffffffffffff168252600190810154828401529083529092019101612307565b505050509050919050565b600061237733878787878761321a565b61238c86866123868787612d92565b85611e0e565b9695505050505050565b6000818152600560209081526040918290206001810180548451818502810185019095528085529193611df59390929083018282801561240c57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116123e1575b50505050508260020180548060200260200160405190810160405280929190818152602001828054801561245f57602002820191906000526020600020905b81548152602001906001019080831161244b575b505050505061260784600301805480602002602001604051908101604052809291908181526020016000905b828210156125375783829060005260206000200180546124aa9061519e565b80601f01602080910402602001604051908101604052809291908181526020018280546124d69061519e565b80156125235780601f106124f857610100808354040283529160200191612523565b820191906000526020600020905b81548152906001019060200180831161250657829003601f168201915b50505050508152602001906001019061248b565b50505060048701805460408051602080840282018101909252828152935060009084015b82821015611de257838290600052602060002001805461257a9061519e565b80601f01602080910402602001604051908101604052809291908181526020018280546125a69061519e565b80156125f35780601f106125c8576101008083540402835291602001916125f3565b820191906000526020600020905b8154815290600101906020018083116125d657829003601f168201915b50505050508152602001906001019061255b565b8460090154610f0d565b6000611e99838361262d60408051602081019091526000815290565b612fb3565b61263a6129b5565b73ffffffffffffffffffffffffffffffffffffffff81166126dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610fc3565b611f9881612ed3565b6000818152600560209081526040918290206001810180548451818502810185019095528085529193611df59390929083018282801561275c57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311612731575b5050505050826002018054806020026020016040519081016040528092919081815260200182805480156127af57602002820191906000526020600020905b81548152602001906001019080831161279b575b505050505061295784600301805480602002602001604051908101604052809291908181526020016000905b828210156128875783829060005260206000200180546127fa9061519e565b80601f01602080910402602001604051908101604052809291908181526020018280546128269061519e565b80156128735780601f1061284857610100808354040283529160200191612873565b820191906000526020600020905b81548152906001019060200180831161285657829003601f168201915b5050505050815260200190600101906127db565b50505060048701805460408051602080840282018101909252828152935060009084015b82821015611de25783829060005260206000200180546128ca9061519e565b80601f01602080910402602001604051908101604052809291908181526020018280546128f69061519e565b80156129435780601f1061291857610100808354040283529160200191612943565b820191906000526020600020905b81548152906001019060200180831161292657829003601f168201915b5050505050815260200190600101906128ab565b8460090154611622565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f6e665ced000000000000000000000000000000000000000000000000000000001480610e2657506001610e26565b60085473ffffffffffffffffffffffffffffffffffffffff163314611e0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610fc3565b600067ffffffffffffffff821115612ad0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201527f34206269747300000000000000000000000000000000000000000000000000006064820152608401610fc3565b5090565b600080612ae3868686866122b4565b505060408051808201825273ffffffffffffffffffffffffffffffffffffffff938416815260208082019586526000978852600a815291872080546001808201835591895292909720905160029092020180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169190931617825591519301929092555090565b30612b74610d3f565b73ffffffffffffffffffffffffffffffffffffffff1614612c2d5760005b8451811015612c2b573073ffffffffffffffffffffffffffffffffffffffff16858281518110612bc457612bc461524c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603612c1b57612c1b838281518110612bfc57612bfc61524c565b60200260200101518051906020012060036132f990919063ffffffff16565b612c24816152f1565b9050612b92565b505b5050505050565b612c2d858585858561334b565b30612c4a610d3f565b73ffffffffffffffffffffffffffffffffffffffff1614612c2d57600354600f81810b700100000000000000000000000000000000909204900b1315612c2d576000600355612c2d565b600080612ca08361351f565b90506004816007811115612cb657612cb6614cd9565b14612cc15792915050565b6000612ccc84611f9b565b905080600003612cdd575092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1a287e26040518163ffffffff1660e01b8152600401602060405180830381865afa158015612d4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d6e91906151f1565b612d789082615239565b4210612d88575060069392505050565b5060059392505050565b60606000825167ffffffffffffffff811115612db057612db0614752565b604051908082528060200260200182016040528015612de357816020015b6060815260200190600190039081612dce5790505b50905060005b8451811015612ebd57848181518110612e0457612e0461524c565b602002602001015151600014612e7457848181518110612e2657612e2661524c565b602002602001015180519060200120848281518110612e4757612e4761524c565b6020026020010151604051602001612e609291906153d8565b604051602081830303815290604052612e8f565b838181518110612e8657612e8661524c565b60200260200101515b828281518110612ea157612ea161524c565b602002602001018190525080612eb6906152f1565b9050612de9565b509392505050565b6000611e1c8585858561364c565b6008805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000612fa7338686865167ffffffffffffffff811115612f6c57612f6c614752565b604051908082528060200260200182016040528015612f9f57816020015b6060815260200190600190039081612f8a5790505b50878761321a565b611e1c8585858561378b565b6040517f782d6fe100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490526000917f00000000000000000000000000000000000000000000000000000000000000009091169063782d6fe190604401602060405180830381865afa15801561304b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306f9190615420565b6bffffffffffffffffffffffff16949350505050565b60006130ad8254600f81810b700100000000000000000000000000000000909204900b131590565b156130e4576040517f3db2a12a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508054600f0b6000818152600180840160205260408220805492905583547fffffffffffffffffffffffffffffffff000000000000000000000000000000001692016fffffffffffffffffffffffffffffffff169190911790915590565b6006546040805173ffffffffffffffffffffffffffffffffffffffff928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b606083156131ec575081611e99565b611e998383613cab565b600061238c868686858761321560408051602081019091526000815290565b613cef565b80516020820120600061323887876132328888612d92565b85612209565b60008181526005602052604090206009810154919250906115595780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a1617815587516132a690600183019060208b0190614449565b5086516132bc90600283019060208a01906144cf565b5085516132d2906003830190602089019061450a565b5084516132e8906004830190602088019061455c565b506009019190915550505050505050565b815470010000000000000000000000000000000090819004600f0b6000818152600180860160205260409091209390935583546fffffffffffffffffffffffffffffffff908116939091011602179055565b600061335686611f9b565b9050600081116133e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f476f7665726e6f7254696d656c6f636b436f6d706f756e643a2070726f706f7360448201527f616c206e6f7420796574207175657565640000000000000000000000000000006064820152608401610fc3565b60065461340b9073ffffffffffffffffffffffffffffffffffffffff1634613e78565b60005b855181101561220057600654865173ffffffffffffffffffffffffffffffffffffffff90911690630825f38f9088908490811061344d5761344d61524c565b60200260200101518784815181106134675761346761524c565b60200260200101518785815181106134815761348161524c565b6020026020010151866040518563ffffffff1660e01b81526004016134a9949392919061527b565b6000604051808303816000875af11580156134c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261350e919081019061544e565b50613518816152f1565b905061340e565b600081815260026020819052604082209081015460ff16156135445750600792915050565b6002810154610100900460ff161561355f5750600292915050565b600061356a846117a2565b9050806000036135d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c2069640000006044820152606401610fc3565b4381106135e7575060009392505050565b60006135f28561204c565b905043811061360657506001949350505050565b61360f85613fd2565b8015613631575060008581526005602081905260409091206006810154910154115b1561364157506004949350505050565b506003949350505050565b60008061365b86868686613ffb565b9050600061366882611f9b565b905080156117985760005b875181101561375157600654885173ffffffffffffffffffffffffffffffffffffffff9091169063591fcdfe908a90849081106136b2576136b261524c565b60200260200101518984815181106136cc576136cc61524c565b60200260200101518985815181106136e6576136e661524c565b6020026020010151866040518563ffffffff1660e01b815260040161370e949392919061527b565b600060405180830381600087803b15801561372857600080fd5b505af115801561373c573d6000803e3d6000fd5b505050508061374a906152f1565b9050613673565b50600082815260076020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000169055611798565b6000806137a18686868680519060200120612209565b90508451865114613834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e677460448201527f68000000000000000000000000000000000000000000000000000000000000006064820152608401610fc3565b83518651146138c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e677460448201527f68000000000000000000000000000000000000000000000000000000000000006064820152608401610fc3565b6000865111613930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c00000000000000006044820152606401610fc3565b6000818152600260209081526040918290208251918201909252815467ffffffffffffffff1690819052156139e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c726561647920657869737460448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610fc3565b60006139f36001612a36565b6139fc43612a36565b613a0691906154bc565b90506000613a337f0000000000000000000000000000000000000000000000000000000000000000612a36565b613a3d90836154bc565b83547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff841617845590506001830180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff83161790556000805460018181018355918052845460039091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563810180547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000090811667ffffffffffffffff94851617909155928601547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564820180549094169216919091179091556002840180547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565909201805460ff93841615157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082168117835592546101009081900490941615159093027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff9092167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000909316929092171790557f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084613c2d3390565b8b8b8d5167ffffffffffffffff811115613c4957613c49614752565b604051908082528060200260200182016040528015613c7c57816020015b6060815260200190600190039081613c675790505b508c88888e604051613c96999897969594939291906154e4565b60405180910390a15091979650505050505050565b815115613cbb5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc3919061473f565b60008681526002602052604081206001613d0889611a79565b6007811115613d1957613d19614cd9565b14613da6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201527f69766500000000000000000000000000000000000000000000000000000000006064820152608401610fc3565b613db3888888878761413e565b8251600003613e15578673ffffffffffffffffffffffffffffffffffffffff167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda489888789604051613e089493929190615593565b60405180910390a2613e6c565b8673ffffffffffffffffffffffffffffffffffffffff167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128988878988604051613e639594939291906155bb565b60405180910390a25b50919695505050505050565b80471015613ee2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610fc3565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114613f3c576040519150601f19603f3d011682016040523d82523d6000602084013e613f41565b606091505b5050905080611df5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610fc3565b6000818152600560208190526040822090810154613ff2610cf2856117a2565b11159392505050565b60008061400a86868686612209565b9050600061401782611a79565b9050600281600781111561402d5761402d614cd9565b1415801561404d5750600681600781111561404a5761404a614cd9565b14155b801561406b5750600781600781111561406857614068614cd9565b14155b6140d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f476f7665726e6f723a2070726f706f73616c206e6f74206163746976650000006044820152606401610fc3565b6000828152600260208190526040918290200180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055517f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c906113909084815260200190565b600085815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff8816845260088101909252909120805460ff1615614204576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f476f7665726e6f72436f6d7061746962696c697479427261766f3a20766f746560448201527f20616c72656164792063617374000000000000000000000000000000000000006064820152608401610fc3565b805460ff8616610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000909116176001178155614241846143ab565b81546bffffffffffffffffffffffff9190911662010000027fffffffffffffffffffffffffffffffffffff000000000000000000000000ffff90911617815560ff85166142a7578382600601600082825461429c9190615239565b909155506122009050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff8616016142e5578382600501600082825461429c9190615239565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe60ff861601614323578382600701600082825461429c9190615239565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f476f7665726e6f72436f6d7061746962696c697479427261766f3a20696e766160448201527f6c696420766f74652074797065000000000000000000000000000000000000006064820152608401610fc3565b60006bffffffffffffffffffffffff821115612ad0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203960448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610fc3565b8280548282559060005260206000209081019282156144c3579160200282015b828111156144c357825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190614469565b50612ad09291506145ae565b8280548282559060005260206000209081019282156144c3579160200282015b828111156144c35782518255916020019190600101906144ef565b828054828255906000526020600020908101928215614550579160200282015b8281111561455057825182906145409082615647565b509160200191906001019061452a565b50612ad09291506145c3565b8280548282559060005260206000209081019282156145a2579160200282015b828111156145a257825182906145929082615647565b509160200191906001019061457c565b50612ad09291506145e0565b5b80821115612ad057600081556001016145af565b80821115612ad05760006145d782826145fd565b506001016145c3565b80821115612ad05760006145f482826145fd565b506001016145e0565b5080546146099061519e565b6000825580601f10614619575050565b601f016020900490600052602060002090810190611f9891906145ae565b60006020828403121561464957600080fd5b5035919050565b60006020828403121561466257600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611e9957600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611f9857600080fd5b6000602082840312156146c657600080fd5b8135611e9981614692565b60005b838110156146ec5781810151838201526020016146d4565b50506000910152565b6000815180845261470d8160208601602086016146d1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611e9960208301846146f5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156147c8576147c8614752565b604052919050565b600067ffffffffffffffff8211156147ea576147ea614752565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261482757600080fd5b813561483a614835826147d0565b614781565b81815284602083860101111561484f57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561488257600080fd5b843561488d81614692565b9350602085013561489d81614692565b925060408501359150606085013567ffffffffffffffff8111156148c057600080fd5b6148cc87828801614816565b91505092959194509250565b600067ffffffffffffffff8211156148f2576148f2614752565b5060051b60200190565b600082601f83011261490d57600080fd5b8135602061491d614835836148d8565b82815260059290921b8401810191818101908684111561493c57600080fd5b8286015b8481101561496057803561495381614692565b8352918301918301614940565b509695505050505050565b600082601f83011261497c57600080fd5b8135602061498c614835836148d8565b82815260059290921b840181019181810190868411156149ab57600080fd5b8286015b8481101561496057803583529183019183016149af565b600082601f8301126149d757600080fd5b813560206149e7614835836148d8565b82815260059290921b84018101918181019086841115614a0657600080fd5b8286015b8481101561496057803567ffffffffffffffff811115614a2a5760008081fd5b614a388986838b0101614816565b845250918301918301614a0a565b60008060008060808587031215614a5c57600080fd5b843567ffffffffffffffff80821115614a7457600080fd5b614a80888389016148fc565b95506020870135915080821115614a9657600080fd5b614aa28883890161496b565b94506040870135915080821115614ab857600080fd5b50614ac5878288016149c6565b949793965093946060013593505050565b600080600060608486031215614aeb57600080fd5b8335614af681614692565b9250602084013563ffffffff81168114614b0f57600080fd5b9150604084013567ffffffffffffffff811115614b2b57600080fd5b614b3786828701614816565b9150509250925092565b602080825282518282018190526000919060409081850190868401855b82811015614bab57815180515167ffffffffffffffff9081168652878201515116878601528581015115158686015260609081015115159085015260809093019290850190600101614b5e565b5091979650505050505050565b600081518084526020808501945080840160005b83811015614bfe57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101614bcc565b509495945050505050565b600081518084526020808501945080840160005b83811015614bfe57815187529582019590820190600101614c1d565b600081518084526020808501808196508360051b8101915082860160005b85811015614bab578284038952614c6f8483516146f5565b98850198935090840190600101614c57565b608081526000614c946080830187614bb8565b8281036020840152614ca68187614c09565b90508281036040840152614cba8186614c39565b90508281036060840152614cce8185614c39565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810160088310614d43577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008060408385031215614d5c57600080fd5b823591506020830135614d6e81614692565b809150509250929050565b60008060008060808587031215614d8f57600080fd5b843567ffffffffffffffff80821115614da757600080fd5b614db3888389016148fc565b95506020870135915080821115614dc957600080fd5b614dd58883890161496b565b94506040870135915080821115614deb57600080fd5b614df7888389016149c6565b93506060870135915080821115614e0d57600080fd5b506148cc87828801614816565b600080600060608486031215614e2f57600080fd5b8335614e3a81614692565b925060208401359150604084013567ffffffffffffffff811115614b2b57600080fd5b600080600080600060a08688031215614e7557600080fd5b8535614e8081614692565b94506020860135614e9081614692565b9350604086013567ffffffffffffffff80821115614ead57600080fd5b614eb989838a0161496b565b94506060880135915080821115614ecf57600080fd5b614edb89838a0161496b565b93506080880135915080821115614ef157600080fd5b50614efe88828901614816565b9150509295509295909350565b60008060008060608587031215614f2157600080fd5b8435614f2c81614692565b935060208501359250604085013567ffffffffffffffff80821115614f5057600080fd5b818701915087601f830112614f6457600080fd5b813581811115614f7357600080fd5b886020828501011115614f8557600080fd5b95989497505060200194505050565b60008060408385031215614fa757600080fd5b50508035926020909101359150565b60ff81168114611f9857600080fd5b60008060008060808587031215614fdb57600080fd5b843593506020850135614fed81614fb6565b925060408501359150606085013561500481614692565b939692955090935050565b602080825282518282018190526000919060409081850190868401855b82811015614bab578151805173ffffffffffffffffffffffffffffffffffffffff16855286015186850152928401929085019060010161502c565b600080600080600060a0868803121561507f57600080fd5b853567ffffffffffffffff8082111561509757600080fd5b6150a389838a016148fc565b965060208801359150808211156150b957600080fd5b6150c589838a0161496b565b955060408801359150808211156150db57600080fd5b6150e789838a016149c6565b945060608801359150808211156150fd57600080fd5b614edb89838a016149c6565b6000806040838503121561511c57600080fd5b823561512781614692565b946020939093013593505050565b600080600080600060a0868803121561514d57600080fd5b853561515881614692565b9450602086013561516881614692565b93506040860135925060608601359150608086013567ffffffffffffffff81111561519257600080fd5b614efe88828901614816565b600181811c908216806151b257607f821691505b6020821081036151eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561520357600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610e2657610e2661520a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8516815283602082015260a06040820152600060a082015260c0606082015260006152be60c08301856146f5565b905082608083015295945050505050565b6000602082840312156152e157600080fd5b81518015158114611e9957600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036153225761532261520a565b5060010190565b6000806000806080858703121561533f57600080fd5b845161534a81614fb6565b809450506020850151925060408501519150606085015161500481614692565b81810381811115610e2657610e2661520a565b8183823760009101908152919050565b6080815260006153a06080830187614bb8565b82810360208401526153b28187614c09565b905082810360408401526153c68186614c39565b91505082606083015295945050505050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600082516154128160048501602087016146d1565b919091016004019392505050565b60006020828403121561543257600080fd5b81516bffffffffffffffffffffffff81168114611e9957600080fd5b60006020828403121561546057600080fd5b815167ffffffffffffffff81111561547757600080fd5b8201601f8101841361548857600080fd5b8051615496614835826147d0565b8181528560208385010111156154ab57600080fd5b611e1c8260208301602086016146d1565b67ffffffffffffffff8181168382160190808211156154dd576154dd61520a565b5092915050565b60006101208b835273ffffffffffffffffffffffffffffffffffffffff8b16602084015280604084015261551a8184018b614bb8565b9050828103606084015261552e818a614c09565b905082810360808401526155428189614c39565b905082810360a08401526155568188614c39565b67ffffffffffffffff87811660c0860152861660e0850152838103610100850152905061558381856146f5565b9c9b505050505050505050505050565b84815260ff8416602082015282604082015260806060820152600061238c60808301846146f5565b85815260ff8516602082015283604082015260a0606082015260006155e360a08301856146f5565b82810360808401526155f581856146f5565b98975050505050505050565b601f821115611df557600081815260208120601f850160051c810160208610156156285750805b601f850160051c820191505b81811015612c2b57828155600101615634565b815167ffffffffffffffff81111561566157615661614752565b6156758161566f845461519e565b84615601565b602080601f8311600181146156c857600084156156925750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555612c2b565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015615715578886015182559484019460019091019084016156f6565b508582101561575157878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fe476f7665726e6f723a2072656c617920726576657274656420776974686f7574206d657373616765a2646970667358221220ccc7c9d32698e133b8ccc02c0107192dd007d27579b41de8bab32ed7ec1c2b9664736f6c63430008130033";
