

var Casino = artifacts.require("./contracts/propertyTransfer.sol");
module.exports = function(deployer) {
    // constructor during deployement
  //deployer.deploy(web3.toWei(0.1, 'ether'), 100, {gas: 3000000});
  deployer.deploy({gas: 3000000});
};