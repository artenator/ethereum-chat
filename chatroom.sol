/*
	Arte Ebrahimi
	Solidity Chatroom
	12/7/17

	Chatroom
*/

pragma solidity ^0.4.8;

contract chatroom {

	address public owner;

	string[10] chat;

	function chatroom() {
		owner = msg.sender;
	}
	
	function sendMessage(string m) {
        for (uint i = chat.length - 1; i > 0; i++) {
            chat[i] = chat[i + 1];
        }
        chat[0] = m;
	}

	function getChatMessages() public constant returns (string[10] _cht)
	{
		return chat;
	}
	
}
