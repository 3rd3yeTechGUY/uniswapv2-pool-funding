// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract V2Forwarder {
    address public constant FACTORY = 0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32; // quickswap
    address public constant ROUTER = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff;  // quickswap as well
    address public immutable WETH;

    constructor(address _wrapper) {
        WETH = _wrapper;
    }

    function fund(address _tokenA, address _tokenB, uint _amountA, uint _amountB) external payable {
        // wrap if received network native currency
        if(msg.value > 0) {
            _tokenA = WETH;
            _amountA = msg.value;

            IWeth9(WETH).deposit{value: msg.value}();

            // transfer tokenB to this contract, as tokenA is already there
            IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);
        } else {
            // transfer both tokens to this contract
            IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);
            IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);
        }

        // approve the router
        IERC20(_tokenA).approve(ROUTER, _amountA);
        IERC20(_tokenB).approve(ROUTER, _amountB);

        // add liquidity
        IUniswapV2Router(ROUTER).addLiquidity(_tokenA, _tokenB, _amountA, _amountB, 1, 1, address(this), block.timestamp);
    }
}

interface IUniswapV2Router {
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
}

interface IUniswapV2Factory {
    function getPair(address token0, address token1) external view returns (address);
}

interface IWeth9 {
    function deposit() external payable;
}