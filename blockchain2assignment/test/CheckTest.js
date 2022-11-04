const Check = artifacts.require("Check");
const { assert } = require("chai")

contract("Check", (acc) => {

let check;

  before(async () => {
    check = await Check.deployed();
  });


  describe("deposit, withdraw and get balance", async () => {
    before("deposit 100 to account 1", async () => {
      await check.depositTO(1, 100);

    });

    it("balance of first account should be 0", async () => {
      const balance = await check.getBalance(0);
      assert.equal(balance, 0, "The balance of the first account should be 0");
    });

    it("withdraw 50 from account 3 with the balance of 50 being the account holder", async () => {
        await check.withdraw(3, 25);
        const balance = await check.getBalance(3);
        assert.equal(
          balance,
          25,
          "It is not possible"
        );
      });

    it("should not be able withdraw 50 from account 2 with the balance of 0", async () => {
      await check.withdraw(2, 50);
      const balance = await check.getBalance(2);
      assert.equal(
        balance,
        0,
        "Not possible."
      );
    });

  });

  });
