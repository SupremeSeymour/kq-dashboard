export const kq_dashboard_address = '0x9c8E2960E9F2A2e38A2B4413401B3C441B25BfFa'

export const kq_dashboard_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "burner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "appove",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minter",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newlyMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "send",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBurned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const gfarm_address = '0x7075cAB6bCCA06613e2d071bd918D1a0241379E2'

export const gfarm_abi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"name_","internalType":"string"},{"type":"string","name":"symbol_","internalType":"string"},{"type":"uint8","name":"decimals_","internalType":"uint8"},{"type":"address","name":"childChainManager","internalType":"address"},{"type":"address","name":"trading","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GrantRequestCanceled","inputs":[{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"uint256","name":"canceled","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"GrantRequestInitiated","inputs":[{"type":"bytes32[]","name":"roles","internalType":"bytes32[]","indexed":true},{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"uint256","name":"block","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"MetaTransactionExecuted","inputs":[{"type":"address","name":"userAddress","internalType":"address","indexed":false},{"type":"address","name":"relayerAddress","internalType":"address payable","indexed":false},{"type":"bytes","name":"functionSignature","internalType":"bytes","indexed":false}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32","indexed":true},{"type":"bytes32","name":"previousAdminRole","internalType":"bytes32","indexed":true},{"type":"bytes32","name":"newAdminRole","internalType":"bytes32","indexed":true}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32","indexed":true},{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"address","name":"sender","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32","indexed":true},{"type":"address","name":"account","internalType":"address","indexed":true},{"type":"address","name":"sender","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"BURNER_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DEFAULT_ADMIN_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DEPOSITOR_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"ERC712_VERSION","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"MINTER_ROLE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MIN_GRANT_REQUEST_DELAY","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"cancelGrantRequest","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"cap","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"address","name":"user","internalType":"address"},{"type":"bytes","name":"depositData","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"executeGrantRequest","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bytes","name":"","internalType":"bytes"}],"name":"executeMetaTransaction","inputs":[{"type":"address","name":"userAddress","internalType":"address"},{"type":"bytes","name":"functionSignature","internalType":"bytes"},{"type":"bytes32","name":"sigR","internalType":"bytes32"},{"type":"bytes32","name":"sigS","internalType":"bytes32"},{"type":"uint8","name":"sigV","internalType":"uint8"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getChainId","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"getDomainSeperator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"nonce","internalType":"uint256"}],"name":"getNonce","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"getRoleAdmin","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getRoleMember","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRoleMemberCount","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"grantRequestInitiated","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"grantRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"hasRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initiateGrantRequest","inputs":[{"type":"bytes32[]","name":"roles","internalType":"bytes32[]"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"mint","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revokeRole","inputs":[{"type":"bytes32","name":"role","internalType":"bytes32"},{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]}]
