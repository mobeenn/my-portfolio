import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
export const ConnectWalletButton = () => {
   const [account, setAccount] = useState(null);
   const [connecting, setConnecting] = useState(false);

   const shortenAddress = (addr) =>
      addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

   const checkMetaMaskConnection = async () => {
      if (!window.ethereum || !window.ethereum.isMetaMask) return;
      try {
         const accounts = await window.ethereum.request({
            method: "eth_accounts",
         });
         if (accounts.length > 0) setAccount(accounts[0]);
      } catch (err) {
         console.error(err);
      }
   };

   const connectMetaMask = async () => {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
         toast.error(
            "Please install MetaMask to connect your wallet: https://metamask.io/"
         );
         return;
      }
      try {
         setConnecting(true);
         const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
         });
         setAccount(accounts[0]);
         toast.success("Wallet connected successfully!");
      } catch (err) {
         console.error(err);
         toast.error("Failed to connect wallet");
      } finally {
         setConnecting(false);
      }
   };

   const disconnectWallet = () => setAccount(null);

   useEffect(() => {
      checkMetaMaskConnection();

      if (!window.ethereum) return;
      const handleAccountsChanged = (accounts) =>
         setAccount(accounts[0] || null);
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
         window.ethereum.removeListener(
            "accountsChanged",
            handleAccountsChanged
         );
      };
   }, []);

   return (
      <div>
         {account ? (
            <button
               onClick={disconnectWallet}
               className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold cursor-pointer"
            >
               {shortenAddress(account)} • Disconnect
            </button>
         ) : (
            <button
               onClick={connectMetaMask}
               disabled={connecting}
               className="px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold cursor-pointer"
            >
               {connecting ? "Connecting..." : "Connect MetaMask"}
            </button>
         )}
      </div>
   );
};
