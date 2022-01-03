(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "V2Forwarder",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_wrapper",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "FACTORY",
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
      "name": "ROUTER",
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
      "name": "WETH",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountB",
          "type": "uint256"
        }
      ],
      "name": "fund",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_wrapper\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"FACTORY\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ROUTER\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WETH\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_tokenB\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amountA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountB\",\"type\":\"uint256\"}],\"name\":\"fund\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/V2Forwarder.sol\":\"V2Forwarder\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x61437cb513a887a1bbad006e7b1c8b414478427d33de47c5600af3c748f108da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2c3d0973630ed74f2b5ce3944677a885dc70ec32fc83b35f55045a10224da32b\",\"dweb:/ipfs/QmbefZ5RoEZKNHXCALfh683PnaNYzKPcKMFjyY1DVAgq8A\"]},\"project:/contracts/V2Forwarder.sol\":{\"keccak256\":\"0x23ac0e122374d0ac7174b983b0c25852c36d61ec5160a404b07b9fbe4b6929b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e2ba461d0ace4a2815f8edbd66746d001eeeee64d6d5ddba16f865a4adddd3bd\",\"dweb:/ipfs/QmZi6spR2W7SPEHuRpYKZhe2wiYUSuFMaWGspW6SxfpKNb\"]}},\"version\":1}",
  "bytecode": "0x60a060405234801561001057600080fd5b506040516106a93803806106a983398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c61060c61009d6000396000818160d7015281816101010152610127015261060c6000f3fe60806040526004361061003f5760003560e01c80632dd310001461004457806332fe7b261461008857806377531866146100b0578063ad5c4648146100c5575b600080fd5b34801561005057600080fd5b5061006c735757371414417b8c6caad45baef941abc7d3ab3281565b6040516001600160a01b03909116815260200160405180910390f35b34801561009457600080fd5b5061006c73a5e0829caced8ffdd4de3c43696c57f7d7a678ff81565b6100c36100be366004610541565b6100f9565b005b3480156100d157600080fd5b5061006c7f000000000000000000000000000000000000000000000000000000000000000081565b3415610226577f000000000000000000000000000000000000000000000000000000000000000093503491507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561018057600080fd5b505af1158015610194573d6000803e3d6000fd5b50506040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03871693506323b872dd92506064019050602060405180830381600087803b1580156101e857600080fd5b505af11580156101fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102209190610582565b50610335565b6040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b038516906323b872dd90606401602060405180830381600087803b15801561027457600080fd5b505af1158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190610582565b506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038416906323b872dd90606401602060405180830381600087803b1580156102fb57600080fd5b505af115801561030f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103339190610582565b505b60405163095ea7b360e01b815273a5e0829caced8ffdd4de3c43696c57f7d7a678ff6004820152602481018390526001600160a01b0385169063095ea7b390604401602060405180830381600087803b15801561039157600080fd5b505af11580156103a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c99190610582565b5060405163095ea7b360e01b815273a5e0829caced8ffdd4de3c43696c57f7d7a678ff6004820152602481018290526001600160a01b0384169063095ea7b390604401602060405180830381600087803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045e9190610582565b5060405162e8e33760e81b81526001600160a01b03808616600483015284166024820152604481018390526064810182905260016084820181905260a48201523060c48201524260e482015273a5e0829caced8ffdd4de3c43696c57f7d7a678ff9063e8e337009061010401606060405180830381600087803b1580156104e457600080fd5b505af11580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c91906105a9565b50505050505050565b80356001600160a01b038116811461053c57600080fd5b919050565b60008060008060808587031215610556578384fd5b61055f85610525565b935061056d60208601610525565b93969395505050506040820135916060013590565b600060208284031215610593578081fd5b815180151581146105a2578182fd5b9392505050565b6000806000606084860312156105bd578283fd5b835192506020840151915060408401519050925092509256fea26469706673582212203e7df16389f384f2e47b9fae9bcdbf13c62247d28ba3504aa97cef21bb890a5964736f6c63430008040033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c80632dd310001461004457806332fe7b261461008857806377531866146100b0578063ad5c4648146100c5575b600080fd5b34801561005057600080fd5b5061006c735757371414417b8c6caad45baef941abc7d3ab3281565b6040516001600160a01b03909116815260200160405180910390f35b34801561009457600080fd5b5061006c73a5e0829caced8ffdd4de3c43696c57f7d7a678ff81565b6100c36100be366004610541565b6100f9565b005b3480156100d157600080fd5b5061006c7f000000000000000000000000000000000000000000000000000000000000000081565b3415610226577f000000000000000000000000000000000000000000000000000000000000000093503491507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561018057600080fd5b505af1158015610194573d6000803e3d6000fd5b50506040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03871693506323b872dd92506064019050602060405180830381600087803b1580156101e857600080fd5b505af11580156101fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102209190610582565b50610335565b6040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b038516906323b872dd90606401602060405180830381600087803b15801561027457600080fd5b505af1158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190610582565b506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038416906323b872dd90606401602060405180830381600087803b1580156102fb57600080fd5b505af115801561030f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103339190610582565b505b60405163095ea7b360e01b815273a5e0829caced8ffdd4de3c43696c57f7d7a678ff6004820152602481018390526001600160a01b0385169063095ea7b390604401602060405180830381600087803b15801561039157600080fd5b505af11580156103a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c99190610582565b5060405163095ea7b360e01b815273a5e0829caced8ffdd4de3c43696c57f7d7a678ff6004820152602481018290526001600160a01b0384169063095ea7b390604401602060405180830381600087803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045e9190610582565b5060405162e8e33760e81b81526001600160a01b03808616600483015284166024820152604481018390526064810182905260016084820181905260a48201523060c48201524260e482015273a5e0829caced8ffdd4de3c43696c57f7d7a678ff9063e8e337009061010401606060405180830381600087803b1580156104e457600080fd5b505af11580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c91906105a9565b50505050505050565b80356001600160a01b038116811461053c57600080fd5b919050565b60008060008060808587031215610556578384fd5b61055f85610525565b935061056d60208601610525565b93969395505050506040820135916060013590565b600060208284031215610593578081fd5b815180151581146105a2578182fd5b9392505050565b6000806000606084860312156105bd578283fd5b835192506020840151915060408401519050925092509256fea26469706673582212203e7df16389f384f2e47b9fae9bcdbf13c62247d28ba3504aa97cef21bb890a5964736f6c63430008040033",
  "immutableReferences": {
    "88": [
      {
        "length": 32,
        "start": 215
      },
      {
        "length": 32,
        "start": 257
      },
      {
        "length": 32,
        "start": 295
      }
    ]
  },
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:326:2",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:2",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "95:229:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "141:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "150:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "158:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "143:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "143:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "143:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "116:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "125:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "112:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "112:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "137:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "108:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "108:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "105:2:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "176:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "195:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "189:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "189:16:2"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "180:5:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "268:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "277:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "285:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "270:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "270:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "270:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "227:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "238:5:2"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "253:3:2",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "258:1:2",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "249:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "249:11:2"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "262:1:2",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "245:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "245:19:2"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "234:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "234:31:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "224:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "224:42:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "217:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "217:50:2"
                  },
                  "nodeType": "YulIf",
                  "src": "214:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "303:15:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "313:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "303:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "61:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "72:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "84:6:2",
                "type": ""
              }
            ],
            "src": "14:310:2"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(value0, value0) }\n        value0 := value\n    }\n}",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:2856:2",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:2",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "63:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "73:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "95:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "82:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "82:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "73:5:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "165:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "174:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "177:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "167:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "167:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "167:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "124:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "135:5:2"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "150:3:2",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "155:1:2",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "146:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "146:11:2"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "159:1:2",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "142:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "142:19:2"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "131:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "131:31:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "121:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "121:42:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "114:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "114:50:2"
                  },
                  "nodeType": "YulIf",
                  "src": "111:2:2"
                }
              ]
            },
            "name": "abi_decode_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "42:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "53:5:2",
                "type": ""
              }
            ],
            "src": "14:173:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "313:286:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "360:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "369:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "377:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "362:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "362:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "362:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "334:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "343:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "330:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "330:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "355:3:2",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "326:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "326:33:2"
                  },
                  "nodeType": "YulIf",
                  "src": "323:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "395:39:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "424:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "405:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "405:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "395:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "443:48:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "476:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "487:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "472:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "472:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "453:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "453:38:2"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "443:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "500:42:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "527:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "538:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "523:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "523:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "510:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "510:32:2"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "500:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "551:42:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "578:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "589:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "574:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "574:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "561:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "561:32:2"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "551:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "255:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "266:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "278:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "286:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "294:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "302:6:2",
                "type": ""
              }
            ],
            "src": "192:407:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "682:219:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "728:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "737:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "745:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "730:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "730:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "730:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "703:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "712:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "699:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "699:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "724:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "695:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "695:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "692:2:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "763:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "782:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "776:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "776:16:2"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "767:5:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "845:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "854:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "862:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "847:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "847:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "847:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "814:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "835:5:2"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "828:6:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "828:13:2"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "821:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "821:21:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "811:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "811:32:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "804:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "804:40:2"
                  },
                  "nodeType": "YulIf",
                  "src": "801:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "880:15:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "890:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "880:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "648:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "659:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "671:6:2",
                "type": ""
              }
            ],
            "src": "604:297:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1021:201:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1067:26:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1076:6:2"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1084:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1069:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1069:22:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1069:22:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1042:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1051:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1038:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1038:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1063:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1034:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1034:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1031:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1102:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1118:9:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1112:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1112:16:2"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1102:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1137:35:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1157:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1168:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1153:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1153:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1147:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1147:25:2"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1137:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1181:35:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1201:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1212:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1197:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1197:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1191:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1191:25:2"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1181:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "971:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "982:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "994:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1002:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1010:6:2",
                "type": ""
              }
            ],
            "src": "906:316:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1328:102:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1338:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1350:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1361:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1346:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1346:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1338:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1380:9:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1395:6:2"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1411:3:2",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1416:1:2",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "1407:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1407:11:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1420:1:2",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1403:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1403:19:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1391:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1391:32:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1373:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1373:51:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1373:51:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1297:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1308:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1319:4:2",
                "type": ""
              }
            ],
            "src": "1227:203:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1592:218:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1602:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1614:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1625:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1610:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1610:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1602:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1637:29:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1655:3:2",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1660:1:2",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1651:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1651:11:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1664:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "1647:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1647:19:2"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "1641:2:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1682:9:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1697:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1705:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1693:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1693:15:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1675:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1675:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1675:34:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1729:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1740:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1725:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1725:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1749:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1757:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1745:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1745:15:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1718:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1718:43:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1718:43:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1781:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1792:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1777:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1777:18:2"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "1797:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1770:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1770:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1770:34:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1545:9:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1556:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1564:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1572:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1583:4:2",
                "type": ""
              }
            ],
            "src": "1435:375:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2128:447:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2138:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2150:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2161:3:2",
                        "type": "",
                        "value": "256"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2146:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2146:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2138:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2174:29:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2192:3:2",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2197:1:2",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "2188:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2188:11:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2201:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "2184:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2184:19:2"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2178:2:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2219:9:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2234:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "2242:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2230:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2230:15:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2212:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2212:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2212:34:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2266:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2277:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2262:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2262:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "2286:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "2294:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2282:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2282:15:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2255:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2255:43:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2255:43:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2318:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2329:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2314:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2314:18:2"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2334:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2307:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2307:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2307:34:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2361:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2372:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2357:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2357:18:2"
                      },
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "2377:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2350:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2350:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2350:34:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2404:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2415:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2400:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2400:19:2"
                      },
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "2421:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2393:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2393:35:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2393:35:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2448:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2459:3:2",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2444:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2444:19:2"
                      },
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "2465:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2437:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2437:35:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2437:35:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2492:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2503:3:2",
                            "type": "",
                            "value": "192"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2488:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2488:19:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value6",
                            "nodeType": "YulIdentifier",
                            "src": "2513:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "2521:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2509:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2509:15:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2481:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2481:44:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2481:44:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2545:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2556:3:2",
                            "type": "",
                            "value": "224"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2541:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2541:19:2"
                      },
                      {
                        "name": "value7",
                        "nodeType": "YulIdentifier",
                        "src": "2562:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2534:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2534:35:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2534:35:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_uint256_t_rational_1_by_1_t_rational_1_by_1_t_address_t_uint256__to_t_address_t_address_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2041:9:2",
                "type": ""
              },
              {
                "name": "value7",
                "nodeType": "YulTypedName",
                "src": "2052:6:2",
                "type": ""
              },
              {
                "name": "value6",
                "nodeType": "YulTypedName",
                "src": "2060:6:2",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "2068:6:2",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "2076:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2084:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2092:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2100:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2108:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2119:4:2",
                "type": ""
              }
            ],
            "src": "1815:760:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2709:145:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2719:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2731:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2742:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2727:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2727:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2719:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2761:9:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2776:6:2"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2792:3:2",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2797:1:2",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2788:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2788:11:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2801:1:2",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2784:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2784:19:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2772:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2772:32:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2754:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2754:51:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2754:51:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2825:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2836:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2821:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2821:18:2"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2841:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2814:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2814:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2814:34:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2670:9:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2681:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2689:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2700:4:2",
                "type": ""
              }
            ],
            "src": "2580:274:2"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(value0, value0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(value0, value0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_uint256t_uint256t_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(value0, value0) }\n        value0 := mload(headStart)\n        value1 := mload(add(headStart, 32))\n        value2 := mload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_uint256_t_rational_1_by_1_t_rational_1_by_1_t_address_t_uint256__to_t_address_t_address_t_uint256_t_uint256_t_uint256_t_uint256_t_address_t_uint256__fromStack_reversed(headStart, value7, value6, value5, value4, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 256)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), value3)\n        mstore(add(headStart, 128), value4)\n        mstore(add(headStart, 160), value5)\n        mstore(add(headStart, 192), and(value6, _1))\n        mstore(add(headStart, 224), value7)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n}",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "115:1306:1:-:0;;;376:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;416:15;;-1:-1:-1;;;;;;416:15:1;;;115:1306;;14:310:2;84:6;137:2;125:9;116:7;112:23;108:32;105:2;;;158:6;150;143:22;105:2;189:16;;-1:-1:-1;;;;;234:31:2;;224:42;;214:2;;285:6;277;270:22;214:2;313:5;95:229;-1:-1:-1;;;95:229:2:o;:::-;115:1306:1;;;;;;;;;;;;",
  "deployedSourceMap": "115:1306:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;142:76;;;;;;;;;;;;176:42;142:76;;;;;-1:-1:-1;;;;;1391:32:2;;;1373:51;;1361:2;1346:18;142:76:1;;;;;;;237:75;;;;;;;;;;;;270:42;237:75;;444:975;;;;;;:::i;:::-;;:::i;:::-;;340:29;;;;;;;;;;;;;;;444:975;604:9;:13;601:530;;643:4;633:14;;672:9;661:20;;703:4;-1:-1:-1;;;;;696:20:1;;724:9;696:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;827:65:1;;-1:-1:-1;;;827:65:1;;856:10;827:65;;;1675:34:2;876:4:1;1725:18:2;;;1718:43;1777:18;;;1770:34;;;-1:-1:-1;;;;;827:28:1;;;-1:-1:-1;827:28:1;;-1:-1:-1;1610:18:2;;;-1:-1:-1;827:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;601:530;;;976:65;;-1:-1:-1;;;976:65:1;;1005:10;976:65;;;1675:34:2;1025:4:1;1725:18:2;;;1718:43;1777:18;;;1770:34;;;-1:-1:-1;;;;;976:28:1;;;;;1610:18:2;;976:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1055:65:1;;-1:-1:-1;;;1055:65:1;;1084:10;1055:65;;;1675:34:2;1104:4:1;1725:18:2;;;1718:43;1777:18;;;1770:34;;;-1:-1:-1;;;;;1055:28:1;;;;;1610:18:2;;1055:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;601:530;1171:41;;-1:-1:-1;;;1171:41:1;;270:42;1171:41;;;2754:51:2;2821:18;;;2814:34;;;-1:-1:-1;;;;;1171:23:1;;;;;2727:18:2;;1171:41:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1222:41:1;;-1:-1:-1;;;1222:41:1;;270:42;1222:41;;;2754:51:2;2821:18;;;2814:34;;;-1:-1:-1;;;;;1222:23:1;;;;;2727:18:2;;1222:41:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1299:113:1;;-1:-1:-1;;;1299:113:1;;-1:-1:-1;;;;;2230:15:2;;;1299:113:1;;;2212:34:2;2282:15;;2262:18;;;2255:43;2314:18;;;2307:34;;;2357:18;;;2350:34;;;1375:1:1;2400:19:2;;;2393:35;;;2444:19;;;2437:35;1389:4:1;2488:19:2;;;2481:44;1396:15:1;2541:19:2;;;2534:35;270:42:1;;1299:37;;2146:19:2;;1299:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;444:975;;;;:::o;14:173:2:-;82:20;;-1:-1:-1;;;;;131:31:2;;121:42;;111:2;;177:1;174;167:12;111:2;63:124;;;:::o;192:407::-;278:6;286;294;302;355:3;343:9;334:7;330:23;326:33;323:2;;;377:6;369;362:22;323:2;405:29;424:9;405:29;:::i;:::-;395:39;;453:38;487:2;476:9;472:18;453:38;:::i;:::-;313:286;;443:48;;-1:-1:-1;;;;538:2:2;523:18;;510:32;;589:2;574:18;561:32;;313:286::o;604:297::-;671:6;724:2;712:9;703:7;699:23;695:32;692:2;;;745:6;737;730:22;692:2;782:9;776:16;835:5;828:13;821:21;814:5;811:32;801:2;;862:6;854;847:22;801:2;890:5;682:219;-1:-1:-1;;;682:219:2:o;906:316::-;994:6;1002;1010;1063:2;1051:9;1042:7;1038:23;1034:32;1031:2;;;1084:6;1076;1069:22;1031:2;1118:9;1112:16;1102:26;;1168:2;1157:9;1153:18;1147:25;1137:35;;1212:2;1201:9;1197:18;1191:25;1181:35;;1021:201;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.4;\n\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\n\ncontract V2Forwarder {\n    address public constant FACTORY = 0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32; // quickswap\n    address public constant ROUTER = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff;  // quickswap as well\n    address public immutable WETH;\n\n    constructor(address _wrapper) {\n        WETH = _wrapper;\n    }\n\n    function fund(address _tokenA, address _tokenB, uint _amountA, uint _amountB) external payable {\n        // wrap if received network native currency\n        if(msg.value > 0) {\n            _tokenA = WETH;\n            _amountA = msg.value;\n\n            IWeth9(WETH).deposit{value: msg.value}();\n\n            // transfer tokenB to this contract, as tokenA is already there\n            IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);\n        } else {\n            // transfer both tokens to this contract\n            IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);\n            IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);\n        }\n\n        // approve the router\n        IERC20(_tokenA).approve(ROUTER, _amountA);\n        IERC20(_tokenB).approve(ROUTER, _amountB);\n\n        // add liquidity\n        IUniswapV2Router(ROUTER).addLiquidity(_tokenA, _tokenB, _amountA, _amountB, 1, 1, address(this), block.timestamp);\n    }\n}\n\ninterface IUniswapV2Router {\n    function addLiquidity(\n        address tokenA,\n        address tokenB,\n        uint amountADesired,\n        uint amountBDesired,\n        uint amountAMin,\n        uint amountBMin,\n        address to,\n        uint deadline\n    ) external returns (uint amountA, uint amountB, uint liquidity);\n}\n\ninterface IUniswapV2Factory {\n    function getPair(address token0, address token1) external view returns (address);\n}\n\ninterface IWeth9 {\n    function deposit() external payable;\n}",
  "sourcePath": "/home/franz/Dokumente/blockchain-projects/uniswapv2-pool-funding/contracts/V2Forwarder.sol",
  "ast": {
    "absolutePath": "project:/contracts/V2Forwarder.sol",
    "exportedSymbols": {
      "IERC20": [
        77
      ],
      "IUniswapV2Factory": [
        245
      ],
      "IUniswapV2Router": [
        235
      ],
      "IWeth9": [
        249
      ],
      "V2Forwarder": [
        209
      ]
    },
    "id": 250,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 79,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 80,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 250,
        "sourceUnit": 78,
        "src": "57:56:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 209,
        "linearizedBaseContracts": [
          209
        ],
        "name": "V2Forwarder",
        "nameLocation": "124:11:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "2dd31000",
            "id": 83,
            "mutability": "constant",
            "name": "FACTORY",
            "nameLocation": "166:7:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "142:76:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 81,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "142:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307835373537333731343134343137623843364341616434356241654639343161426337643341623332",
              "id": 82,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "176:42:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "functionSelector": "32fe7b26",
            "id": 86,
            "mutability": "constant",
            "name": "ROUTER",
            "nameLocation": "261:6:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "237:75:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 84,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "237:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307861354530383239436143456438664644443444653363343336393663353746374437413637386666",
              "id": 85,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "270:42:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "ad5c4648",
            "id": 88,
            "mutability": "immutable",
            "name": "WETH",
            "nameLocation": "365:4:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "340:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 87,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "340:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "406:32:1",
              "statements": [
                {
                  "expression": {
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 93,
                      "name": "WETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "416:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 94,
                      "name": "_wrapper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "423:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "416:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "416:15:1"
                }
              ]
            },
            "id": 98,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "_wrapper",
                  "nameLocation": "396:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "388:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "387:18:1"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:0:1"
            },
            "scope": 209,
            "src": "376:62:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 207,
              "nodeType": "Block",
              "src": "539:880:1",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 109,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "604:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "604:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "616:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "604:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 171,
                    "nodeType": "Block",
                    "src": "909:222:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 149,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1005:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1005:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 153,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1025:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1017:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 151,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1017:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 154,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1017:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 155,
                              "name": "_amountA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 104,
                              "src": "1032:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 146,
                                  "name": "_tokenA",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 100,
                                  "src": "983:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 145,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "976:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 147,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "976:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 148,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "976:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "976:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 157,
                        "nodeType": "ExpressionStatement",
                        "src": "976:65:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 162,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1084:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1084:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 166,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1104:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 165,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1096:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 164,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1096:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 167,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1096:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 168,
                              "name": "_amountB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "1111:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 159,
                                  "name": "_tokenB",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 102,
                                  "src": "1062:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 158,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "1055:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1055:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "1055:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1055:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 170,
                        "nodeType": "ExpressionStatement",
                        "src": "1055:65:1"
                      }
                    ]
                  },
                  "id": 172,
                  "nodeType": "IfStatement",
                  "src": "601:530:1",
                  "trueBody": {
                    "id": 144,
                    "nodeType": "Block",
                    "src": "619:284:1",
                    "statements": [
                      {
                        "expression": {
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 113,
                            "name": "_tokenA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "633:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 114,
                            "name": "WETH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "643:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "633:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 116,
                        "nodeType": "ExpressionStatement",
                        "src": "633:14:1"
                      },
                      {
                        "expression": {
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 117,
                            "name": "_amountA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 104,
                            "src": "661:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "id": 118,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "672:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "672:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "661:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 121,
                        "nodeType": "ExpressionStatement",
                        "src": "661:20:1"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 123,
                                    "name": "WETH",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 88,
                                    "src": "703:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 122,
                                  "name": "IWeth9",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "696:6:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IWeth9_$249_$",
                                    "typeString": "type(contract IWeth9)"
                                  }
                                },
                                "id": 124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "696:12:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IWeth9_$249",
                                  "typeString": "contract IWeth9"
                                }
                              },
                              "id": 125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 248,
                              "src": "696:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_payable$__$returns$__$",
                                "typeString": "function () payable external"
                              }
                            },
                            "id": 128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "names": [
                              "value"
                            ],
                            "nodeType": "FunctionCallOptions",
                            "options": [
                              {
                                "expression": {
                                  "id": 126,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "724:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 127,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "src": "724:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "src": "696:38:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_payable$__$returns$__$value",
                              "typeString": "function () payable external"
                            }
                          },
                          "id": 129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "696:40:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 130,
                        "nodeType": "ExpressionStatement",
                        "src": "696:40:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 135,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "856:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 136,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "856:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 139,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "876:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 138,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "868:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 137,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "868:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "868:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 141,
                              "name": "_amountB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "883:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 132,
                                  "name": "_tokenB",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 102,
                                  "src": "834:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 131,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "827:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 133,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "827:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "827:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "827:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 143,
                        "nodeType": "ExpressionStatement",
                        "src": "827:65:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 177,
                        "name": "ROUTER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1195:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 178,
                        "name": "_amountA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1203:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 174,
                            "name": "_tokenA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "1178:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 173,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "1171:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1171:15:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46,
                      "src": "1171:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1171:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "1171:41:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 185,
                        "name": "ROUTER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1246:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 186,
                        "name": "_amountB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1254:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 182,
                            "name": "_tokenB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 102,
                            "src": "1229:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 181,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "1222:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1222:15:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46,
                      "src": "1222:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1222:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 188,
                  "nodeType": "ExpressionStatement",
                  "src": "1222:41:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 193,
                        "name": "_tokenA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "1337:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 194,
                        "name": "_tokenB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "1346:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 195,
                        "name": "_amountA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1355:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 196,
                        "name": "_amountB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1365:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1375:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "hexValue": "31",
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1378:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "arguments": [
                          {
                            "id": 201,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1389:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_V2Forwarder_$209",
                              "typeString": "contract V2Forwarder"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_V2Forwarder_$209",
                              "typeString": "contract V2Forwarder"
                            }
                          ],
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1381:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 199,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1381:7:1",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1381:13:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 203,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "1396:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 204,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "1396:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 190,
                            "name": "ROUTER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 86,
                            "src": "1316:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 189,
                          "name": "IUniswapV2Router",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 235,
                          "src": "1299:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IUniswapV2Router_$235_$",
                            "typeString": "type(contract IUniswapV2Router)"
                          }
                        },
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1299:24:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IUniswapV2Router_$235",
                          "typeString": "contract IUniswapV2Router"
                        }
                      },
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addLiquidity",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 234,
                      "src": "1299:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,address,uint256,uint256,uint256,uint256,address,uint256) external returns (uint256,uint256,uint256)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1299:113:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "id": 206,
                  "nodeType": "ExpressionStatement",
                  "src": "1299:113:1"
                }
              ]
            },
            "functionSelector": "77531866",
            "id": 208,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fund",
            "nameLocation": "453:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "mutability": "mutable",
                  "name": "_tokenA",
                  "nameLocation": "466:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "458:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "458:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 102,
                  "mutability": "mutable",
                  "name": "_tokenB",
                  "nameLocation": "483:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "475:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "mutability": "mutable",
                  "name": "_amountA",
                  "nameLocation": "497:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "492:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "mutability": "mutable",
                  "name": "_amountB",
                  "nameLocation": "512:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "507:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "457:64:1"
            },
            "returnParameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "539:0:1"
            },
            "scope": 209,
            "src": "444:975:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "115:1306:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 235,
        "linearizedBaseContracts": [
          235
        ],
        "name": "IUniswapV2Router",
        "nameLocation": "1433:16:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "e8e33700",
            "id": 234,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "1465:12:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "mutability": "mutable",
                  "name": "tokenA",
                  "nameLocation": "1495:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1487:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1487:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 213,
                  "mutability": "mutable",
                  "name": "tokenB",
                  "nameLocation": "1519:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1511:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1511:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 215,
                  "mutability": "mutable",
                  "name": "amountADesired",
                  "nameLocation": "1540:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1535:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 214,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1535:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 217,
                  "mutability": "mutable",
                  "name": "amountBDesired",
                  "nameLocation": "1569:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1564:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 216,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1564:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "mutability": "mutable",
                  "name": "amountAMin",
                  "nameLocation": "1598:10:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1593:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "mutability": "mutable",
                  "name": "amountBMin",
                  "nameLocation": "1623:10:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1618:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 223,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1651:2:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1643:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 225,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1668:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1663:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 224,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1477:205:1"
            },
            "returnParameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 228,
                  "mutability": "mutable",
                  "name": "amountA",
                  "nameLocation": "1706:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1701:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 227,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 230,
                  "mutability": "mutable",
                  "name": "amountB",
                  "nameLocation": "1720:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1715:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 229,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 232,
                  "mutability": "mutable",
                  "name": "liquidity",
                  "nameLocation": "1734:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1729:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 231,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1700:44:1"
            },
            "scope": 235,
            "src": "1456:289:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1423:324:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 245,
        "linearizedBaseContracts": [
          245
        ],
        "name": "IUniswapV2Factory",
        "nameLocation": "1759:17:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "e6a43905",
            "id": 244,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getPair",
            "nameLocation": "1792:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 237,
                  "mutability": "mutable",
                  "name": "token0",
                  "nameLocation": "1808:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1800:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 236,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1800:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 239,
                  "mutability": "mutable",
                  "name": "token1",
                  "nameLocation": "1824:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1816:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1816:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1799:32:1"
            },
            "returnParameters": {
              "id": 243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 242,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1855:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1855:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1854:9:1"
            },
            "scope": 245,
            "src": "1783:81:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1749:117:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 249,
        "linearizedBaseContracts": [
          249
        ],
        "name": "IWeth9",
        "nameLocation": "1878:6:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "d0e30db0",
            "id": 248,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1900:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1907:2:1"
            },
            "returnParameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1926:0:1"
            },
            "scope": 249,
            "src": "1891:36:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1868:61:1",
        "usedErrors": []
      }
    ],
    "src": "32:1897:1"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/V2Forwarder.sol",
    "exportedSymbols": {
      "IERC20": [
        77
      ],
      "IUniswapV2Factory": [
        245
      ],
      "IUniswapV2Router": [
        235
      ],
      "IWeth9": [
        249
      ],
      "V2Forwarder": [
        209
      ]
    },
    "id": 250,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 79,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "id": 80,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 250,
        "sourceUnit": 78,
        "src": "57:56:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 209,
        "linearizedBaseContracts": [
          209
        ],
        "name": "V2Forwarder",
        "nameLocation": "124:11:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "2dd31000",
            "id": 83,
            "mutability": "constant",
            "name": "FACTORY",
            "nameLocation": "166:7:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "142:76:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 81,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "142:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307835373537333731343134343137623843364341616434356241654639343161426337643341623332",
              "id": 82,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "176:42:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "functionSelector": "32fe7b26",
            "id": 86,
            "mutability": "constant",
            "name": "ROUTER",
            "nameLocation": "261:6:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "237:75:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 84,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "237:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307861354530383239436143456438664644443444653363343336393663353746374437413637386666",
              "id": 85,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "270:42:1",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "ad5c4648",
            "id": 88,
            "mutability": "immutable",
            "name": "WETH",
            "nameLocation": "365:4:1",
            "nodeType": "VariableDeclaration",
            "scope": 209,
            "src": "340:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 87,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "340:7:1",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "406:32:1",
              "statements": [
                {
                  "expression": {
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 93,
                      "name": "WETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "416:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 94,
                      "name": "_wrapper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "423:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "416:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "416:15:1"
                }
              ]
            },
            "id": 98,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "_wrapper",
                  "nameLocation": "396:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "388:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "388:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "387:18:1"
            },
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:0:1"
            },
            "scope": 209,
            "src": "376:62:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 207,
              "nodeType": "Block",
              "src": "539:880:1",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 109,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "604:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "604:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "616:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "604:13:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 171,
                    "nodeType": "Block",
                    "src": "909:222:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 149,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1005:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1005:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 153,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1025:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1017:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 151,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1017:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 154,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1017:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 155,
                              "name": "_amountA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 104,
                              "src": "1032:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 146,
                                  "name": "_tokenA",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 100,
                                  "src": "983:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 145,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "976:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 147,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "976:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 148,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "976:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 156,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "976:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 157,
                        "nodeType": "ExpressionStatement",
                        "src": "976:65:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 162,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1084:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 163,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1084:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 166,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1104:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 165,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1096:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 164,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1096:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 167,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1096:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 168,
                              "name": "_amountB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "1111:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 159,
                                  "name": "_tokenB",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 102,
                                  "src": "1062:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 158,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "1055:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1055:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "1055:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1055:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 170,
                        "nodeType": "ExpressionStatement",
                        "src": "1055:65:1"
                      }
                    ]
                  },
                  "id": 172,
                  "nodeType": "IfStatement",
                  "src": "601:530:1",
                  "trueBody": {
                    "id": 144,
                    "nodeType": "Block",
                    "src": "619:284:1",
                    "statements": [
                      {
                        "expression": {
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 113,
                            "name": "_tokenA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "633:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 114,
                            "name": "WETH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "643:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "633:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 116,
                        "nodeType": "ExpressionStatement",
                        "src": "633:14:1"
                      },
                      {
                        "expression": {
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 117,
                            "name": "_amountA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 104,
                            "src": "661:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "id": 118,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "672:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "672:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "661:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 121,
                        "nodeType": "ExpressionStatement",
                        "src": "661:20:1"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 123,
                                    "name": "WETH",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 88,
                                    "src": "703:4:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 122,
                                  "name": "IWeth9",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 249,
                                  "src": "696:6:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IWeth9_$249_$",
                                    "typeString": "type(contract IWeth9)"
                                  }
                                },
                                "id": 124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "696:12:1",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IWeth9_$249",
                                  "typeString": "contract IWeth9"
                                }
                              },
                              "id": 125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 248,
                              "src": "696:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_payable$__$returns$__$",
                                "typeString": "function () payable external"
                              }
                            },
                            "id": 128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "names": [
                              "value"
                            ],
                            "nodeType": "FunctionCallOptions",
                            "options": [
                              {
                                "expression": {
                                  "id": 126,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "724:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 127,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "src": "724:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "src": "696:38:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_payable$__$returns$__$value",
                              "typeString": "function () payable external"
                            }
                          },
                          "id": 129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "696:40:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 130,
                        "nodeType": "ExpressionStatement",
                        "src": "696:40:1"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 135,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "856:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 136,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "856:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 139,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "876:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_V2Forwarder_$209",
                                    "typeString": "contract V2Forwarder"
                                  }
                                ],
                                "id": 138,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "868:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 137,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "868:7:1",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "868:13:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 141,
                              "name": "_amountB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 106,
                              "src": "883:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 132,
                                  "name": "_tokenB",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 102,
                                  "src": "834:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 131,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "827:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 133,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "827:15:1",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$77",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 58,
                            "src": "827:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "827:65:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 143,
                        "nodeType": "ExpressionStatement",
                        "src": "827:65:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 177,
                        "name": "ROUTER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1195:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 178,
                        "name": "_amountA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1203:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 174,
                            "name": "_tokenA",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "1178:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 173,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "1171:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1171:15:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46,
                      "src": "1171:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1171:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 180,
                  "nodeType": "ExpressionStatement",
                  "src": "1171:41:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 185,
                        "name": "ROUTER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1246:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 186,
                        "name": "_amountB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1254:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 182,
                            "name": "_tokenB",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 102,
                            "src": "1229:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 181,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 77,
                          "src": "1222:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1222:15:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$77",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46,
                      "src": "1222:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1222:41:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 188,
                  "nodeType": "ExpressionStatement",
                  "src": "1222:41:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 193,
                        "name": "_tokenA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "1337:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 194,
                        "name": "_tokenB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 102,
                        "src": "1346:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 195,
                        "name": "_amountA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "1355:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 196,
                        "name": "_amountB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "1365:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1375:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "hexValue": "31",
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1378:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "arguments": [
                          {
                            "id": 201,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1389:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_V2Forwarder_$209",
                              "typeString": "contract V2Forwarder"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_V2Forwarder_$209",
                              "typeString": "contract V2Forwarder"
                            }
                          ],
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1381:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 199,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1381:7:1",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1381:13:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 203,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "1396:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 204,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "1396:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 190,
                            "name": "ROUTER",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 86,
                            "src": "1316:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 189,
                          "name": "IUniswapV2Router",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 235,
                          "src": "1299:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IUniswapV2Router_$235_$",
                            "typeString": "type(contract IUniswapV2Router)"
                          }
                        },
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1299:24:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IUniswapV2Router_$235",
                          "typeString": "contract IUniswapV2Router"
                        }
                      },
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addLiquidity",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 234,
                      "src": "1299:37:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (address,address,uint256,uint256,uint256,uint256,address,uint256) external returns (uint256,uint256,uint256)"
                      }
                    },
                    "id": 205,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1299:113:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "id": 206,
                  "nodeType": "ExpressionStatement",
                  "src": "1299:113:1"
                }
              ]
            },
            "functionSelector": "77531866",
            "id": 208,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fund",
            "nameLocation": "453:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "mutability": "mutable",
                  "name": "_tokenA",
                  "nameLocation": "466:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "458:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "458:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 102,
                  "mutability": "mutable",
                  "name": "_tokenB",
                  "nameLocation": "483:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "475:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "475:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 104,
                  "mutability": "mutable",
                  "name": "_amountA",
                  "nameLocation": "497:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "492:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "mutability": "mutable",
                  "name": "_amountB",
                  "nameLocation": "512:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 208,
                  "src": "507:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "457:64:1"
            },
            "returnParameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "539:0:1"
            },
            "scope": 209,
            "src": "444:975:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "115:1306:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 235,
        "linearizedBaseContracts": [
          235
        ],
        "name": "IUniswapV2Router",
        "nameLocation": "1433:16:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "e8e33700",
            "id": 234,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "1465:12:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "mutability": "mutable",
                  "name": "tokenA",
                  "nameLocation": "1495:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1487:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1487:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 213,
                  "mutability": "mutable",
                  "name": "tokenB",
                  "nameLocation": "1519:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1511:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1511:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 215,
                  "mutability": "mutable",
                  "name": "amountADesired",
                  "nameLocation": "1540:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1535:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 214,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1535:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 217,
                  "mutability": "mutable",
                  "name": "amountBDesired",
                  "nameLocation": "1569:14:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1564:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 216,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1564:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 219,
                  "mutability": "mutable",
                  "name": "amountAMin",
                  "nameLocation": "1598:10:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1593:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 221,
                  "mutability": "mutable",
                  "name": "amountBMin",
                  "nameLocation": "1623:10:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1618:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 223,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1651:2:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1643:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 222,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 225,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "1668:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1663:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 224,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1477:205:1"
            },
            "returnParameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 228,
                  "mutability": "mutable",
                  "name": "amountA",
                  "nameLocation": "1706:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1701:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 227,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 230,
                  "mutability": "mutable",
                  "name": "amountB",
                  "nameLocation": "1720:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1715:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 229,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1715:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 232,
                  "mutability": "mutable",
                  "name": "liquidity",
                  "nameLocation": "1734:9:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 234,
                  "src": "1729:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 231,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1700:44:1"
            },
            "scope": 235,
            "src": "1456:289:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1423:324:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 245,
        "linearizedBaseContracts": [
          245
        ],
        "name": "IUniswapV2Factory",
        "nameLocation": "1759:17:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "e6a43905",
            "id": 244,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getPair",
            "nameLocation": "1792:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 237,
                  "mutability": "mutable",
                  "name": "token0",
                  "nameLocation": "1808:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1800:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 236,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1800:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 239,
                  "mutability": "mutable",
                  "name": "token1",
                  "nameLocation": "1824:6:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1816:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1816:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1799:32:1"
            },
            "returnParameters": {
              "id": 243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 242,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "1855:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1855:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1854:9:1"
            },
            "scope": 245,
            "src": "1783:81:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1749:117:1",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 249,
        "linearizedBaseContracts": [
          249
        ],
        "name": "IWeth9",
        "nameLocation": "1878:6:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "d0e30db0",
            "id": 248,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1900:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1907:2:1"
            },
            "returnParameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1926:0:1"
            },
            "scope": 249,
            "src": "1891:36:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 250,
        "src": "1868:61:1",
        "usedErrors": []
      }
    ],
    "src": "32:1897:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {},
      "links": {},
      "address": "0xE349dea207541FF16589553056e5dc827c85259A",
      "transactionHash": "0xe2d06a672e90dfeb1697699c81a1abfa6e973e690ca7463ba778fce79736c014"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-01-03T09:29:11.350Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
},{}],2:[function(require,module,exports){
module.exports={
  "contractName": "Nugget",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
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
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
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
      "type": "function",
      "constant": true
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
          "name": "account",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "getAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Nugget.sol\":\"Nugget\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x6bb804a310218875e89d12c053e94a13a4607cdf7cc2052f3e52bd32a0dc50a1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b2ebbbe6d0011175bd9e7268b83de3f9c2f9d8d4cbfbaef12aff977d7d727163\",\"dweb:/ipfs/Qmd5c7Vxtis9wzkDNhxwc6A2QT5H9xn9kfjhx7qx44vpro\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb03df8481a954604ad0c9125680893b2e3f7ff770fe470e38b89ac61b84e8072\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b34655953d18ba3a45b762fb6bdbb6549af69a27435e10ece178742bf70baf45\",\"dweb:/ipfs/QmcqjUoFLLMyx7dbwSHUnDBH6aphkVHXWQvQRRev5EAWEh\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x027b891937d20ccf213fdb9c31531574256de774bda99d3a70ecef6e1913ed2a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://087318b21c528119f649899f5b5580566dd8d7b0303d4904bd0e8580c3545f14\",\"dweb:/ipfs/Qmbn5Mj7aUn8hJuQ8VrQjjEXRsXyJKykgnjR9p4C3nfLtL\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x83fe24f5c04a56091e50f4a345ff504c8bff658a76d4c43b16878c8f940c53b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d4c3df1a7ca104b633a7d81c6c6f5192367d150cd5a32cba81f7f27012729013\",\"dweb:/ipfs/QmSim72e3ZVsfgZt8UceCvbiSuMRHR6WDsiamqNzZahGSY\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26e8b38a7ac8e7b4463af00cf7fff1bf48ae9875765bf4f7751e100124d0bc8c\",\"dweb:/ipfs/QmWcsmkVr24xmmjfnBQZoemFniXjj3vwT78Cz6uqZW1Hux\"]},\"project:/contracts/Nugget.sol\":{\"keccak256\":\"0x64b09a11eaa0d28c425e0b49d518fcd52bae9a411bc576b6e50b20a7e5d2df32\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://acbdfac86e87be1d801342466c6b91dc0592f26a4767ecd21529fcafaa77199d\",\"dweb:/ipfs/QmZT7Xk8JyFDtZpkqfNqeJZSWpYpooQhY1GR39xGWq7Vxc\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200208a3803806200208a833981810160405281019062000037919062000428565b6040518060400160405280600681526020017f4e756767657400000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f584e4700000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000361565b508060049080519060200190620000d492919062000361565b505050620000f7620000eb6200011060201b60201c565b6200011860201b60201c565b620001093382620001de60201b60201c565b506200061a565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000248906200048c565b60405180910390fd5b62000265600083836200035760201b60201c565b8060026000828254620002799190620004dc565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002d09190620004dc565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003379190620004ae565b60405180910390a362000353600083836200035c60201b60201c565b5050565b505050565b505050565b8280546200036f9062000543565b90600052602060002090601f016020900481019282620003935760008555620003df565b82601f10620003ae57805160ff1916838001178555620003df565b82800160010185558215620003df579182015b82811115620003de578251825591602001919060010190620003c1565b5b509050620003ee9190620003f2565b5090565b5b808211156200040d576000816000905550600101620003f3565b5090565b600081519050620004228162000600565b92915050565b6000602082840312156200043b57600080fd5b60006200044b8482850162000411565b91505092915050565b600062000463601f83620004cb565b91506200047082620005d7565b602082019050919050565b620004868162000539565b82525050565b60006020820190508181036000830152620004a78162000454565b9050919050565b6000602082019050620004c560008301846200047b565b92915050565b600082825260208201905092915050565b6000620004e98262000539565b9150620004f68362000539565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200052e576200052d62000579565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200055c57607f821691505b60208210811415620005735762000572620005a8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200060b8162000539565b81146200061757600080fd5b50565b611a60806200062a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d71461029f578063a9059cbb146102cf578063dd62ed3e146102ff578063f2fde38b1461032f57610100565b806370a0823114610229578063715018a6146102595780638da5cb5b1461026357806395d89b411461028157610100565b8063313ce567116100d3578063313ce567146101a157806338cc4831146101bf57806339509351146101dd57806340c10f191461020d57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61034b565b60405161011a91906113ff565b60405180910390f35b61013d600480360381019061013891906111ba565b6103dd565b60405161014a91906113e4565b60405180910390f35b61015b6103fb565b6040516101689190611561565b60405180910390f35b61018b6004803603810190610186919061116b565b610405565b60405161019891906113e4565b60405180910390f35b6101a96104fd565b6040516101b6919061157c565b60405180910390f35b6101c7610506565b6040516101d491906113c9565b60405180910390f35b6101f760048036038101906101f291906111ba565b61050e565b60405161020491906113e4565b60405180910390f35b610227600480360381019061022291906111ba565b6105ba565b005b610243600480360381019061023e9190611106565b610644565b6040516102509190611561565b60405180910390f35b61026161068c565b005b61026b610714565b60405161027891906113c9565b60405180910390f35b61028961073e565b60405161029691906113ff565b60405180910390f35b6102b960048036038101906102b491906111ba565b6107d0565b6040516102c691906113e4565b60405180910390f35b6102e960048036038101906102e491906111ba565b6108bb565b6040516102f691906113e4565b60405180910390f35b6103196004803603810190610314919061112f565b6108d9565b6040516103269190611561565b60405180910390f35b61034960048036038101906103449190611106565b610960565b005b60606003805461035a90611691565b80601f016020809104026020016040519081016040528092919081815260200182805461038690611691565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b60006103f16103ea610a58565b8484610a60565b6001905092915050565b6000600254905090565b6000610412848484610c2b565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045d610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d4906114a1565b60405180910390fd5b6104f1856104e9610a58565b858403610a60565b60019150509392505050565b60006012905090565b600030905090565b60006105b061051b610a58565b848460016000610529610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105ab91906115b3565b610a60565b6001905092915050565b6105c2610a58565b73ffffffffffffffffffffffffffffffffffffffff166105e0610714565b73ffffffffffffffffffffffffffffffffffffffff1614610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062d906114c1565b60405180910390fd5b6106408282610eac565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610694610a58565b73ffffffffffffffffffffffffffffffffffffffff166106b2610714565b73ffffffffffffffffffffffffffffffffffffffff1614610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff906114c1565b60405180910390fd5b610712600061100c565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461074d90611691565b80601f016020809104026020016040519081016040528092919081815260200182805461077990611691565b80156107c65780601f1061079b576101008083540402835291602001916107c6565b820191906000526020600020905b8154815290600101906020018083116107a957829003601f168201915b5050505050905090565b600080600160006107df610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561089c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089390611521565b60405180910390fd5b6108b06108a7610a58565b85858403610a60565b600191505092915050565b60006108cf6108c8610a58565b8484610c2b565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610968610a58565b73ffffffffffffffffffffffffffffffffffffffff16610986610714565b73ffffffffffffffffffffffffffffffffffffffff16146109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d3906114c1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4390611441565b60405180910390fd5b610a558161100c565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ad0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac790611501565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3790611461565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c1e9190611561565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c92906114e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0290611421565b60405180910390fd5b610d168383836110d2565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9390611481565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e2f91906115b3565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e939190611561565b60405180910390a3610ea68484846110d7565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1390611541565b60405180910390fd5b610f28600083836110d2565b8060026000828254610f3a91906115b3565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f8f91906115b3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ff49190611561565b60405180910390a3611008600083836110d7565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506110eb816119fc565b92915050565b60008135905061110081611a13565b92915050565b60006020828403121561111857600080fd5b6000611126848285016110dc565b91505092915050565b6000806040838503121561114257600080fd5b6000611150858286016110dc565b9250506020611161858286016110dc565b9150509250929050565b60008060006060848603121561118057600080fd5b600061118e868287016110dc565b935050602061119f868287016110dc565b92505060406111b0868287016110f1565b9150509250925092565b600080604083850312156111cd57600080fd5b60006111db858286016110dc565b92505060206111ec858286016110f1565b9150509250929050565b6111ff81611609565b82525050565b61120e8161161b565b82525050565b600061121f82611597565b61122981856115a2565b935061123981856020860161165e565b61124281611721565b840191505092915050565b600061125a6023836115a2565b915061126582611732565b604082019050919050565b600061127d6026836115a2565b915061128882611781565b604082019050919050565b60006112a06022836115a2565b91506112ab826117d0565b604082019050919050565b60006112c36026836115a2565b91506112ce8261181f565b604082019050919050565b60006112e66028836115a2565b91506112f18261186e565b604082019050919050565b60006113096020836115a2565b9150611314826118bd565b602082019050919050565b600061132c6025836115a2565b9150611337826118e6565b604082019050919050565b600061134f6024836115a2565b915061135a82611935565b604082019050919050565b60006113726025836115a2565b915061137d82611984565b604082019050919050565b6000611395601f836115a2565b91506113a0826119d3565b602082019050919050565b6113b481611647565b82525050565b6113c381611651565b82525050565b60006020820190506113de60008301846111f6565b92915050565b60006020820190506113f96000830184611205565b92915050565b600060208201905081810360008301526114198184611214565b905092915050565b6000602082019050818103600083015261143a8161124d565b9050919050565b6000602082019050818103600083015261145a81611270565b9050919050565b6000602082019050818103600083015261147a81611293565b9050919050565b6000602082019050818103600083015261149a816112b6565b9050919050565b600060208201905081810360008301526114ba816112d9565b9050919050565b600060208201905081810360008301526114da816112fc565b9050919050565b600060208201905081810360008301526114fa8161131f565b9050919050565b6000602082019050818103600083015261151a81611342565b9050919050565b6000602082019050818103600083015261153a81611365565b9050919050565b6000602082019050818103600083015261155a81611388565b9050919050565b600060208201905061157660008301846113ab565b92915050565b600060208201905061159160008301846113ba565b92915050565b600081519050919050565b600082825260208201905092915050565b60006115be82611647565b91506115c983611647565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115fe576115fd6116c3565b5b828201905092915050565b600061161482611627565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561167c578082015181840152602081019050611661565b8381111561168b576000848401525b50505050565b600060028204905060018216806116a957607f821691505b602082108114156116bd576116bc6116f2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a0581611609565b8114611a1057600080fd5b50565b611a1c81611647565b8114611a2757600080fd5b5056fea264697066735822122051699f58e2bd99ebb1304cafd8773af582f4be2751d5a9f6d9289b12d0ce514c64736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d71461029f578063a9059cbb146102cf578063dd62ed3e146102ff578063f2fde38b1461032f57610100565b806370a0823114610229578063715018a6146102595780638da5cb5b1461026357806395d89b411461028157610100565b8063313ce567116100d3578063313ce567146101a157806338cc4831146101bf57806339509351146101dd57806340c10f191461020d57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61034b565b60405161011a91906113ff565b60405180910390f35b61013d600480360381019061013891906111ba565b6103dd565b60405161014a91906113e4565b60405180910390f35b61015b6103fb565b6040516101689190611561565b60405180910390f35b61018b6004803603810190610186919061116b565b610405565b60405161019891906113e4565b60405180910390f35b6101a96104fd565b6040516101b6919061157c565b60405180910390f35b6101c7610506565b6040516101d491906113c9565b60405180910390f35b6101f760048036038101906101f291906111ba565b61050e565b60405161020491906113e4565b60405180910390f35b610227600480360381019061022291906111ba565b6105ba565b005b610243600480360381019061023e9190611106565b610644565b6040516102509190611561565b60405180910390f35b61026161068c565b005b61026b610714565b60405161027891906113c9565b60405180910390f35b61028961073e565b60405161029691906113ff565b60405180910390f35b6102b960048036038101906102b491906111ba565b6107d0565b6040516102c691906113e4565b60405180910390f35b6102e960048036038101906102e491906111ba565b6108bb565b6040516102f691906113e4565b60405180910390f35b6103196004803603810190610314919061112f565b6108d9565b6040516103269190611561565b60405180910390f35b61034960048036038101906103449190611106565b610960565b005b60606003805461035a90611691565b80601f016020809104026020016040519081016040528092919081815260200182805461038690611691565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b60006103f16103ea610a58565b8484610a60565b6001905092915050565b6000600254905090565b6000610412848484610c2b565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061045d610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d4906114a1565b60405180910390fd5b6104f1856104e9610a58565b858403610a60565b60019150509392505050565b60006012905090565b600030905090565b60006105b061051b610a58565b848460016000610529610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105ab91906115b3565b610a60565b6001905092915050565b6105c2610a58565b73ffffffffffffffffffffffffffffffffffffffff166105e0610714565b73ffffffffffffffffffffffffffffffffffffffff1614610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062d906114c1565b60405180910390fd5b6106408282610eac565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610694610a58565b73ffffffffffffffffffffffffffffffffffffffff166106b2610714565b73ffffffffffffffffffffffffffffffffffffffff1614610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff906114c1565b60405180910390fd5b610712600061100c565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461074d90611691565b80601f016020809104026020016040519081016040528092919081815260200182805461077990611691565b80156107c65780601f1061079b576101008083540402835291602001916107c6565b820191906000526020600020905b8154815290600101906020018083116107a957829003601f168201915b5050505050905090565b600080600160006107df610a58565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561089c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089390611521565b60405180910390fd5b6108b06108a7610a58565b85858403610a60565b600191505092915050565b60006108cf6108c8610a58565b8484610c2b565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610968610a58565b73ffffffffffffffffffffffffffffffffffffffff16610986610714565b73ffffffffffffffffffffffffffffffffffffffff16146109dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d3906114c1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4390611441565b60405180910390fd5b610a558161100c565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ad0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac790611501565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3790611461565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c1e9190611561565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c92906114e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0290611421565b60405180910390fd5b610d168383836110d2565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9390611481565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e2f91906115b3565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e939190611561565b60405180910390a3610ea68484846110d7565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1390611541565b60405180910390fd5b610f28600083836110d2565b8060026000828254610f3a91906115b3565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f8f91906115b3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ff49190611561565b60405180910390a3611008600083836110d7565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506110eb816119fc565b92915050565b60008135905061110081611a13565b92915050565b60006020828403121561111857600080fd5b6000611126848285016110dc565b91505092915050565b6000806040838503121561114257600080fd5b6000611150858286016110dc565b9250506020611161858286016110dc565b9150509250929050565b60008060006060848603121561118057600080fd5b600061118e868287016110dc565b935050602061119f868287016110dc565b92505060406111b0868287016110f1565b9150509250925092565b600080604083850312156111cd57600080fd5b60006111db858286016110dc565b92505060206111ec858286016110f1565b9150509250929050565b6111ff81611609565b82525050565b61120e8161161b565b82525050565b600061121f82611597565b61122981856115a2565b935061123981856020860161165e565b61124281611721565b840191505092915050565b600061125a6023836115a2565b915061126582611732565b604082019050919050565b600061127d6026836115a2565b915061128882611781565b604082019050919050565b60006112a06022836115a2565b91506112ab826117d0565b604082019050919050565b60006112c36026836115a2565b91506112ce8261181f565b604082019050919050565b60006112e66028836115a2565b91506112f18261186e565b604082019050919050565b60006113096020836115a2565b9150611314826118bd565b602082019050919050565b600061132c6025836115a2565b9150611337826118e6565b604082019050919050565b600061134f6024836115a2565b915061135a82611935565b604082019050919050565b60006113726025836115a2565b915061137d82611984565b604082019050919050565b6000611395601f836115a2565b91506113a0826119d3565b602082019050919050565b6113b481611647565b82525050565b6113c381611651565b82525050565b60006020820190506113de60008301846111f6565b92915050565b60006020820190506113f96000830184611205565b92915050565b600060208201905081810360008301526114198184611214565b905092915050565b6000602082019050818103600083015261143a8161124d565b9050919050565b6000602082019050818103600083015261145a81611270565b9050919050565b6000602082019050818103600083015261147a81611293565b9050919050565b6000602082019050818103600083015261149a816112b6565b9050919050565b600060208201905081810360008301526114ba816112d9565b9050919050565b600060208201905081810360008301526114da816112fc565b9050919050565b600060208201905081810360008301526114fa8161131f565b9050919050565b6000602082019050818103600083015261151a81611342565b9050919050565b6000602082019050818103600083015261153a81611365565b9050919050565b6000602082019050818103600083015261155a81611388565b9050919050565b600060208201905061157660008301846113ab565b92915050565b600060208201905061159160008301846113ba565b92915050565b600081519050919050565b600082825260208201905092915050565b60006115be82611647565b91506115c983611647565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115fe576115fd6116c3565b5b828201905092915050565b600061161482611627565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561167c578082015181840152602081019050611661565b8381111561168b576000848401525b50505050565b600060028204905060018216806116a957607f821691505b602082108114156116bd576116bc6116f2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a0581611609565b8114611a1057600080fd5b50565b611a1c81611647565b8114611a2757600080fd5b5056fea264697066735822122051699f58e2bd99ebb1304cafd8773af582f4be2751d5a9f6d9289b12d0ce514c64736f6c63430008040033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3174:13",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "70:80:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "80:22:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "95:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "89:5:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "89:13:13"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "80:5:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "138:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "111:26:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "111:33:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "111:33:13"
                }
              ]
            },
            "name": "abi_decode_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "48:6:13",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "56:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "64:5:13",
                "type": ""
              }
            ],
            "src": "7:143:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "233:207:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "279:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "288:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "291:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "281:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "281:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "281:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "254:7:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "263:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "250:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "250:23:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "275:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "246:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "246:32:13"
                  },
                  "nodeType": "YulIf",
                  "src": "243:2:13"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "305:128:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "320:15:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "334:1:13",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "324:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "349:74:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "395:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "406:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "391:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "391:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "415:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "359:31:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "359:64:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "349:6:13"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "203:9:13",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "214:7:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "226:6:13",
                "type": ""
              }
            ],
            "src": "156:284:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "592:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "602:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "668:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "673:2:13",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "609:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "609:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "602:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "774:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                      "nodeType": "YulIdentifier",
                      "src": "685:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "685:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "685:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "787:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "798:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "803:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "794:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "794:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "787:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "580:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "588:3:13",
                "type": ""
              }
            ],
            "src": "446:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "883:53:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "900:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "923:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "905:17:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "905:24:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "893:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "893:37:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "893:37:13"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "871:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "878:3:13",
                "type": ""
              }
            ],
            "src": "818:118:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1113:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1123:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1135:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1146:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1131:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1131:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1123:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1170:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1181:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1166:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1166:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1189:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1195:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1185:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1185:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1159:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1159:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1159:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1215:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1349:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1223:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1223:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1215:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1093:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1108:4:13",
                "type": ""
              }
            ],
            "src": "942:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1465:124:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1475:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1487:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1498:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1483:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1483:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1475:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1555:6:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1568:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1579:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1564:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1564:17:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1511:43:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1511:71:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1511:71:13"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1437:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1449:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1460:4:13",
                "type": ""
              }
            ],
            "src": "1367:222:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1691:73:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1708:3:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1713:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1701:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1701:19:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1701:19:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1729:29:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1748:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1753:4:13",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1744:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1744:14:13"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1729:11:13"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1663:3:13",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1668:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1679:11:13",
                "type": ""
              }
            ],
            "src": "1595:169:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1814:261:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1824:25:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "1847:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1829:17:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1829:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "1824:1:13"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1858:25:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "1881:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1863:17:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1863:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "1858:1:13"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2021:22:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "2023:16:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2023:18:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2023:18:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "1942:1:13"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1949:66:13",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2017:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1945:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1945:74:13"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1939:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1939:81:13"
                  },
                  "nodeType": "YulIf",
                  "src": "1936:2:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2053:16:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "2064:1:13"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "2067:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2060:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2060:9:13"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "2053:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "1801:1:13",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "1804:1:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "1810:3:13",
                "type": ""
              }
            ],
            "src": "1770:305:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2126:32:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2136:16:13",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2147:5:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2136:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2108:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2118:7:13",
                "type": ""
              }
            ],
            "src": "2081:77:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2215:269:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2225:22:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2239:4:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2245:1:13",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "2235:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2235:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "2225:6:13"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2256:38:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2286:4:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2292:1:13",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2282:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2282:12:13"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "2260:18:13",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2333:51:13",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2347:27:13",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2361:6:13"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2369:4:13",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2357:3:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2357:17:13"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2347:6:13"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2313:18:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2306:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2306:26:13"
                  },
                  "nodeType": "YulIf",
                  "src": "2303:2:13"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2436:42:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "2450:16:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2450:18:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2450:18:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2400:18:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2423:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2431:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2420:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2420:14:13"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "2397:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2397:38:13"
                  },
                  "nodeType": "YulIf",
                  "src": "2394:2:13"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2199:4:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2208:6:13",
                "type": ""
              }
            ],
            "src": "2164:320:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2518:152:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2535:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2538:77:13",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2528:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2528:88:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2528:88:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2632:1:13",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2635:4:13",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2625:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2625:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2625:15:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2656:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2659:4:13",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2649:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2649:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2649:15:13"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "2490:180:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2704:152:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2721:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2724:77:13",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2714:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2714:88:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2714:88:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2818:1:13",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2821:4:13",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2811:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2811:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2811:15:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2842:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2845:4:13",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2835:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2835:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2835:15:13"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "2676:180:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2968:75:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2990:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2998:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2986:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2986:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3002:33:13",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2979:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2979:57:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2979:57:13"
                }
              ]
            },
            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "2960:6:13",
                "type": ""
              }
            ],
            "src": "2862:181:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3092:79:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3149:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3158:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3161:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3151:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3151:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3151:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3115:5:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3140:5:13"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3122:17:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3122:24:13"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3112:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3112:35:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3105:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3105:43:13"
                  },
                  "nodeType": "YulIf",
                  "src": "3102:2:13"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3085:5:13",
                "type": ""
              }
            ],
            "src": "3049:122:13"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 13,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:16663:13",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:87:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "69:29:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "91:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "78:12:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "78:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "69:5:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "134:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "107:26:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "107:33:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "107:33:13"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "37:6:13",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "45:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "53:5:13",
                "type": ""
              }
            ],
            "src": "7:139:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "204:87:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "214:29:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "236:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "223:12:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "223:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "214:5:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "279:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "252:26:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "252:33:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "252:33:13"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "182:6:13",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "190:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "198:5:13",
                "type": ""
              }
            ],
            "src": "152:139:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "363:196:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "409:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "418:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "421:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "411:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "411:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "411:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "384:7:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "393:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "380:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "380:23:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "405:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "376:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "376:32:13"
                  },
                  "nodeType": "YulIf",
                  "src": "373:2:13"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "435:117:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "450:15:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "464:1:13",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "454:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "479:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "514:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "525:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "510:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "510:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "534:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "489:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "489:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "479:6:13"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "333:9:13",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "344:7:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "356:6:13",
                "type": ""
              }
            ],
            "src": "297:262:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "648:324:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "694:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "703:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "706:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "696:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "696:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "696:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "669:7:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "678:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "665:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "665:23:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "690:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "661:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "661:32:13"
                  },
                  "nodeType": "YulIf",
                  "src": "658:2:13"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "720:117:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "735:15:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "749:1:13",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "739:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "764:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "799:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "810:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "795:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "795:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "819:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "774:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "774:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "764:6:13"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "847:118:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "862:16:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "876:2:13",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "866:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "892:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "927:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "938:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "923:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "923:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "947:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "902:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "902:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "892:6:13"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "610:9:13",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "621:7:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "633:6:13",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "641:6:13",
                "type": ""
              }
            ],
            "src": "565:407:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1078:452:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1124:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1133:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1136:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1126:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1126:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1126:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1099:7:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1108:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1095:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1095:23:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1120:2:13",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1091:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1091:32:13"
                  },
                  "nodeType": "YulIf",
                  "src": "1088:2:13"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1150:117:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1165:15:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1179:1:13",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1169:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1194:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1229:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1240:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1225:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1225:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1249:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1204:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1204:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1194:6:13"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1277:118:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1292:16:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1306:2:13",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1296:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1322:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1357:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1368:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1353:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1353:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1377:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1332:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1332:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1322:6:13"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1405:118:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1420:16:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1434:2:13",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1424:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1450:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1485:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1496:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1481:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1481:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1505:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1460:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1460:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "1450:6:13"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1032:9:13",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1043:7:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1055:6:13",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1063:6:13",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1071:6:13",
                "type": ""
              }
            ],
            "src": "978:552:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1619:324:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1665:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1674:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1677:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1667:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1667:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1667:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1640:7:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1649:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1636:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1636:23:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1661:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1632:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1632:32:13"
                  },
                  "nodeType": "YulIf",
                  "src": "1629:2:13"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1691:117:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1706:15:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1720:1:13",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1710:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1735:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1770:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1781:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1766:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1766:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1790:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1745:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1745:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1735:6:13"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1818:118:13",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1833:16:13",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1847:2:13",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1837:6:13",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1863:63:13",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1898:9:13"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1909:6:13"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1894:3:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1894:22:13"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1918:7:13"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1873:20:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1873:53:13"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1863:6:13"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1581:9:13",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1592:7:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1604:6:13",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1612:6:13",
                "type": ""
              }
            ],
            "src": "1536:407:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2014:53:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2031:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2054:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2036:17:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2036:24:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2024:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2024:37:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2024:37:13"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2002:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2009:3:13",
                "type": ""
              }
            ],
            "src": "1949:118:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2132:50:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2149:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2169:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "2154:14:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2154:21:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2142:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2142:34:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2142:34:13"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2120:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2127:3:13",
                "type": ""
              }
            ],
            "src": "2073:109:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2280:272:13",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2290:53:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2337:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2304:32:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2304:39:13"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2294:6:13",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2352:78:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2418:3:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2423:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2359:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2359:71:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2352:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2465:5:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2472:4:13",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2461:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2461:16:13"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2479:3:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2484:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2439:21:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2439:52:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2439:52:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2500:46:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2511:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2538:6:13"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2516:21:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2516:29:13"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2507:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2507:39:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2500:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2261:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2268:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2276:3:13",
                "type": ""
              }
            ],
            "src": "2188:364:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2704:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2714:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2780:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2785:2:13",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2721:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2721:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2714:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2886:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                      "nodeType": "YulIdentifier",
                      "src": "2797:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2797:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2797:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2899:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2910:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2915:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2906:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2906:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2899:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2692:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2700:3:13",
                "type": ""
              }
            ],
            "src": "2558:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3076:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3086:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3152:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3157:2:13",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3093:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3093:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3086:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3258:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "3169:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3169:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3169:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3271:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3282:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3287:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3278:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3278:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3271:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3064:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3072:3:13",
                "type": ""
              }
            ],
            "src": "2930:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3448:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3458:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3524:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3529:2:13",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3465:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3465:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3458:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3630:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                      "nodeType": "YulIdentifier",
                      "src": "3541:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3541:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3541:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3643:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3654:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3659:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3650:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3650:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3643:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3436:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3444:3:13",
                "type": ""
              }
            ],
            "src": "3302:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3820:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3830:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3896:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3901:2:13",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3837:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3837:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3830:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4002:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                      "nodeType": "YulIdentifier",
                      "src": "3913:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3913:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3913:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4015:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4026:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4031:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4022:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4022:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "4015:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3808:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3816:3:13",
                "type": ""
              }
            ],
            "src": "3674:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4192:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4202:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4268:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4273:2:13",
                        "type": "",
                        "value": "40"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4209:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4209:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4202:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4374:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330",
                      "nodeType": "YulIdentifier",
                      "src": "4285:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4285:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4285:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4387:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4398:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4403:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4394:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4394:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "4387:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4180:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4188:3:13",
                "type": ""
              }
            ],
            "src": "4046:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4564:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4574:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4640:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4645:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4581:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4581:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4574:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4746:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "4657:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4657:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4657:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4759:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4770:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4775:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4766:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4766:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "4759:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4552:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4560:3:13",
                "type": ""
              }
            ],
            "src": "4418:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4936:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4946:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5012:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5017:2:13",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4953:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4953:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4946:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5118:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                      "nodeType": "YulIdentifier",
                      "src": "5029:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5029:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5029:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5131:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5142:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5147:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5138:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5138:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5131:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4924:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4932:3:13",
                "type": ""
              }
            ],
            "src": "4790:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5308:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5318:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5384:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5389:2:13",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5325:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5325:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5318:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5490:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                      "nodeType": "YulIdentifier",
                      "src": "5401:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5401:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5401:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5503:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5514:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5519:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5510:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5510:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5503:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5296:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5304:3:13",
                "type": ""
              }
            ],
            "src": "5162:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5680:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5690:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5756:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5761:2:13",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5697:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5697:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5690:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5862:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                      "nodeType": "YulIdentifier",
                      "src": "5773:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5773:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5773:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5875:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5886:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5891:2:13",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5882:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5882:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5875:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5668:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5676:3:13",
                "type": ""
              }
            ],
            "src": "5534:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6052:220:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6062:74:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6128:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6133:2:13",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6069:58:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6069:67:13"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6062:3:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6234:3:13"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                      "nodeType": "YulIdentifier",
                      "src": "6145:88:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6145:93:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6145:93:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6247:19:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6258:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6263:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6254:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6254:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6247:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6040:3:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6048:3:13",
                "type": ""
              }
            ],
            "src": "5906:366:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6343:53:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6360:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6383:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "6365:17:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6365:24:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6353:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6353:37:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6353:37:13"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6331:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6338:3:13",
                "type": ""
              }
            ],
            "src": "6278:118:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6463:51:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6480:3:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6501:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint8",
                          "nodeType": "YulIdentifier",
                          "src": "6485:15:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6485:22:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6473:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6473:35:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6473:35:13"
                }
              ]
            },
            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6451:5:13",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6458:3:13",
                "type": ""
              }
            ],
            "src": "6402:112:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6618:124:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6628:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6640:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6651:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6636:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6636:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6628:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6708:6:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6721:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6732:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6717:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6717:17:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6664:43:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6664:71:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6664:71:13"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6590:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6602:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6613:4:13",
                "type": ""
              }
            ],
            "src": "6520:222:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6840:118:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6850:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6862:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6873:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6858:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6858:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6850:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6924:6:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6937:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6948:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6933:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6933:17:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6886:37:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6886:65:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6886:65:13"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6812:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6824:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6835:4:13",
                "type": ""
              }
            ],
            "src": "6748:210:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7082:195:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7092:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7104:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7115:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7100:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7100:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7092:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7139:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7150:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7135:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7135:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7158:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7164:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7154:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7154:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7128:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7128:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7128:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7184:86:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7256:6:13"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7265:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7192:63:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7192:78:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7184:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7054:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7066:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7077:4:13",
                "type": ""
              }
            ],
            "src": "6964:313:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7454:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7464:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7476:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7487:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7472:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7472:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7464:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7511:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7522:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7507:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7507:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7530:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7536:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7526:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7526:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7500:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7500:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7500:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7556:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7690:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7564:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7564:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7556:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7434:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7449:4:13",
                "type": ""
              }
            ],
            "src": "7283:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7879:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7889:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7901:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7912:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7897:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7897:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7889:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7936:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7947:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7932:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7932:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7955:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7961:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7951:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7951:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7925:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7925:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7925:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7981:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8115:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7989:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7989:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7981:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7859:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7874:4:13",
                "type": ""
              }
            ],
            "src": "7708:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8304:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8314:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8326:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8337:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8322:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8322:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8314:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8361:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8372:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8357:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8357:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8380:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8386:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8376:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8376:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8350:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8350:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8350:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8406:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8540:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8414:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8414:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8406:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8284:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8299:4:13",
                "type": ""
              }
            ],
            "src": "8133:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8729:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8739:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8751:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8762:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8747:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8747:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8739:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8786:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8797:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8782:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8782:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8805:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8811:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8801:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8801:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8775:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8775:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8775:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8831:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8965:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8839:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8839:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8831:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8709:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8724:4:13",
                "type": ""
              }
            ],
            "src": "8558:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9154:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9164:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9176:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9187:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9172:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9172:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9164:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9211:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9222:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9207:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9207:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9230:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9236:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9226:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9226:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9200:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9200:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9200:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9256:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9390:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9264:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9264:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9256:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9134:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9149:4:13",
                "type": ""
              }
            ],
            "src": "8983:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9579:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9589:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9601:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9612:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9597:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9597:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9589:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9636:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9647:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9632:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9632:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9655:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9661:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9651:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9651:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9625:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9625:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9625:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9681:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9815:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9689:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9689:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9681:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9559:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9574:4:13",
                "type": ""
              }
            ],
            "src": "9408:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10004:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10014:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10026:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10037:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10022:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10022:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10014:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10061:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10072:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10057:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10057:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10080:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10086:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10076:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10076:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10050:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10050:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10050:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10106:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10240:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10114:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10114:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10106:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9984:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9999:4:13",
                "type": ""
              }
            ],
            "src": "9833:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10429:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10439:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10451:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10462:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10447:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10447:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10439:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10486:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10497:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10482:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10482:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10505:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10511:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10501:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10501:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10475:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10475:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10475:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10531:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10665:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10539:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10539:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10531:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10409:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10424:4:13",
                "type": ""
              }
            ],
            "src": "10258:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10854:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10864:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10876:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10887:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10872:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10872:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10864:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10911:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10922:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10907:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10907:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10930:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10936:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10926:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10926:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10900:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10900:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10900:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10956:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11090:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10964:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10964:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10956:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10834:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10849:4:13",
                "type": ""
              }
            ],
            "src": "10683:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11279:248:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11289:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11301:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11312:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11297:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11297:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11289:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11336:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11347:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11332:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11332:17:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11355:4:13"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11361:9:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11351:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11351:20:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11325:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11325:47:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11325:47:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11381:139:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11515:4:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11389:124:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11389:131:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11381:4:13"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11259:9:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11274:4:13",
                "type": ""
              }
            ],
            "src": "11108:419:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11631:124:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11641:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11653:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11664:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11649:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11649:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11641:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "11721:6:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11734:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11745:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11730:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11730:17:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11677:43:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11677:71:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11677:71:13"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11603:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11615:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11626:4:13",
                "type": ""
              }
            ],
            "src": "11533:222:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11855:120:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11865:26:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11877:9:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11888:2:13",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11873:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11873:18:13"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11865:4:13"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "11941:6:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11954:9:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11965:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11950:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11950:17:13"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11901:39:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11901:67:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11901:67:13"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11827:9:13",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11839:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11850:4:13",
                "type": ""
              }
            ],
            "src": "11761:214:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12040:40:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12051:22:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12067:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "12061:5:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12061:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "12051:6:13"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12023:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "12033:6:13",
                "type": ""
              }
            ],
            "src": "11981:99:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12182:73:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12199:3:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "12204:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12192:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12192:19:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12192:19:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12220:29:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "12239:3:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12244:4:13",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12235:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12235:14:13"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "12220:11:13"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "12154:3:13",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "12159:6:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "12170:11:13",
                "type": ""
              }
            ],
            "src": "12086:169:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12305:261:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12315:25:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12338:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "12320:17:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12320:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "12315:1:13"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12349:25:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12372:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "12354:17:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12354:20:13"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "12349:1:13"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12512:22:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "12514:16:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12514:18:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12514:18:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12433:1:13"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12440:66:13",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "12508:1:13"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12436:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12436:74:13"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "12430:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12430:81:13"
                  },
                  "nodeType": "YulIf",
                  "src": "12427:2:13"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12544:16:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12555:1:13"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12558:1:13"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12551:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12551:9:13"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "12544:3:13"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "12292:1:13",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "12295:1:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "12301:3:13",
                "type": ""
              }
            ],
            "src": "12261:305:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12617:51:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12627:35:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12656:5:13"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "12638:17:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12638:24:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "12627:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12599:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "12609:7:13",
                "type": ""
              }
            ],
            "src": "12572:96:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12716:48:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12726:32:13",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "12751:5:13"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "12744:6:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12744:13:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "12737:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12737:21:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "12726:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12698:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "12708:7:13",
                "type": ""
              }
            ],
            "src": "12674:90:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12815:81:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12825:65:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "12840:5:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12847:42:13",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "12836:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12836:54:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "12825:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12797:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "12807:7:13",
                "type": ""
              }
            ],
            "src": "12770:126:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12947:32:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12957:16:13",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "12968:5:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "12957:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "12929:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "12939:7:13",
                "type": ""
              }
            ],
            "src": "12902:77:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13028:43:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13038:27:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "13053:5:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13060:4:13",
                        "type": "",
                        "value": "0xff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "13049:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13049:16:13"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "13038:7:13"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "13010:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "13020:7:13",
                "type": ""
              }
            ],
            "src": "12985:86:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13126:258:13",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13136:10:13",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "13145:1:13",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "13140:1:13",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13205:63:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "13230:3:13"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "13235:1:13"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13226:3:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13226:11:13"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "13249:3:13"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "13254:1:13"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "13245:3:13"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13245:11:13"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "13239:5:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13239:18:13"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13219:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13219:39:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13219:39:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "13166:1:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "13169:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "13163:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13163:13:13"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "13177:19:13",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13179:15:13",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "13188:1:13"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13191:2:13",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13184:3:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13184:10:13"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "13179:1:13"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "13159:3:13",
                    "statements": []
                  },
                  "src": "13155:113:13"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13302:76:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "13352:3:13"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "13357:6:13"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13348:3:13"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13348:16:13"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13366:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13341:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13341:27:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13341:27:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "13283:1:13"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "13286:6:13"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "13280:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13280:13:13"
                  },
                  "nodeType": "YulIf",
                  "src": "13277:2:13"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "13108:3:13",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "13113:3:13",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "13118:6:13",
                "type": ""
              }
            ],
            "src": "13077:307:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13441:269:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13451:22:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "13465:4:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13471:1:13",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "13461:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13461:12:13"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "13451:6:13"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "13482:38:13",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "13512:4:13"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13518:1:13",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "13508:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13508:12:13"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "13486:18:13",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13559:51:13",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13573:27:13",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "13587:6:13"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13595:4:13",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "13583:3:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13583:17:13"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "13573:6:13"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "13539:18:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "13532:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13532:26:13"
                  },
                  "nodeType": "YulIf",
                  "src": "13529:2:13"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13662:42:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "13676:16:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13676:18:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13676:18:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "13626:18:13"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "13649:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13657:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "13646:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13646:14:13"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "13623:2:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13623:38:13"
                  },
                  "nodeType": "YulIf",
                  "src": "13620:2:13"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "13425:4:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "13434:6:13",
                "type": ""
              }
            ],
            "src": "13390:320:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13744:152:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13761:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13764:77:13",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13754:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13754:88:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13754:88:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13858:1:13",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13861:4:13",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13851:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13851:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13851:15:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13882:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13885:4:13",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "13875:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13875:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13875:15:13"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "13716:180:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13930:152:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13947:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13950:77:13",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13940:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13940:88:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13940:88:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14044:1:13",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14047:4:13",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14037:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14037:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14037:15:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14068:1:13",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14071:4:13",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "14061:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14061:15:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14061:15:13"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "13902:180:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14136:54:13",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14146:38:13",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "14164:5:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14171:2:13",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14160:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14160:14:13"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14180:2:13",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "14176:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14176:7:13"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "14156:3:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14156:28:13"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "14146:6:13"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "14119:5:13",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "14129:6:13",
                "type": ""
              }
            ],
            "src": "14088:102:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14302:116:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14324:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14332:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14320:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14320:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14336:34:13",
                        "type": "",
                        "value": "ERC20: transfer to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14313:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14313:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14313:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14392:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14400:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14388:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14388:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14405:5:13",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14381:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14381:30:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14381:30:13"
                }
              ]
            },
            "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14294:6:13",
                "type": ""
              }
            ],
            "src": "14196:222:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14530:119:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14552:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14560:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14548:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14548:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14564:34:13",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14541:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14541:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14541:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14620:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14628:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14616:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14616:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14633:8:13",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14609:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14609:33:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14609:33:13"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14522:6:13",
                "type": ""
              }
            ],
            "src": "14424:225:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14761:115:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14783:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14791:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14779:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14779:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14795:34:13",
                        "type": "",
                        "value": "ERC20: approve to the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14772:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14772:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14772:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14851:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14859:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14847:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14847:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14864:4:13",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14840:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14840:29:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14840:29:13"
                }
              ]
            },
            "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14753:6:13",
                "type": ""
              }
            ],
            "src": "14655:221:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14988:119:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15010:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15018:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15006:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15006:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15022:34:13",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds b"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14999:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14999:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14999:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15078:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15086:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15074:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15074:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15091:8:13",
                        "type": "",
                        "value": "alance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15067:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15067:33:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15067:33:13"
                }
              ]
            },
            "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14980:6:13",
                "type": ""
              }
            ],
            "src": "14882:225:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15219:121:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15241:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15249:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15237:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15237:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15253:34:13",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15230:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15230:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15230:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15309:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15317:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15305:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15305:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15322:10:13",
                        "type": "",
                        "value": "llowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15298:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15298:35:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15298:35:13"
                }
              ]
            },
            "name": "store_literal_in_memory_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15211:6:13",
                "type": ""
              }
            ],
            "src": "15113:227:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15452:76:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15474:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15482:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15470:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15470:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15486:34:13",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15463:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15463:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15463:58:13"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15444:6:13",
                "type": ""
              }
            ],
            "src": "15346:182:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15640:118:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15662:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15670:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15658:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15658:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15674:34:13",
                        "type": "",
                        "value": "ERC20: transfer from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15651:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15651:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15651:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15730:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15738:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15726:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15726:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15743:7:13",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15719:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15719:32:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15719:32:13"
                }
              ]
            },
            "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15632:6:13",
                "type": ""
              }
            ],
            "src": "15534:224:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15870:117:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15892:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15900:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15888:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15888:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15904:34:13",
                        "type": "",
                        "value": "ERC20: approve from the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15881:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15881:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15881:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15960:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15968:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15956:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15956:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15973:6:13",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15949:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15949:31:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15949:31:13"
                }
              ]
            },
            "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15862:6:13",
                "type": ""
              }
            ],
            "src": "15764:223:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16099:118:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16121:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16129:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16117:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16117:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16133:34:13",
                        "type": "",
                        "value": "ERC20: decreased allowance below"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16110:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16110:58:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16110:58:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16189:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16197:2:13",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16185:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16185:15:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16202:7:13",
                        "type": "",
                        "value": " zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16178:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16178:32:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16178:32:13"
                }
              ]
            },
            "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "16091:6:13",
                "type": ""
              }
            ],
            "src": "15993:224:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16329:75:13",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16351:6:13"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16359:1:13",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16347:3:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16347:14:13"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16363:33:13",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16340:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16340:57:13"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16340:57:13"
                }
              ]
            },
            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "16321:6:13",
                "type": ""
              }
            ],
            "src": "16223:181:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16453:79:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16510:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16519:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16522:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "16512:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16512:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16512:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "16476:5:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "16501:5:13"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "16483:17:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "16483:24:13"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "16473:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16473:35:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "16466:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16466:43:13"
                  },
                  "nodeType": "YulIf",
                  "src": "16463:2:13"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "16446:5:13",
                "type": ""
              }
            ],
            "src": "16410:122:13"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16581:79:13",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16638:16:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16647:1:13",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16650:1:13",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "16640:6:13"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16640:12:13"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16640:12:13"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "16604:5:13"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "16629:5:13"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "16611:17:13"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "16611:24:13"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "16601:2:13"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16601:35:13"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "16594:6:13"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16594:43:13"
                  },
                  "nodeType": "YulIf",
                  "src": "16591:2:13"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "16574:5:13",
                "type": ""
              }
            ],
            "src": "16538:122:13"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 40)\n        store_literal_in_memory_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function store_literal_in_memory_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds a\")\n\n        mstore(add(memPtr, 32), \"llowance\")\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 13,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "174:328:9:-:0;;;214:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1906:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1980:5;1972;:13;;;;;;;;;;;;:::i;:::-;;2005:7;1995;:17;;;;;;;;;;;;:::i;:::-;;1906:113;;867:23:0;877:12;:10;;;:12;;:::i;:::-;867:9;;;:23;;:::i;:::-;275:25:9::1;281:10;293:6;275:5;;;:25;;:::i;:::-;214:93:::0;174:328;;587:96:4;640:7;666:10;659:17;;587:96;:::o;2041:169:0:-;2096:16;2115:6;;;;;;;;;;;2096:25;;2140:8;2131:6;;:17;;;;;;;;;;;;;;;;;;2194:8;2163:40;;2184:8;2163:40;;;;;;;;;;;;2041:169;;:::o;8254:389:1:-;8356:1;8337:21;;:7;:21;;;;8329:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8405:49;8434:1;8438:7;8447:6;8405:20;;;:49;;:::i;:::-;8481:6;8465:12;;:22;;;;;;;:::i;:::-;;;;;;;;8519:6;8497:9;:18;8507:7;8497:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8561:7;8540:37;;8557:1;8540:37;;;8570:6;8540:37;;;;;;:::i;:::-;;;;;;;;8588:48;8616:1;8620:7;8629:6;8588:19;;;:48;;:::i;:::-;8254:389;;:::o;10916:121::-;;;;:::o;11625:120::-;;;;:::o;174:328:9:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:143:13:-;64:5;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;70:80;;;;:::o;156:284::-;226:6;275:2;263:9;254:7;250:23;246:32;243:2;;;291:1;288;281:12;243:2;334:1;359:64;415:7;406:6;395:9;391:22;359:64;:::i;:::-;349:74;;305:128;233:207;;;;:::o;446:366::-;588:3;609:67;673:2;668:3;609:67;:::i;:::-;602:74;;685:93;774:3;685:93;:::i;:::-;803:2;798:3;794:12;787:19;;592:220;;;:::o;818:118::-;905:24;923:5;905:24;:::i;:::-;900:3;893:37;883:53;;:::o;942:419::-;1108:4;1146:2;1135:9;1131:18;1123:26;;1195:9;1189:4;1185:20;1181:1;1170:9;1166:17;1159:47;1223:131;1349:4;1223:131;:::i;:::-;1215:139;;1113:248;;;:::o;1367:222::-;1460:4;1498:2;1487:9;1483:18;1475:26;;1511:71;1579:1;1568:9;1564:17;1555:6;1511:71;:::i;:::-;1465:124;;;;:::o;1595:169::-;1679:11;1713:6;1708:3;1701:19;1753:4;1748:3;1744:14;1729:29;;1691:73;;;;:::o;1770:305::-;1810:3;1829:20;1847:1;1829:20;:::i;:::-;1824:25;;1863:20;1881:1;1863:20;:::i;:::-;1858:25;;2017:1;1949:66;1945:74;1942:1;1939:81;1936:2;;;2023:18;;:::i;:::-;1936:2;2067:1;2064;2060:9;2053:16;;1814:261;;;;:::o;2081:77::-;2118:7;2147:5;2136:16;;2126:32;;;:::o;2164:320::-;2208:6;2245:1;2239:4;2235:12;2225:22;;2292:1;2286:4;2282:12;2313:18;2303:2;;2369:4;2361:6;2357:17;2347:27;;2303:2;2431;2423:6;2420:14;2400:18;2397:38;2394:2;;;2450:18;;:::i;:::-;2394:2;2215:269;;;;:::o;2490:180::-;2538:77;2535:1;2528:88;2635:4;2632:1;2625:15;2659:4;2656:1;2649:15;2676:180;2724:77;2721:1;2714:88;2821:4;2818:1;2811:15;2845:4;2842:1;2835:15;2862:181;3002:33;2998:1;2990:6;2986:14;2979:57;2968:75;:::o;3049:122::-;3122:24;3140:5;3122:24;:::i;:::-;3115:5;3112:35;3102:2;;3161:1;3158;3151:12;3102:2;3092:79;:::o;174:328:9:-;;;;;;;",
  "deployedSourceMap": "174:328:9:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2084:98:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4181:166;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3172:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4814:478;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3021:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;412:88:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5687:212:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;313:93:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3336:125:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1605:92:0;;;:::i;:::-;;973:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2295:102:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6386:405;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3664:172;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3894:149;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1846:189:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2084:98:1;2138:13;2170:5;2163:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2084:98;:::o;4181:166::-;4264:4;4280:39;4289:12;:10;:12::i;:::-;4303:7;4312:6;4280:8;:39::i;:::-;4336:4;4329:11;;4181:166;;;;:::o;3172:106::-;3233:7;3259:12;;3252:19;;3172:106;:::o;4814:478::-;4950:4;4966:36;4976:6;4984:9;4995:6;4966:9;:36::i;:::-;5013:24;5040:11;:19;5052:6;5040:19;;;;;;;;;;;;;;;:33;5060:12;:10;:12::i;:::-;5040:33;;;;;;;;;;;;;;;;5013:60;;5111:6;5091:16;:26;;5083:79;;;;;;;;;;;;:::i;:::-;;;;;;;;;5196:57;5205:6;5213:12;:10;:12::i;:::-;5246:6;5227:16;:25;5196:8;:57::i;:::-;5281:4;5274:11;;;4814:478;;;;;:::o;3021:91::-;3079:5;3103:2;3096:9;;3021:91;:::o;412:88:9:-;454:7;488:4;473:20;;412:88;:::o;5687:212:1:-;5775:4;5791:80;5800:12;:10;:12::i;:::-;5814:7;5860:10;5823:11;:25;5835:12;:10;:12::i;:::-;5823:25;;;;;;;;;;;;;;;:34;5849:7;5823:34;;;;;;;;;;;;;;;;:47;;;;:::i;:::-;5791:8;:80::i;:::-;5888:4;5881:11;;5687:212;;;;:::o;313:93:9:-;1196:12:0;:10;:12::i;:::-;1185:23;;:7;:5;:7::i;:::-;:23;;;1177:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;382:17:9::1;388:2;392:6;382:5;:17::i;:::-;313:93:::0;;:::o;3336:125:1:-;3410:7;3436:9;:18;3446:7;3436:18;;;;;;;;;;;;;;;;3429:25;;3336:125;;;:::o;1605:92:0:-;1196:12;:10;:12::i;:::-;1185:23;;:7;:5;:7::i;:::-;:23;;;1177:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1669:21:::1;1687:1;1669:9;:21::i;:::-;1605:92::o:0;973:85::-;1019:7;1045:6;;;;;;;;;;;1038:13;;973:85;:::o;2295:102:1:-;2351:13;2383:7;2376:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2295:102;:::o;6386:405::-;6479:4;6495:24;6522:11;:25;6534:12;:10;:12::i;:::-;6522:25;;;;;;;;;;;;;;;:34;6548:7;6522:34;;;;;;;;;;;;;;;;6495:61;;6594:15;6574:16;:35;;6566:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6685:67;6694:12;:10;:12::i;:::-;6708:7;6736:15;6717:16;:34;6685:8;:67::i;:::-;6780:4;6773:11;;;6386:405;;;;:::o;3664:172::-;3750:4;3766:42;3776:12;:10;:12::i;:::-;3790:9;3801:6;3766:9;:42::i;:::-;3825:4;3818:11;;3664:172;;;;:::o;3894:149::-;3983:7;4009:11;:18;4021:5;4009:18;;;;;;;;;;;;;;;:27;4028:7;4009:27;;;;;;;;;;;;;;;;4002:34;;3894:149;;;;:::o;1846:189:0:-;1196:12;:10;:12::i;:::-;1185:23;;:7;:5;:7::i;:::-;:23;;;1177:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1954:1:::1;1934:22;;:8;:22;;;;1926:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2009:19;2019:8;2009:9;:19::i;:::-;1846:189:::0;:::o;587:96:4:-;640:7;666:10;659:17;;587:96;:::o;9962:370:1:-;10110:1;10093:19;;:5;:19;;;;10085:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10190:1;10171:21;;:7;:21;;;;10163:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10272:6;10242:11;:18;10254:5;10242:18;;;;;;;;;;;;;;;:27;10261:7;10242:27;;;;;;;;;;;;;;;:36;;;;10309:7;10293:32;;10302:5;10293:32;;;10318:6;10293:32;;;;;;:::i;:::-;;;;;;;;9962:370;;;:::o;7265:713::-;7418:1;7400:20;;:6;:20;;;;7392:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;7501:1;7480:23;;:9;:23;;;;7472:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;7554:47;7575:6;7583:9;7594:6;7554:20;:47::i;:::-;7612:21;7636:9;:17;7646:6;7636:17;;;;;;;;;;;;;;;;7612:41;;7688:6;7671:13;:23;;7663:74;;;;;;;;;;;;:::i;:::-;;;;;;;;;7807:6;7791:13;:22;7771:9;:17;7781:6;7771:17;;;;;;;;;;;;;;;:42;;;;7857:6;7833:9;:20;7843:9;7833:20;;;;;;;;;;;;;;;;:30;;;;;;;:::i;:::-;;;;;;;;7896:9;7879:35;;7888:6;7879:35;;;7907:6;7879:35;;;;;;:::i;:::-;;;;;;;;7925:46;7945:6;7953:9;7964:6;7925:19;:46::i;:::-;7265:713;;;;:::o;8254:389::-;8356:1;8337:21;;:7;:21;;;;8329:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8405:49;8434:1;8438:7;8447:6;8405:20;:49::i;:::-;8481:6;8465:12;;:22;;;;;;;:::i;:::-;;;;;;;;8519:6;8497:9;:18;8507:7;8497:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8561:7;8540:37;;8557:1;8540:37;;;8570:6;8540:37;;;;;;:::i;:::-;;;;;;;;8588:48;8616:1;8620:7;8629:6;8588:19;:48::i;:::-;8254:389;;:::o;2041:169:0:-;2096:16;2115:6;;;;;;;;;;;2096:25;;2140:8;2131:6;;:17;;;;;;;;;;;;;;;;;;2194:8;2163:40;;2184:8;2163:40;;;;;;;;;;;;2041:169;;:::o;10916:121:1:-;;;;:::o;11625:120::-;;;;:::o;7:139:13:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:139::-;198:5;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;204:87;;;;:::o;297:262::-;356:6;405:2;393:9;384:7;380:23;376:32;373:2;;;421:1;418;411:12;373:2;464:1;489:53;534:7;525:6;514:9;510:22;489:53;:::i;:::-;479:63;;435:117;363:196;;;;:::o;565:407::-;633:6;641;690:2;678:9;669:7;665:23;661:32;658:2;;;706:1;703;696:12;658:2;749:1;774:53;819:7;810:6;799:9;795:22;774:53;:::i;:::-;764:63;;720:117;876:2;902:53;947:7;938:6;927:9;923:22;902:53;:::i;:::-;892:63;;847:118;648:324;;;;;:::o;978:552::-;1055:6;1063;1071;1120:2;1108:9;1099:7;1095:23;1091:32;1088:2;;;1136:1;1133;1126:12;1088:2;1179:1;1204:53;1249:7;1240:6;1229:9;1225:22;1204:53;:::i;:::-;1194:63;;1150:117;1306:2;1332:53;1377:7;1368:6;1357:9;1353:22;1332:53;:::i;:::-;1322:63;;1277:118;1434:2;1460:53;1505:7;1496:6;1485:9;1481:22;1460:53;:::i;:::-;1450:63;;1405:118;1078:452;;;;;:::o;1536:407::-;1604:6;1612;1661:2;1649:9;1640:7;1636:23;1632:32;1629:2;;;1677:1;1674;1667:12;1629:2;1720:1;1745:53;1790:7;1781:6;1770:9;1766:22;1745:53;:::i;:::-;1735:63;;1691:117;1847:2;1873:53;1918:7;1909:6;1898:9;1894:22;1873:53;:::i;:::-;1863:63;;1818:118;1619:324;;;;;:::o;1949:118::-;2036:24;2054:5;2036:24;:::i;:::-;2031:3;2024:37;2014:53;;:::o;2073:109::-;2154:21;2169:5;2154:21;:::i;:::-;2149:3;2142:34;2132:50;;:::o;2188:364::-;2276:3;2304:39;2337:5;2304:39;:::i;:::-;2359:71;2423:6;2418:3;2359:71;:::i;:::-;2352:78;;2439:52;2484:6;2479:3;2472:4;2465:5;2461:16;2439:52;:::i;:::-;2516:29;2538:6;2516:29;:::i;:::-;2511:3;2507:39;2500:46;;2280:272;;;;;:::o;2558:366::-;2700:3;2721:67;2785:2;2780:3;2721:67;:::i;:::-;2714:74;;2797:93;2886:3;2797:93;:::i;:::-;2915:2;2910:3;2906:12;2899:19;;2704:220;;;:::o;2930:366::-;3072:3;3093:67;3157:2;3152:3;3093:67;:::i;:::-;3086:74;;3169:93;3258:3;3169:93;:::i;:::-;3287:2;3282:3;3278:12;3271:19;;3076:220;;;:::o;3302:366::-;3444:3;3465:67;3529:2;3524:3;3465:67;:::i;:::-;3458:74;;3541:93;3630:3;3541:93;:::i;:::-;3659:2;3654:3;3650:12;3643:19;;3448:220;;;:::o;3674:366::-;3816:3;3837:67;3901:2;3896:3;3837:67;:::i;:::-;3830:74;;3913:93;4002:3;3913:93;:::i;:::-;4031:2;4026:3;4022:12;4015:19;;3820:220;;;:::o;4046:366::-;4188:3;4209:67;4273:2;4268:3;4209:67;:::i;:::-;4202:74;;4285:93;4374:3;4285:93;:::i;:::-;4403:2;4398:3;4394:12;4387:19;;4192:220;;;:::o;4418:366::-;4560:3;4581:67;4645:2;4640:3;4581:67;:::i;:::-;4574:74;;4657:93;4746:3;4657:93;:::i;:::-;4775:2;4770:3;4766:12;4759:19;;4564:220;;;:::o;4790:366::-;4932:3;4953:67;5017:2;5012:3;4953:67;:::i;:::-;4946:74;;5029:93;5118:3;5029:93;:::i;:::-;5147:2;5142:3;5138:12;5131:19;;4936:220;;;:::o;5162:366::-;5304:3;5325:67;5389:2;5384:3;5325:67;:::i;:::-;5318:74;;5401:93;5490:3;5401:93;:::i;:::-;5519:2;5514:3;5510:12;5503:19;;5308:220;;;:::o;5534:366::-;5676:3;5697:67;5761:2;5756:3;5697:67;:::i;:::-;5690:74;;5773:93;5862:3;5773:93;:::i;:::-;5891:2;5886:3;5882:12;5875:19;;5680:220;;;:::o;5906:366::-;6048:3;6069:67;6133:2;6128:3;6069:67;:::i;:::-;6062:74;;6145:93;6234:3;6145:93;:::i;:::-;6263:2;6258:3;6254:12;6247:19;;6052:220;;;:::o;6278:118::-;6365:24;6383:5;6365:24;:::i;:::-;6360:3;6353:37;6343:53;;:::o;6402:112::-;6485:22;6501:5;6485:22;:::i;:::-;6480:3;6473:35;6463:51;;:::o;6520:222::-;6613:4;6651:2;6640:9;6636:18;6628:26;;6664:71;6732:1;6721:9;6717:17;6708:6;6664:71;:::i;:::-;6618:124;;;;:::o;6748:210::-;6835:4;6873:2;6862:9;6858:18;6850:26;;6886:65;6948:1;6937:9;6933:17;6924:6;6886:65;:::i;:::-;6840:118;;;;:::o;6964:313::-;7077:4;7115:2;7104:9;7100:18;7092:26;;7164:9;7158:4;7154:20;7150:1;7139:9;7135:17;7128:47;7192:78;7265:4;7256:6;7192:78;:::i;:::-;7184:86;;7082:195;;;;:::o;7283:419::-;7449:4;7487:2;7476:9;7472:18;7464:26;;7536:9;7530:4;7526:20;7522:1;7511:9;7507:17;7500:47;7564:131;7690:4;7564:131;:::i;:::-;7556:139;;7454:248;;;:::o;7708:419::-;7874:4;7912:2;7901:9;7897:18;7889:26;;7961:9;7955:4;7951:20;7947:1;7936:9;7932:17;7925:47;7989:131;8115:4;7989:131;:::i;:::-;7981:139;;7879:248;;;:::o;8133:419::-;8299:4;8337:2;8326:9;8322:18;8314:26;;8386:9;8380:4;8376:20;8372:1;8361:9;8357:17;8350:47;8414:131;8540:4;8414:131;:::i;:::-;8406:139;;8304:248;;;:::o;8558:419::-;8724:4;8762:2;8751:9;8747:18;8739:26;;8811:9;8805:4;8801:20;8797:1;8786:9;8782:17;8775:47;8839:131;8965:4;8839:131;:::i;:::-;8831:139;;8729:248;;;:::o;8983:419::-;9149:4;9187:2;9176:9;9172:18;9164:26;;9236:9;9230:4;9226:20;9222:1;9211:9;9207:17;9200:47;9264:131;9390:4;9264:131;:::i;:::-;9256:139;;9154:248;;;:::o;9408:419::-;9574:4;9612:2;9601:9;9597:18;9589:26;;9661:9;9655:4;9651:20;9647:1;9636:9;9632:17;9625:47;9689:131;9815:4;9689:131;:::i;:::-;9681:139;;9579:248;;;:::o;9833:419::-;9999:4;10037:2;10026:9;10022:18;10014:26;;10086:9;10080:4;10076:20;10072:1;10061:9;10057:17;10050:47;10114:131;10240:4;10114:131;:::i;:::-;10106:139;;10004:248;;;:::o;10258:419::-;10424:4;10462:2;10451:9;10447:18;10439:26;;10511:9;10505:4;10501:20;10497:1;10486:9;10482:17;10475:47;10539:131;10665:4;10539:131;:::i;:::-;10531:139;;10429:248;;;:::o;10683:419::-;10849:4;10887:2;10876:9;10872:18;10864:26;;10936:9;10930:4;10926:20;10922:1;10911:9;10907:17;10900:47;10964:131;11090:4;10964:131;:::i;:::-;10956:139;;10854:248;;;:::o;11108:419::-;11274:4;11312:2;11301:9;11297:18;11289:26;;11361:9;11355:4;11351:20;11347:1;11336:9;11332:17;11325:47;11389:131;11515:4;11389:131;:::i;:::-;11381:139;;11279:248;;;:::o;11533:222::-;11626:4;11664:2;11653:9;11649:18;11641:26;;11677:71;11745:1;11734:9;11730:17;11721:6;11677:71;:::i;:::-;11631:124;;;;:::o;11761:214::-;11850:4;11888:2;11877:9;11873:18;11865:26;;11901:67;11965:1;11954:9;11950:17;11941:6;11901:67;:::i;:::-;11855:120;;;;:::o;11981:99::-;12033:6;12067:5;12061:12;12051:22;;12040:40;;;:::o;12086:169::-;12170:11;12204:6;12199:3;12192:19;12244:4;12239:3;12235:14;12220:29;;12182:73;;;;:::o;12261:305::-;12301:3;12320:20;12338:1;12320:20;:::i;:::-;12315:25;;12354:20;12372:1;12354:20;:::i;:::-;12349:25;;12508:1;12440:66;12436:74;12433:1;12430:81;12427:2;;;12514:18;;:::i;:::-;12427:2;12558:1;12555;12551:9;12544:16;;12305:261;;;;:::o;12572:96::-;12609:7;12638:24;12656:5;12638:24;:::i;:::-;12627:35;;12617:51;;;:::o;12674:90::-;12708:7;12751:5;12744:13;12737:21;12726:32;;12716:48;;;:::o;12770:126::-;12807:7;12847:42;12840:5;12836:54;12825:65;;12815:81;;;:::o;12902:77::-;12939:7;12968:5;12957:16;;12947:32;;;:::o;12985:86::-;13020:7;13060:4;13053:5;13049:16;13038:27;;13028:43;;;:::o;13077:307::-;13145:1;13155:113;13169:6;13166:1;13163:13;13155:113;;;13254:1;13249:3;13245:11;13239:18;13235:1;13230:3;13226:11;13219:39;13191:2;13188:1;13184:10;13179:15;;13155:113;;;13286:6;13283:1;13280:13;13277:2;;;13366:1;13357:6;13352:3;13348:16;13341:27;13277:2;13126:258;;;;:::o;13390:320::-;13434:6;13471:1;13465:4;13461:12;13451:22;;13518:1;13512:4;13508:12;13539:18;13529:2;;13595:4;13587:6;13583:17;13573:27;;13529:2;13657;13649:6;13646:14;13626:18;13623:38;13620:2;;;13676:18;;:::i;:::-;13620:2;13441:269;;;;:::o;13716:180::-;13764:77;13761:1;13754:88;13861:4;13858:1;13851:15;13885:4;13882:1;13875:15;13902:180;13950:77;13947:1;13940:88;14047:4;14044:1;14037:15;14071:4;14068:1;14061:15;14088:102;14129:6;14180:2;14176:7;14171:2;14164:5;14160:14;14156:28;14146:38;;14136:54;;;:::o;14196:222::-;14336:34;14332:1;14324:6;14320:14;14313:58;14405:5;14400:2;14392:6;14388:15;14381:30;14302:116;:::o;14424:225::-;14564:34;14560:1;14552:6;14548:14;14541:58;14633:8;14628:2;14620:6;14616:15;14609:33;14530:119;:::o;14655:221::-;14795:34;14791:1;14783:6;14779:14;14772:58;14864:4;14859:2;14851:6;14847:15;14840:29;14761:115;:::o;14882:225::-;15022:34;15018:1;15010:6;15006:14;14999:58;15091:8;15086:2;15078:6;15074:15;15067:33;14988:119;:::o;15113:227::-;15253:34;15249:1;15241:6;15237:14;15230:58;15322:10;15317:2;15309:6;15305:15;15298:35;15219:121;:::o;15346:182::-;15486:34;15482:1;15474:6;15470:14;15463:58;15452:76;:::o;15534:224::-;15674:34;15670:1;15662:6;15658:14;15651:58;15743:7;15738:2;15730:6;15726:15;15719:32;15640:118;:::o;15764:223::-;15904:34;15900:1;15892:6;15888:14;15881:58;15973:6;15968:2;15960:6;15956:15;15949:31;15870:117;:::o;15993:224::-;16133:34;16129:1;16121:6;16117:14;16110:58;16202:7;16197:2;16189:6;16185:15;16178:32;16099:118;:::o;16223:181::-;16363:33;16359:1;16351:6;16347:14;16340:57;16329:75;:::o;16410:122::-;16483:24;16501:5;16483:24;:::i;:::-;16476:5;16473:35;16463:2;;16522:1;16519;16512:12;16463:2;16453:79;:::o;16538:122::-;16611:24;16629:5;16611:24;:::i;:::-;16604:5;16601:35;16591:2;;16650:1;16647;16640:12;16591:2;16581:79;:::o",
  "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.4;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract Nugget is ERC20, Ownable {\n    constructor(uint256 amount) ERC20(\"Nugget\", \"XNG\") {\n        _mint(msg.sender, amount);\n    }\n\n    function mint(address to, uint256 amount) public onlyOwner {\n        _mint(to, amount);\n    }\n\n    function getAddress() public view returns(address) {\n        return address(this);\n    }\n}",
  "sourcePath": "/home/franz/Dokumente/blockchain-projects/nugget-token/contracts/Nugget.sol",
  "ast": {
    "absolutePath": "project:/contracts/Nugget.sol",
    "exportedSymbols": {
      "Context": [
        774
      ],
      "ERC20": [
        649
      ],
      "IERC20": [
        727
      ],
      "IERC20Metadata": [
        752
      ],
      "Nugget": [
        2785
      ],
      "Ownable": [
        103
      ]
    },
    "id": 2786,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2736,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "39:23:9"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 2737,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2786,
        "sourceUnit": 650,
        "src": "64:55:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 2738,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2786,
        "sourceUnit": 104,
        "src": "120:52:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2739,
              "name": "ERC20",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 649,
              "src": "193:5:9"
            },
            "id": 2740,
            "nodeType": "InheritanceSpecifier",
            "src": "193:5:9"
          },
          {
            "baseName": {
              "id": 2741,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 103,
              "src": "200:7:9"
            },
            "id": 2742,
            "nodeType": "InheritanceSpecifier",
            "src": "200:7:9"
          }
        ],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2785,
        "linearizedBaseContracts": [
          2785,
          103,
          649,
          752,
          727,
          774
        ],
        "name": "Nugget",
        "nameLocation": "183:6:9",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2757,
              "nodeType": "Block",
              "src": "265:42:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2752,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "281:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "281:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2754,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2744,
                        "src": "293:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2751,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 509,
                      "src": "275:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "275:25:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2756,
                  "nodeType": "ExpressionStatement",
                  "src": "275:25:9"
                }
              ]
            },
            "id": 2758,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4e7567676574",
                    "id": 2747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "248:8:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2e96b135295dbc032d5544bab45d5ffe60ce6c76d7d5f578ccf9d5fc0932ebaa",
                      "typeString": "literal_string \"Nugget\""
                    },
                    "value": "Nugget"
                  },
                  {
                    "hexValue": "584e47",
                    "id": 2748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "258:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b7cde49146b95f0fa23c8efcb685fca56186044ebbfce1ca8f6a542b341bdf32",
                      "typeString": "literal_string \"XNG\""
                    },
                    "value": "XNG"
                  }
                ],
                "id": 2749,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2746,
                  "name": "ERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 649,
                  "src": "242:5:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "242:22:9"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2744,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "234:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2758,
                  "src": "226:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "225:16:9"
            },
            "returnParameters": {
              "id": 2750,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "265:0:9"
            },
            "scope": 2785,
            "src": "214:93:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2772,
              "nodeType": "Block",
              "src": "372:34:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2768,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2760,
                        "src": "388:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2769,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2762,
                        "src": "392:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2767,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 509,
                      "src": "382:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "382:17:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2771,
                  "nodeType": "ExpressionStatement",
                  "src": "382:17:9"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 2773,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2765,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2764,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46,
                  "src": "362:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "362:9:9"
              }
            ],
            "name": "mint",
            "nameLocation": "322:4:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2760,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "335:2:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "327:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2762,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "347:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "339:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "326:28:9"
            },
            "returnParameters": {
              "id": 2766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "372:0:9"
            },
            "scope": 2785,
            "src": "313:93:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2783,
              "nodeType": "Block",
              "src": "463:37:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2780,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "488:4:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Nugget_$2785",
                          "typeString": "contract Nugget"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Nugget_$2785",
                          "typeString": "contract Nugget"
                        }
                      ],
                      "id": 2779,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "480:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 2778,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "480:7:9",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "480:13:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2777,
                  "id": 2782,
                  "nodeType": "Return",
                  "src": "473:20:9"
                }
              ]
            },
            "functionSelector": "38cc4831",
            "id": 2784,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAddress",
            "nameLocation": "421:10:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "431:2:9"
            },
            "returnParameters": {
              "id": 2777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2784,
                  "src": "454:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "453:9:9"
            },
            "scope": 2785,
            "src": "412:88:9",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2786,
        "src": "174:328:9",
        "usedErrors": []
      }
    ],
    "src": "39:463:9"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/Nugget.sol",
    "exportedSymbols": {
      "Context": [
        774
      ],
      "ERC20": [
        649
      ],
      "IERC20": [
        727
      ],
      "IERC20Metadata": [
        752
      ],
      "Nugget": [
        2785
      ],
      "Ownable": [
        103
      ]
    },
    "id": 2786,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2736,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "39:23:9"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 2737,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2786,
        "sourceUnit": 650,
        "src": "64:55:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 2738,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2786,
        "sourceUnit": 104,
        "src": "120:52:9",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2739,
              "name": "ERC20",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 649,
              "src": "193:5:9"
            },
            "id": 2740,
            "nodeType": "InheritanceSpecifier",
            "src": "193:5:9"
          },
          {
            "baseName": {
              "id": 2741,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 103,
              "src": "200:7:9"
            },
            "id": 2742,
            "nodeType": "InheritanceSpecifier",
            "src": "200:7:9"
          }
        ],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2785,
        "linearizedBaseContracts": [
          2785,
          103,
          649,
          752,
          727,
          774
        ],
        "name": "Nugget",
        "nameLocation": "183:6:9",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 2757,
              "nodeType": "Block",
              "src": "265:42:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 2752,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "281:3:9",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "281:10:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2754,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2744,
                        "src": "293:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2751,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 509,
                      "src": "275:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "275:25:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2756,
                  "nodeType": "ExpressionStatement",
                  "src": "275:25:9"
                }
              ]
            },
            "id": 2758,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4e7567676574",
                    "id": 2747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "248:8:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2e96b135295dbc032d5544bab45d5ffe60ce6c76d7d5f578ccf9d5fc0932ebaa",
                      "typeString": "literal_string \"Nugget\""
                    },
                    "value": "Nugget"
                  },
                  {
                    "hexValue": "584e47",
                    "id": 2748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "258:5:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b7cde49146b95f0fa23c8efcb685fca56186044ebbfce1ca8f6a542b341bdf32",
                      "typeString": "literal_string \"XNG\""
                    },
                    "value": "XNG"
                  }
                ],
                "id": 2749,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2746,
                  "name": "ERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 649,
                  "src": "242:5:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "242:22:9"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2744,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "234:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2758,
                  "src": "226:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "225:16:9"
            },
            "returnParameters": {
              "id": 2750,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "265:0:9"
            },
            "scope": 2785,
            "src": "214:93:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2772,
              "nodeType": "Block",
              "src": "372:34:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2768,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2760,
                        "src": "388:2:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2769,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2762,
                        "src": "392:6:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2767,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 509,
                      "src": "382:5:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "382:17:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2771,
                  "nodeType": "ExpressionStatement",
                  "src": "382:17:9"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 2773,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 2765,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 2764,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 46,
                  "src": "362:9:9"
                },
                "nodeType": "ModifierInvocation",
                "src": "362:9:9"
              }
            ],
            "name": "mint",
            "nameLocation": "322:4:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2760,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "335:2:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "327:10:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2762,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "347:6:9",
                  "nodeType": "VariableDeclaration",
                  "scope": 2773,
                  "src": "339:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "326:28:9"
            },
            "returnParameters": {
              "id": 2766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "372:0:9"
            },
            "scope": 2785,
            "src": "313:93:9",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2783,
              "nodeType": "Block",
              "src": "463:37:9",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2780,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "488:4:9",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Nugget_$2785",
                          "typeString": "contract Nugget"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_Nugget_$2785",
                          "typeString": "contract Nugget"
                        }
                      ],
                      "id": 2779,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "480:7:9",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 2778,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "480:7:9",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 2781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "480:13:9",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 2777,
                  "id": 2782,
                  "nodeType": "Return",
                  "src": "473:20:9"
                }
              ]
            },
            "functionSelector": "38cc4831",
            "id": 2784,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAddress",
            "nameLocation": "421:10:9",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2774,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "431:2:9"
            },
            "returnParameters": {
              "id": 2777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2784,
                  "src": "454:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:7:9",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "453:9:9"
            },
            "scope": 2785,
            "src": "412:88:9",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2786,
        "src": "174:328:9",
        "usedErrors": []
      }
    ],
    "src": "39:463:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
        }
      },
      "links": {},
      "address": "0xA4f4BbD33CaaCB5c66673d99b0A872d1B873e372",
      "transactionHash": "0xf3e842c6ca2c8d8c3a2272d050b739c1f4efdd0d388127b5c9880b0ec5d5baf4"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2021-12-29T12:30:00.732Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
},{}],3:[function(require,module,exports){
var connected = false;
var address;
let ethBalance;
var tknBalance;

var fwdContract;
var tknContract;

const fwdABI = require("../build/contracts/V2Forwarder.json");
const tknABI = require("./Nugget.json");

const fwdSC = "0x6b85961B8c9977aDBf3D3E7f8057C69783B5aF38";
const tknSC = "0x9Bf3677003497C531F26A7Fb628DFfF32608513B";
const wrapperSC = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";


window.addEventListener('load', async () => {
    // connect to wallet
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.request({ method: 'eth_requestAccounts' }).then(function (result) {
            address = result[0];
            console.log(address);
        });

        connected = true;
        $(".info-box").html("Connection successful.");
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        address = await web3.eth.getAccounts();
        connected = true;
        $(".info-box").html("Connection successful. Consider updating your Wallet.");
    }
    // Non-dapp browsers...
    else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
        $(".info-box").html("To continue please install <a href='https://metamask.io/' target='_blank'>MetaMask</a>.");
    }

    web3.eth.handleRevert = true;

    fwdContract = new web3.eth.Contract(fwdABI.abi, fwdSC, {from: address});
    tknContract = new web3.eth.Contract(tknABI.abi, tknSC, {from: address});

    refresh();

    // load 
    if (connected) {
        // send dialog
        $(".approve").click(async function () {
            amount0 = $("#amount0").val();
            amount1 = $("#amount1").val();
            console.log(web3.utils.toWei(amount0));
            console.log(web3.utils.toWei(amount1));
            await tknContract.methods.approve(fwdSC, web3.utils.toWei(amount1)).send()
            .on("receipt", function () {
                console.log("approved");
            });
        });
        $(".send").click(async function () {
            amount0 = $("#amount0").val();
            amount1 = $("#amount1").val();
            console.log(web3.utils.toWei(amount0));
            console.log(web3.utils.toWei(amount1));
            fwdContract.methods.fund(wrapperSC, tknSC, 0, web3.utils.toWei(amount1)).send({value: web3.utils.toWei(amount0)})
            .on("receipt", function (result) {
                console.log("finito" + result);
            });
        });
    }
});

async function refresh() {
    await updateBalances();
    updateUI();
}

async function updateBalances() {
    // read eth balance
    await web3.eth.getBalance(address)
    .then(function (result) {
        ethBalance = result;
    });
    //read ngt balance
    await tknContract.methods.balanceOf(address).call()
    .then(function (result) {
        tknBalance = result;
    });
}

async function updateUI() {
    $(".balance-eth").text(web3.utils.fromWei(ethBalance.toString()));
    $(".balance-tkn").text(web3.utils.fromWei(tknBalance.toString()));
    $(".address").text(address);
}
},{"../build/contracts/V2Forwarder.json":1,"./Nugget.json":2}]},{},[3]);
