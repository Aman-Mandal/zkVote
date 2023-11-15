// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./polygonZKEVMContracts/interfaces/IBridgeMessageReceiver.sol";
import "./polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract ProposalETH is IBridgeMessageReceiver, Ownable {
    // Global Exit Root address
    IPolygonZkEVMBridge public immutable polygonZkEVMBridge;

    // Current network identifier
    uint32 public immutable networkID;

    // Address in the other network that will send the message
    address public voteOnZkEvmAddress;

    // Value sent from the other network
    uint256 public votes;
    uint public id;

    // mapping of proposal id to address of token used to calculate the vote power
    mapping(uint => address) public tokenAddressForID;

    enum Options {
        For,
        Against,
        Abstain
    }

    /**
     * @param _polygonZkEVMBridge Polygon zkevm bridge address
     */
    constructor(IPolygonZkEVMBridge _polygonZkEVMBridge) {
        polygonZkEVMBridge = _polygonZkEVMBridge;
        networkID = polygonZkEVMBridge.networkID();
    }

    function registerProposal(address _token) external {
        id++;
        tokenAddressForID[id] = _token;
    }

    /**
     * @notice Set the sender of the message
     * @param _voteOnZkEvmAddress Address of the sender in the other network
     */
    function setVoteOnZkEvmAddress(
        address _voteOnZkEvmAddress
    ) external onlyOwner {
        voteOnZkEvmAddress = _voteOnZkEvmAddress;
    }

    /**
     * @notice Verify merkle proof and withdraw tokens/ether
     * @param originAddress Origin address that the message was sended
     * @param originNetwork Origin network that the message was sended ( not usefull for this contract)
     * @param data Abi encoded metadata
     */
    function onMessageReceived(
        address originAddress,
        uint32 originNetwork,
        bytes memory data
    ) external payable override {
        // Can only be called by the bridge
        require(
            msg.sender == address(polygonZkEVMBridge),
            "PingReceiver::onMessageReceived: Not PolygonZkEVMBridge"
        );

        // Can only be called by the sender on the other network
        require(
            voteOnZkEvmAddress == originAddress,
            "PingReceiver::onMessageReceived: Not VoteOnZkEvm"
        );

        // Decode data
        (Options option, uint power, uint _id) = abi.decode(
            data,
            (Options, uint, uint)
        );

        uint ethPower = IERC20(tokenAddressForID[_id]).balanceOf(msg.sender);

        // do the magic
        // sum of ethPower and power was total vote power
    }
}
