import { useMemo } from "react";
import { ethers } from "ethers";

import { useWeb3Context } from "$/contexts/Web3Provider";
import { COSSACKS_CONTRACT_ADDRESS } from "$/constants/common";

import abi from "../../public/static/contract/abi.json";

export const useContract = () => {
  const { provider } = useWeb3Context();

  const contract = useMemo(() => {
    if (!provider) return;

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      COSSACKS_CONTRACT_ADDRESS,
      abi,
      signer
    );

    return contract;
  }, [provider]);

  return contract;
};
