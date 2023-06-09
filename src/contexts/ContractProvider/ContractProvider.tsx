import React, { useEffect } from "react";

import { createContext } from "$/helpers/createContext";
import { COSSACKS_CONTRACT_ADDRESS } from "$/constants/common";
import { runContractTotalSupply } from "$/services/moralis";

interface IContractContext {
  minted: number;
  mintedId: number;
  setMinted: React.Dispatch<React.SetStateAction<number>>;
  setMintedId: React.Dispatch<React.SetStateAction<number>>;
}

const [ContractContext, useContractContext] = createContext<IContractContext>();

export const ContractProvider: ReactFCWithChildrenProp = (props) => {
  const [mintedId, setMintedId] = React.useState(0);
  const [minted, setMinted] = React.useState(0);

  useEffect(() => {
    runContractTotalSupply(COSSACKS_CONTRACT_ADDRESS).then(setMinted);
  }, []);

  const value = React.useMemo(
    () => ({
      minted,
      mintedId,
      setMinted,
      setMintedId,
    }),
    [minted, mintedId]
  );

  return <ContractContext.Provider value={value} {...props} />;
};

export { useContractContext };
