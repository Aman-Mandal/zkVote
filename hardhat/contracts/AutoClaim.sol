// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@phala/solidity/contracts/PhatRollupAnchor.sol";
import "./polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";

contract AutoClaim is PhatRollupAnchor, Ownable {
    event AutoClaimed(uint reqId, string reqData, uint256 value);
    event NotReady(uint reqId);

    uint constant TYPE_READY = 0;
    uint constant TYPE_NOTREADY = 2;

    IPolygonZkEVMBridge public immutable polygonZkEVMBridge;

    uint nextRequest = 1;

    constructor(address phatAttestor, IPolygonZkEVMBridge _polygonZkEVMBridge) {
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
        polygonZkEVMBridge = _polygonZkEVMBridge;
    }

    function setAttestor(address phatAttestor) public onlyOwner {
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
    }

    function request() external {
        // assemble the request
        uint id = nextRequest;
        _pushMessage(abi.encode(id));
        nextRequest += 1;
    }

    function _onMessageReceived(bytes calldata action) internal override {
        (
            uint respType,
            uint id,
            bytes32[32] memory smtProof,
            uint32 index,
            bytes32 mainnetExitRoot,
            bytes32 rollupExitRoot,
            uint32 originNetwork,
            address originAddress,
            uint32 destinationNetwork,
            address destinationAddress,
            uint256 amount,
            bytes memory metadata
        ) = abi.decode(
                action,
                (
                    uint,
                    uint,
                    bytes32[32],
                    uint32,
                    bytes32,
                    bytes32,
                    uint32,
                    address,
                    uint32,
                    address,
                    uint256,
                    bytes
                )
            );
        if (respType == TYPE_READY) {
            polygonZkEVMBridge.claimMessage(
                smtProof,
                index,
                mainnetExitRoot,
                rollupExitRoot,
                originNetwork,
                originAddress,
                destinationNetwork,
                destinationAddress,
                amount,
                metadata
            );
        } else if (respType == TYPE_NOTREADY) {
            emit NotReady(id);
        }
    }
}
