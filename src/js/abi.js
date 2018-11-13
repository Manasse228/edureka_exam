var abi = [
          	{
          		"anonymous": false,
          		"inputs": [
          			{
          				"indexed": false,
          				"name": "_propertyName",
          				"type": "string"
          			},
          			{
          				"indexed": false,
          				"name": "_msg",
          				"type": "string"
          			}
          		],
          		"name": "PropertySetPrice",
          		"type": "event"
          	},
          	{
          		"constant": false,
          		"inputs": [],
          		"name": "kill",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"anonymous": false,
          		"inputs": [
          			{
          				"indexed": true,
          				"name": "_from",
          				"type": "address"
          			},
          			{
          				"indexed": true,
          				"name": "_to",
          				"type": "address"
          			},
          			{
          				"indexed": false,
          				"name": "_propertyName",
          				"type": "string"
          			},
          			{
          				"indexed": false,
          				"name": "_msg",
          				"type": "string"
          			}
          		],
          		"name": "PropertyTransferred",
          		"type": "event"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "_verifiedOwner",
          				"type": "address"
          			},
          			{
          				"name": "_propertyLocationFlour",
          				"type": "uint256"
          			},
          			{
          				"name": "_propertyLocation",
          				"type": "string"
          			},
          			{
          				"name": "_propertyName",
          				"type": "string"
          			},
          			{
          				"name": "_propertyPrice",
          				"type": "uint256"
          			},
          			{
          				"name": "_ownerName",
          				"type": "string"
          			}
          		],
          		"name": "allotProperty",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"anonymous": false,
          		"inputs": [
          			{
          				"indexed": true,
          				"name": "_verifiedOwner",
          				"type": "address"
          			},
          			{
          				"indexed": true,
          				"name": "_totalNoOfPropertyCurrently",
          				"type": "uint256"
          			},
          			{
          				"indexed": false,
          				"name": "_nameOfProperty",
          				"type": "string"
          			},
          			{
          				"indexed": false,
          				"name": "_msg",
          				"type": "string"
          			}
          		],
          		"name": "PropertyAlloted",
          		"type": "event"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "_price",
          				"type": "uint256"
          			},
          			{
          				"name": "_propertyName",
          				"type": "string"
          			}
          		],
          		"name": "setPropertyCost",
          		"outputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"constant": false,
          		"inputs": [
          			{
          				"name": "_to",
          				"type": "address"
          			},
          			{
          				"name": "_propertyName",
          				"type": "string"
          			}
          		],
          		"name": "transferProperty",
          		"outputs": [
          			{
          				"name": "",
          				"type": "bool"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"payable": false,
          		"stateMutability": "nonpayable",
          		"type": "constructor"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "DA",
          		"outputs": [
          			{
          				"name": "",
          				"type": "address"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "_ownerAddress",
          				"type": "address"
          			}
          		],
          		"name": "getPropertyCountOfAnyAddress",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "_checkOwnerAddress",
          				"type": "address"
          			},
          			{
          				"name": "_propertyName",
          				"type": "string"
          			}
          		],
          		"name": "isOwner",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "",
          				"type": "address"
          			},
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"name": "propertiesOwner",
          		"outputs": [
          			{
          				"name": "flour",
          				"type": "uint256"
          			},
          			{
          				"name": "location",
          				"type": "string"
          			},
          			{
          				"name": "name",
          				"type": "string"
          			},
          			{
          				"name": "isSold",
          				"type": "bool"
          			},
          			{
          				"name": "price",
          				"type": "uint256"
          			},
          			{
          				"name": "ownerName",
          				"type": "string"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [
          			{
          				"name": "a1",
          				"type": "string"
          			},
          			{
          				"name": "a2",
          				"type": "string"
          			}
          		],
          		"name": "stringsEqual",
          		"outputs": [
          			{
          				"name": "",
          				"type": "bool"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"constant": true,
          		"inputs": [],
          		"name": "totalNoOfProperty",
          		"outputs": [
          			{
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"payable": false,
          		"stateMutability": "view",
          		"type": "function"
          	}
          ];