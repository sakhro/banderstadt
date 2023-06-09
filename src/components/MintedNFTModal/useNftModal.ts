import { useEffect, useState } from "react";
import axios from "axios";

import { useContract } from "$/hooks/useContract";
import { useModalContext } from "$/components/Modal/context";
import { handleIpfsUrl } from "$/helpers/handleIpfsUrl";
import { useContractContext } from "$/contexts/ContractProvider";

export const useNftModal = () => {
  const contract = useContract();
  const { mintedId } = useContractContext();
  const [imageSrc, setImageSrc] = useState<string>();
  const { setIsOpen } = useModalContext();

  useEffect(() => {
    if (!contract || !mintedId) {
      return;
    }

    const getTokenUri = async () => {
      const tokenUri = await contract.tokenURI(mintedId);

      const metadata = await axios(handleIpfsUrl(tokenUri));

      setImageSrc(metadata.data.image);
    };

    getTokenUri();
  }, [contract, mintedId]);

  useEffect(() => {
    setIsOpen(!!imageSrc);
  }, [imageSrc, setIsOpen]);

  return {
    imageSrc,
  };
};
