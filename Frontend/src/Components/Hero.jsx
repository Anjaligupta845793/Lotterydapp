// src/components/Hero.js
import React from "react";
import { useContext } from "react";
import { MyContext } from "../context";
// Sample data for current winner and lottery status

const Hero = () => {
  const { LotteryStatus, LotteryWinner, BuyLottery, state } =
    useContext(MyContext);

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
    >
      <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome to The Lottery
        </h1>
        <p className="text-lg mb-8 text-gray-600 font-semibold">
          Buy a Ticket and Enter the Lottery
        </p>

        {/* Current Winner Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Current Winner:
          </h2>
          <p className="text-xl font-bold text-red-500">{LotteryWinner}</p>
        </div>

        {/* Lottery Status Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Lottery Status:
          </h2>
          <p className="text-xl font-bold text-red-600">
            Lottery is currently {LotteryStatus}!
          </p>
        </div>

        <button
          onClick={BuyLottery}
          className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-700 transition duration-300"
        >
          Buy Ticket
        </button>
      </div>
    </section>
  );
};

export default Hero;
