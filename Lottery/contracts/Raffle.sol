// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

/* Custom Errors */


error Raffle_NotEnoughEth();
error Raffle_RaffleNotOpen();
error Raffle_TransferFailed();
error Raffle_upkeepNotNeeded();

/**
 * @title A sample Raffle Contract
 * @author Anjali Gupta
 * @notice This contract is for creating a sample raffle contract
 * @dev This implements the Chainlink VRF Version 2 and Automation 
 */

contract Raffle is VRFConsumerBaseV2Plus , AutomationCompatibleInterface{
    
     /* Type declarations */
    enum Raffle_State { OPEN, CALCULATING }

    /* State variables */
    //Chainlink VRF variables
  
    uint32 private immutable i_callbackGasLimit;
    uint256 public s_subscriptionId;
    uint16 private constant CONFIRMATION = 3;
    uint32 private constant NUMWORKDS = 1;
    bytes32 private immutable i_keyHash;

        
    //Lottery variables
    Raffle_State private s_RaffleState;
    uint private immutable i_interanceFee;
    uint private immutable i_interval;
    uint private s_lastTimeStamp;
    address payable[] private S_players; 
    address payable s_recentWinner;

    
    /* Events */
    event EnteredRaffel(address player);
    event UpKeepChecked(bool UpKeepNeeded );
    event PerformUpKeepFinished(uint reaquestId);
    event PerformUpKeepStarted(address caller);
    event fullFillRandomWordStarted(uint requestid);
    event FullfillRandomWordsFinished(address winner);

    

     /* Functions */
    
    constructor(uint interanceFee, uint interval, bytes32 keyHash, uint256 subscriptionId , uint32 callbackGasLimit)
        VRFConsumerBaseV2Plus(0x343300b5d84D444B2ADc9116FEF1bED02BE49Cf2){
        i_keyHash = keyHash;
        i_interanceFee = interanceFee;
        i_interval = interval;
        i_callbackGasLimit = callbackGasLimit;
        s_subscriptionId = subscriptionId;
        s_lastTimeStamp = block.timestamp;

        
    }
    
    /* Enter the lottery */
    function getIntoLottery() public payable {
        if(msg.value < i_interanceFee) {
            revert Raffle_NotEnoughEth();
        }
        S_players.push(payable(msg.sender));
        
        emit EnteredRaffel(msg.sender);
    }

    /**
        * @dev Checks if the conditions are met for performing upkeep.
        * The conditions include:
        * 1. Enough time has passed since the last upkeep.
        * 2. The raffle is currently open.
        * 3. The contract has a positive balance.
        * 4. There are players in the raffle.
        * 
        * @return upkeepNeeded A boolean indicating if upkeep is needed.
        * @return performData An empty bytes array (can be used for additional data if needed).
    */

    function checkUpkeep(bytes memory /* checkData */) public view  returns (bool upkeepNeeded, bytes memory /* performData */) {
        bool timeHasPassed = ( (block.timestamp - s_lastTimeStamp) > i_interval);
        bool raffleIsOpen = (s_RaffleState == Raffle_State.OPEN);
        bool hasBalance = (address(this).balance > 0);
        bool playerExists = (S_players.length > 0);
        
        upkeepNeeded = (timeHasPassed && raffleIsOpen && hasBalance && playerExists);
        
        return (upkeepNeeded, "");
    }

       /**
         * @dev Performs upkeep actions when conditions are met.
         * This function is called by Chainlink Keepers to execute necessary actions 
         * related to the raffle, such as resetting player entries and requesting random numbers.
         * 
         * It will revert if upkeep is not needed, ensuring that unnecessary actions are not performed.
        */

    function performUpkeep(bytes calldata /* performData */) external {
        //for Testing purpose
        emit PerformUpKeepStarted(msg.sender);
         (bool upkeepNeeded,) = checkUpkeep("");

        if (!upkeepNeeded) {
            revert Raffle_upkeepNotNeeded();
        }
        
        // Logic for performing upkeep...
                
        s_RaffleState = Raffle_State.CALCULATING;

        uint  requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: i_keyHash,
                subId: s_subscriptionId,
                requestConfirmations:CONFIRMATION ,
                callbackGasLimit: i_callbackGasLimit,
                numWords: NUMWORKDS,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({
                        nativePayment: false
                    }))
    }));
        
        emit PerformUpKeepFinished(requestId);
        
    }


         /**
            * @dev This function is called by Chainlink VRF to fulfill a request for random words.
            * It processes the random number(s) received and selects a winner from the players.
          */
     
    function fulfillRandomWords(uint256  _requestId , uint256[] calldata _randomWords) internal override {

        
        emit fullFillRandomWordStarted(_requestId);

        uint indexOfWinner = _randomWords[0] % S_players.length;
        address payable winner = S_players[indexOfWinner];

        S_players = new address payable[](0);
        s_lastTimeStamp = block.timestamp;
        
        s_RaffleState = Raffle_State.OPEN;
        s_recentWinner = winner;

        (bool success,) = s_recentWinner.call{value: address(this).balance}("");
        if (!success) {
            revert Raffle_TransferFailed();
        }
        emit FullfillRandomWordsFinished(s_recentWinner);
       
    }

    

    /* getter functions */

    

    function getRaffleState() public view returns(Raffle_State){
        return s_RaffleState;
    }

    function getNumWords() public pure returns(uint32){
        return NUMWORKDS;
    }

    function getRequestConfirmations() public pure returns(uint16){
        return CONFIRMATION;
    }

    function getRecentWinner() public view returns(address){
        return s_recentWinner;
    }
    
    function getPlayer() public view returns( address payable[] memory){
        return S_players;
    }

    function getLastTime() public view returns(uint){
        return s_lastTimeStamp;
    }

    function getInterval() public view returns(uint){
        return i_interval;
    }

    function getEntranceFee() public view returns(uint){
        return i_interanceFee;
    }
    
}