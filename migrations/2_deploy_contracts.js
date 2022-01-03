var ForwardContract = artifacts.require("V2Forwarder");

const day = 1 * 60 * 60 * 24;

module.exports = async function(deployer) {
    // address for mumbai testnet: 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889
    // address for polygon mainnet: 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270
    await deployer.deploy(ForwardContract, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889");
    let fwd = await ForwardContract.deployed();

    console.log("FWD SC:  " + ForwardContract.address);
}