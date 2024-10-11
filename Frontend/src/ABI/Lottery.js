export const Address = "0xF442A3743171229300DFf28c32A34Fedd820200c";
export const ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "interanceFee", type: "uint256" },
      { internalType: "uint256", name: "interval", type: "uint256" },
      { internalType: "bytes32", name: "keyHash", type: "bytes32" },
      { internalType: "uint256", name: "subscriptionId", type: "uint256" },
      { internalType: "uint32", name: "callbackGasLimit", type: "uint32" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "have", type: "address" },
      { internalType: "address", name: "want", type: "address" },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "have", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "coordinator", type: "address" },
    ],
    name: "OnlyOwnerOrCoordinator",
    type: "error",
  },
  { inputs: [], name: "Raffle_NotEnoughEth", type: "error" },
  { inputs: [], name: "Raffle_TransferFailed", type: "error" },
  { inputs: [], name: "Raffle_upkeepNotNeeded", type: "error" },
  { inputs: [], name: "ZeroAddress", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
    ],
    name: "CoordinatorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "EnteredRaffel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "FullfillRandomWordsFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reaquestId",
        type: "uint256",
      },
    ],
    name: "PerformUpKeepFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "PerformUpKeepStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "UpKeepNeeded",
        type: "bool",
      },
    ],
    name: "UpKeepChecked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestid",
        type: "uint256",
      },
    ],
    name: "fullFillRandomWordStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "checkUpkeep",
    outputs: [
      { internalType: "bool", name: "upkeepNeeded", type: "bool" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntranceFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInterval",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIntoLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumWords",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayer",
    outputs: [
      { internalType: "address payable[]", name: "", type: "address[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaffleState",
    outputs: [
      { internalType: "enum Raffle.Raffle_State", name: "", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentWinner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfirmations",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "requestId", type: "uint256" },
      { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_subscriptionId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_vrfCoordinator",
    outputs: [
      {
        internalType: "contract IVRFCoordinatorV2Plus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_vrfCoordinator", type: "address" },
    ],
    name: "setCoordinator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
