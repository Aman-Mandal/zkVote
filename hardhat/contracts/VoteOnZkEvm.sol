// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./polygonZKEVMContracts/interfaces/IBridgeMessageReceiver.sol";
import "./polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract VoteOnZkEvm {
    // Global Exit Root address
    IPolygonZkEVMBridge public immutable polygonZkEVMBridge;

    // Address of proposal in eth
    address public proposalAddress;

    // mapping of proposal id to address of token used to calculate the vote power
    mapping(uint => address) public tokenAddressForID;

    enum Options {
        For,
        Against,
        Abstain
    }

    /**
     * @param _polygonZkEVMBridge Polygon zkevm bridge address
     * @param _proposalAddress Address of proposal in eth
     */
    constructor(
        IPolygonZkEVMBridge _polygonZkEVMBridge,
        address _proposalAddress
    ) {
        polygonZkEVMBridge = _polygonZkEVMBridge;
        proposalAddress = _proposalAddress;
    }

    function registerProposal(address _token, uint id) public {
        require(tokenAddressForID[id] == address(0), "already registered");
        tokenAddressForID[id] = _token;
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
        Options option
    ) public {
        uint power = IERC20(tokenAddressForID[_id]).balanceOf(msg.sender);
        bytes memory message = abi.encode(option, power, _id);

        polygonZkEVMBridge.bridgeMessage(
            destinationNetwork,
            proposalAddress,
            forceUpdateGlobalExitRoot,
            message
        );
    }
}
