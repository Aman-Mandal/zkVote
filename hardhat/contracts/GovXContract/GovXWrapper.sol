// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "../openzeppelin/contracts/governance/Governor.sol";
import "../openzeppelin/contracts/governance/compatibility/GovernorCompatibilityBravo.sol";
import "../openzeppelin/contracts/governance/extensions/GovernorVotesComp.sol";
import "../openzeppelin/contracts/governance/extensions/GovernorTimelockCompound.sol";

contract MyGovernor is
    Governor,
    GovernorCompatibilityBravo,
    GovernorVotesComp,
    GovernorTimelockCompound
{
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

    // The following functions are overrides required by Solidity.

    function vote(
        uint proposalId,
        uint8 support,
        uint power,
        address _voter
    ) external returns (uint) {
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
