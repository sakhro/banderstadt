import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

import abi from "../../public/static/contract/abi.json";

Moralis.start({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
});

export const runContractTotalSupply = async (address: string) => {
  try {
    const response = await Moralis.EvmApi.utils.runContractFunction({
      abi,
      address,
      chain: EvmChain.BSC,
      functionName: "totalSupply",
    });

    return Number(response.toJSON());
  } catch (error) {
    throw error;
  }
};
