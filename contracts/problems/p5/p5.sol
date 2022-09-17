// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract p5 is ERC20 {
    uint8 dec = 18; // solium-disable-line uppercase
    uint256 sup = 2000000000 * (10**uint256(dec));

    constructor() ERC20("Web3 Online Judge Token", "WEB3OJT") {
        _mint(_msgSender(), sup);
    }
}
