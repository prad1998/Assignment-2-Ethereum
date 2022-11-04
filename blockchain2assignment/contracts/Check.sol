pragma solidity 0.8.17;
contract Check {

address[3] public accounts;
mapping(uint => uint) public balance;


function depositTO (uint acc, uint amount) public {
    require(acc >= 0 && acc < 3);
    balance[acc] += amount;
}

function withdraw(uint acc, uint amount) public returns (bool) {
    require(acc >= 0 && acc < 3);
    require(accounts[acc] == msg.sender);

    if (balance[acc] >= amount){
        balance[acc] -= amount;
        return true;
    } else {
        return false;
    }

}

function getBalance(uint acc) public view returns(uint) {
      return balance[acc];
  }




}
