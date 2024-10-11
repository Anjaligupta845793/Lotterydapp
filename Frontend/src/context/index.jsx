import react from "react";
import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import { Address, ABI } from "../ABI/Lottery";

export const MyContext = createContext();

//Provider
export const MyProvider = ({ children }) => {
  //Contract Instance
  const [contract, setcontract] = useState([]);
  const [LotteryStatus, setLotteryStatus] = useState("");
  const [LotteryWinner, setLotteryWinner] = useState("");
  const [state, setState] = useState({
    address: null,
    provider: null,
    chainId: null,
    isConnected: false,
    balance: null,
  });

  //Connect Wallet
  const Connect = async () => {
    if (window.ethereum) {
      try {
        //Connecting to metamask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const chain = await signer.getChainId();
        const address = await signer.getAddress();
        const balance = await signer.getBalance();
        setState({
          address,
          provider,
          chainId: chain,
          isConnected: true,
          balance,
        });
        toast("connected✅");

        //Fetching Contracts
        const LotteryContract = new ethers.Contract(Address, ABI, signer);
        console.log(LotteryContract);
        setcontract(LotteryContract);
        const lotteryStatusPromise = LotteryContract.getRaffleState();
        const lotteryWinnerPromise = LotteryContract.getRecentWinner();

        //getRecentWinner
        const [lotteryStatusResult, lotteryWinnerResult] = await Promise.all([
          lotteryStatusPromise,
          lotteryWinnerPromise,
        ]);

        console.log(lotteryStatusResult);
        console.log(lotteryWinnerResult);

        if (lotteryStatusResult == 0) {
          setLotteryStatus("Open");
        } else {
          setLotteryStatus("Calculating");
        }
        if (lotteryWinnerResult == ethers.constants.AddressZero) {
          setLotteryWinner("No Winner");
        } else {
          setLotteryWinner(lotteryWinnerResult);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Install Metamask");
    }
  };
  const BuyLottery = async () => {
    try {
      const IntranceFee = "0.01"; // Amount in Ether
      const TicketPrice = ethers.utils.parseEther(IntranceFee);
      const Ticket = await contract.getIntoLottery({
        value: TicketPrice,
        gasLimit: 300000,
      });
      toast.promise(Ticket.wait(), {
        loading: "Buying Ticket ...",
        success: "Purchese is successfull!",
        error: "purchase is canceled",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{ Connect, state, LotteryStatus, LotteryWinner, BuyLottery }}
    >
      {children}
    </MyContext.Provider>
  );
};
