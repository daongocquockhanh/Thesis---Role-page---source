pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Payment {
  struct Record {
    string cid;
    string fileName; 
    address userId;
    address adminId;
    uint256 timeAdded;
  }

  struct User {
    address id;
   
    Record[] records;
  }

  struct Admin {
    address id;
  }

  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  mapping (address => User) public users;
  mapping (address => Admin) public admins;

  event UserAdded(address userId);
  event AdminAdded(address adminId);
  event RecordAdded(string cid, address userId, address adminId);

  // modifiers

  modifier senderExists {
    require(admins[msg.sender].id == msg.sender || users[msg.sender].id == msg.sender, "Sender does not exist");
    _;
  }

  modifier userExists(address userId) {
    require(users[userId].id == userId, "User does not exist");
    _;
  }

  modifier senderIsAdmin {
    require(admins[msg.sender].id == msg.sender, "Sender is not a admin");
    _;
  }

  // functions

  function addUser(address _userId) public senderIsAdmin {
    require(users[_userId].id != _userId, "This user already exists.");
    users[_userId].id = _userId;
    
    
    emit UserAdded(_userId);
  }

  function addAdmin() public {
    require(admins[msg.sender].id != msg.sender, "This admin already exists.");
    admins[msg.sender].id = msg.sender;

    emit AdminAdded(msg.sender);
  }

  function addRecord(string memory _cid, string memory _fileName, address _userId) public senderIsAdmin userExists(_userId) {
    Record memory record = Record(_cid, _fileName, _userId, msg.sender, block.timestamp);
    users[_userId].records.push(record);

    emit RecordAdded(_cid, _userId, msg.sender);
  } 

  function getRecords(address _userId) public view senderExists userExists(_userId) returns (Record[] memory) {
    return users[_userId].records;
  } 

  function getSenderRole() public view returns (string memory) {
    if (admins[msg.sender].id == msg.sender) {
      return "admin";
    } else if (users[msg.sender].id == msg.sender) {
      return "user";
    } else {
      return "unknown";
    }
  }

  function getUserExists(address _userId) public view senderIsAdmin returns (bool) {
    return users[_userId].id == _userId;
  }
}

//contract Transactions {
//  uint256 transactionCount;
//
//  event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
//
//  struct TransferStruct {
//    address sender;
//    address receiver;
//    uint amount;
//    string message;
//    uint256 timestamp;
//    string keyword;
//  }

//  TransferStruct[] transactions;
//
//  function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
//    transactionCount += 1;
//    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
//
//    emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
//  }
//
//  function getAllTransactions() public view returns (TransferStruct[] memory) {
//    return transactions;
//  }
//
//  function getTransactionCount() public view returns (uint256) {
//    return transactionCount;
//  }
//}