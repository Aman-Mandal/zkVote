// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./polygonZKEVMContracts/interfaces/IBridgeMessageReceiver.sol";
import "./polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

contract VoteOnZkEvm {
    // Global Exit Root address
    IPolygonZkEVMBridge public immutable polygonZkEVMBridge;

    struct Proposal {
        address token;
        uint timepoint;
        address proposalAddress;
    }

    // mapping of proposal id to address of token used to calculate the vote power
    mapping(uint => Proposal) public proposalForID;
    mapping(uint => mapping(address => bool)) public voted;

    /**
     * @param _polygonZkEVMBridge Polygon zkevm bridge address
     */
    constructor(IPolygonZkEVMBridge _polygonZkEVMBridge) {
        polygonZkEVMBridge = _polygonZkEVMBridge;
    }

    function registerProposal(
        address _token,
        uint id,
        address _proposalAddress
    ) public {
        require(proposalForID[id].token == address(0), "already registered");
        proposalForID[id].token = _token;
        proposalForID[id].timepoint = block.number;
        proposalForID[id].proposalAddress = _proposalAddress;
    }

    /**
     * @notice Send a message to the other network
     * @param destinationNetwork Network destination
     * @param forceUpdateGlobalExitRoot Indicates if the global exit root is updated or not
     */
    function vote(
        uint32 destinationNetwork,
        bool forceUpdateGlobalExitRoot,
        uint _id,
        uint8 support
    ) public {
        require(!voted[_id][msg.sender], "Already voted");
        uint timepoint = proposalForID[_id].timepoint;
        uint power = IVotes(proposalForID[_id].token).getPastVotes(
            msg.sender,
            timepoint
        );
        bytes memory message = abi.encode(support, power, _id, msg.sender);

        polygonZkEVMBridge.bridgeMessage(
            destinationNetwork,
            proposalForID[_id].proposalAddress,
            forceUpdateGlobalExitRoot,
            message
        );
        voted[_id][msg.sender] = true;
    }
}
