// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../contracts/EHR.sol";
// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract SimpleStorageTest {

  function testWriteValue() public {
    EHR ehr = EHR(DeployedAddresses.EHR());

    Assert.equal(ehr.read(), 0, "Contract should have 0 stored");
    ehr.write(1);
    Assert.equal(ehr.read(), 1, "Contract should have 1 stored");
    ehr.write(2);
    Assert.equal(ehr.read(), 2, "Contract should have 2 stored");
  }
}
