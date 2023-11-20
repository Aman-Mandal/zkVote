pragma solidity ^0.8.19;

/// @title Governance Timelock Storage Contract
contract GovernanceTimelockStorage {
    /// @notice Initialized flag - indicates that initialization was made once
    bool internal _initialized;

    uint256 public constant _gracePeriod = 14 days;
    uint256 public constant _minimumDelay = 1 hours;
    uint256 public constant _maximumDelay = 30 days;

    address public _guardian;
    address public _authorizedNewGuardian;
    uint256 public _delay;

    mapping(bytes32 => bool) public _queuedTransactions;
}
