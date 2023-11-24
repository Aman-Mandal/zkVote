# zkVote
Crosschain governance management platform built on ZkEVM powered by LXLY bridge, Chainlink Automation &amp; Phala Network

## Problem we are solving

The difficulty of dispersed governance across blockchain networks is what our project aims to solve. Token holders are frequently divided into silos and have a disproportionate amount of voting power when DAOs spread across several networks. Our platform offers a cross-chain governance structure that aggregates voting power regardless of token ownership, in an effort to unify this fragmented ecosystem. We ensure that no vote is overlooked in the multi-chain future by integrating Ethereum and zkEVM to enable smooth, democratic participation and governance that accurately reflects the views of all token holders.

## Encouraging Decentralised Management in All Chains

Our initiative is a shining example of innovation in the field of decentralised autonomy, providing a strong, unified cross-chain governance framework that is both inclusive and potent. This innovative solution aims to allow DAO members to incorporate their token holdings on the *Ethereum mainnnet* and *Polygon zkEVM* networks, as well as to start and participate in governance initiatives on Ethereum. The key component of this system is the smooth integration offered by the *LXLY bridge*, which aligns token balances between chains to guarantee that each member's voting power is fairly represented and that the fundamentals of democratic participation are maintained.

## Simplified DAO Administration and Proposal Fulfilment

The GovXWrapper, a cross-chain wrapper contract that cooperates with OpenZeppelin's governance contracts to provide a safe and efficient governance process, strengthens the infrastructure of our platform. An unprecedented level of automation and computational intelligence is introduced with the advent of *Phala Network* and *Chainlink* Automation. The automation of vote and message claims on our platform, which ensures the precision and promptness of every governance action, depends on this interface. We guarantee that the governance process remains transparent and unchangeable by automating these essential processes.

## An Integrated Method for Decentralised Decision-Making

Beyond its technological capabilities, our platform excels thanks to a cutting-edge, user-friendly interface that puts the needs of its exceptional users first. We know that when decentralised governance is approachable and interesting, its full potential can be realised. As a result, our platform invites users to fully engage with the democratic process, serving as more than just a tool. Every decision is significant, every contact is intuitive, and every member has a voice in this painstakingly created environment. Come along with us as we transform the DAO governance landscape by combining security, usability, and style to produce the best possible decentralised decision-making platform.


## Technologies Used

#### Chainlink Automation 

Used Chainlink time-based trigger to execute claim function every hour.

[UpKeep link](https://automation.chain.link/goerli/56209270301599875549343820271679309979009473186668399424303531307152837514484)

[Transactions](https://goerli.etherscan.io/address/0x05222e5f67d4a4b363ca65ed7fcd25c3353e1972#internaltx)

#### Phala Network 
To claim the message, we require specific Merkle proofs related to the source transaction for verification. These proofs are accessible through the [API](https://bridge-api.public.zkevm-test.net/bridges/). Our contract is linked to the Phat contract, which retrieves the necessary proofs from the API and transmits them to the contract to facilitate the message claiming process.

[code](https://github.com/Aman-Mandal/zkVote/blob/main/AutoClaimPhat/src/index.ts)

[tx](https://goerli.etherscan.io/tx/0xdd8288c2cc98f5ab073bb8079249e1b2bf30727ccc29c5fc405da0526bdb531b)

#### Polygon ZkEVM 

VoteOnZkEVM contract was deployed on Polygon ZkEVM Testnet 

[VoteOnZkEVM Contract](https://testnet-zkevm.polygonscan.com/address/0x611bb13B02D8FD1E94762b976cAC1fb01Ae39111)

#### Goerli 

GovXWrapper contract was deployed on Goerli 

[GovXWrapper Contract](https://goerli.etherscan.io/address/0x9A5d0A5aD88C00308C53aA0b692Af33edAe7d895)

[Autoclaim Contract](https://goerli.etherscan.io/address/0x05222e5f67d4a4b363ca65ed7fcd25c3353e1972)



