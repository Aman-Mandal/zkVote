// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "../openzeppelin/contracts/governance/Governor.sol";
import "../openzeppelin/contracts/governance/compatibility/GovernorCompatibilityBravo.sol";
import "../openzeppelin/contracts/governance/extensions/GovernorVotesComp.sol";
import "../openzeppelin/contracts/governance/extensions/GovernorTimelockCompound.sol";
import "../polygonZKEVMContracts/interfaces/IBridgeMessageReceiver.sol";
import "../polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";
import "../openzeppelin/contracts/access/Ownable.sol";

contract MyGovernor is
    Governor,
    GovernorCompatibilityBravo,
    GovernorVotesComp,
    GovernorTimelockCompound,
    IBridgeMessageReceiver,
    Ownable
{
    IPolygonZkEVMBridge public immutable polygonZkEVMBridge =
        IPolygonZkEVMBridge(0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7);
    uint32 public immutable networkID;
    address public voteOnZkEvmAddress;

    struct Votes {
        address voter;
        uint weight;
    }

    uint public immutable VotingPeriod;

    mapping(uint => Votes[]) public votes;

    constructor(
        ERC20VotesComp _token,
        ICompoundTimelock _timelock,
        uint _votingPeriod
    )
        Governor("MyGovernor")
        GovernorVotesComp(_token)
        GovernorTimelockCompound(_timelock)
    {
        VotingPeriod = _votingPeriod;
        networkID = polygonZkEVMBridge.networkID();
    }

    function votingDelay() public pure override returns (uint256) {
        return 1; // 1 block
    }

    function votingPeriod() public view override returns (uint256) {
        return VotingPeriod; // 1 week
    }

    function quorum(
        uint256 blockNumber
    ) public pure override returns (uint256) {
        return 2;
    }

    function proposalThreshold() public pure override returns (uint256) {
        return 2;
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

    // The following functions are overrides required by Solidity.

    function _vote(
        uint proposalId,
        uint8 support,
        uint power,
        address _voter
    ) internal returns (uint) {
        uint vote = super.castVote(proposalId, support, power, _voter);

        Votes memory userVote;
        userVote.voter = _voter;
        userVote.weight = power;

        votes[proposalId].push(userVote);
    }

    function state(
        uint256 proposalId
    )
        public
        view
        override(Governor, IGovernor, GovernorTimelockCompound)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }

    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    )
        public
        override(Governor, GovernorCompatibilityBravo, IGovernor)
        returns (uint256)
    {
        return super.propose(targets, values, calldatas, description);
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
        (uint8 support, uint power, uint proposalId, address _voter) = abi
            .decode(data, (uint8, uint, uint, address));

        uint ethPower = getVotes(_voter, proposalSnapshot(proposalId));

        _vote(proposalId, support, power + ethPower, _voter);
    }

    function _execute(
        uint256 proposalId,
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockCompound) {
        super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }

    function getVotesOnProposal(
        uint _proposalId
    ) public view returns (Votes[] memory) {
        return votes[_proposalId];
    }

    function _cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockCompound) returns (uint256) {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }

    function _executor()
        internal
        view
        override(Governor, GovernorTimelockCompound)
        returns (address)
    {
        return super._executor();
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(Governor, IERC165, GovernorTimelockCompound)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
