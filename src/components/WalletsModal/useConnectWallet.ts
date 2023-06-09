import { useState } from "react";
import { providers } from "ethers";

import { useWalletConnect } from "$/hooks/useWalletConnect";
import { useSnackbar } from "$/hooks/useSnackbar";
import { fromDecimalToHex } from "$/helpers/fromDecimalToHex";
import { useWeb3Context } from "$/contexts/Web3Provider";
import { useUserContext } from "$/contexts/UserProvider";
import { BSC_CHAIN_ID } from "$/constants/common";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const useConnectWallet = () => {
  const walletConnect = useWalletConnect();
  const { setAddress } = useUserContext();
  const { setProvider } = useWeb3Context();
  const { showErrorSnackbar } = useSnackbar();
  const [isWCLoading, setIsWCLoading] = useState(false);
  const [isMMLoading, setIsMMLoading] = useState(false);

  const connectWalletConnect = async () => {
    setIsWCLoading(true);
    try {
      const address = await walletConnect(BSC_CHAIN_ID);

      setAddress(address);
    } catch (error) {
      showErrorSnackbar("Виникла помилка");
    }
    setIsWCLoading(false);
  };

  const connectMetaMask = async () => {
    if (typeof window === undefined) {
      return;
    }

    if (typeof window.ethereum === undefined) {
      showErrorSnackbar("Для продовження потрібний MetaMask");
      return;
    }

    setIsMMLoading(true);

    try {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (Number(window.ethereum.networkVersion) !== BSC_CHAIN_ID) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: fromDecimalToHex(BSC_CHAIN_ID) }],
        });
      }

      const provider = new providers.Web3Provider(window.ethereum, "any");

      setProvider(provider);

      const address = await provider.getSigner().getAddress();

      setAddress(address);
    } catch (error) {
      showErrorSnackbar("Виникла помилка");
    }

    setIsMMLoading(false);
  };

  return {
    connectWalletConnect,
    connectMetaMask,
    isWCLoading,
    isMMLoading,
  };
};
