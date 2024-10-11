// src/components/Navbar.js
import React from "react";
import { MyContext } from "../context";
import { useContext } from "react";

const Navbar = () => {
  const { Connect, state } = useContext(MyContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Lutto<span className="text-red-400">Lottery</span>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <p className="text-gray-800 font-medium rounded-lg hover:text-blue-500  mt-2 transition duration-300">
              {state.chainId === 80002 ? (
                <p>polygon_amoy</p>
              ) : (
                <p>unsupported</p>
              )}
            </p>
          </li>
          <li>
            <button
              className="bg-red-400 text-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={Connect}
            >
              {state.isConnected ? (
                <p>
                  {state.address.slice(0, 5) + "...." + state.address.slice(-3)}
                </p>
              ) : (
                <p>connectWallet</p>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
