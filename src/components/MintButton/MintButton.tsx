import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import { useMintHandler } from "./useMintHandler";
import { MintedNFTModal } from "../MintedNFTModal";

export const DEFAULT_CURRENCY_SYMBOL = "BNB";
export const NFT_PRICE = 0.05;

export const MintButton = () => {
  const { handleMint, isLoading } = useMintHandler();

  return (
    <>
      <LoadingButton
        variant="contained"
        onClick={handleMint}
        loading={isLoading}
      >
        Підтримати {NFT_PRICE} {DEFAULT_CURRENCY_SYMBOL}
      </LoadingButton>
      <MintedNFTModal />
    </>
  );
};
