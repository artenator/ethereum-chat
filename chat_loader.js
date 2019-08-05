
personal.unlockAccount(eth.accounts[0])


var browser_untitled_sol_chatroomContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"chat","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"m","type":"string"}],"name":"sendMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getChatMessages","outputs":[{"name":"_cht","type":"bytes32[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var browser_untitled_sol_chatroom = browser_untitled_sol_chatroomContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103998061005e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634410728e14610072578063469c8110146100b15780638da5cb5b1461010e578063cfb5192814610163578063d5dc754e146101dc575b600080fd5b341561007d57600080fd5b610093600480803590602001909190505061022d565b60405180826000191660001916815260200191505060405180910390f35b34156100bc57600080fd5b61010c600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610247565b005b341561011957600080fd5b610121610288565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016e57600080fd5b6101be600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506102ad565b60405180826000191660001916815260200191505060405180910390f35b34156101e757600080fd5b6101ef6102de565b6040518082600a60200280838360005b8381101561021a5780820151818401526020810190506101ff565b5050505090500191505060405180910390f35b600181600a8110151561023c57fe5b016000915090505481565b60008090505b600a8110156102845761025f826102ad565b600180600a8110151561026e57fe5b018160001916905550808060010191505061024d565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006102b761032d565b8290506000815114156102d057600060010291506102d8565b602083015191505b50919050565b6102e6610341565b6001600a806020026040519081016040528092919082600a8015610323576020028201915b8154600019168152602001906001019080831161030b575b5050505050905090565b602060405190810160405280600081525090565b61014060405190810160405280600a905b600080191681526020019060019003908161035257905050905600a165627a7a723058204cfca0df96f4962d2a95bc212e908837d3c29d912b2531c73264895621905af30029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })