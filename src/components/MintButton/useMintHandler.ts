import { useState } from "react";
import inc from "ramda/src/inc";
import pathOr from "ramda/src/pathOr";

import { useContract } from "$/hooks/useContract";
import { useSnackbar } from "$/hooks/useSnackbar";
import { useUserContext } from "$/contexts/UserProvider";
import { useContractContext } from "$/contexts/ContractProvider";

export const useMintHandler = () => {
  const { address } = useUserContext();
  const { setMinted, setMintedId, minted } = useContractContext();
  const { showErrorSnackbar, showSuccessSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const contract = useContract();

  const handleMint = async () => {
    if (!contract || !address) return;

    setIsLoading(true);

    try {
      const price = await contract.price();
      const tx = await contract.mint(address, { value: price });
      await tx.wait();

      const mintedId = inc(minted);
      setMintedId(mintedId);
      setMinted(mintedId);

      showSuccessSnackbar("Все пройшло успішно!");
    } catch (error) {
      showErrorSnackbar(pathOr("Виникла помилка", ["data", "message"], error));
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    handleMint,
  };
};
