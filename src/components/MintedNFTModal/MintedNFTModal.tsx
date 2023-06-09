import React from "react";

import { Modal } from "$/components/Modal";
import { Image } from "$/components/Image";
import { handleIpfsUrl } from "$/helpers/handleIpfsUrl";

import { useNftModal } from "./useNftModal";

export const MintedNFTModal: React.FC = () => {
  const { imageSrc } = useNftModal();

  return (
    <Modal maxWidth="md" title="Ви щойно отримали нового козака!">
      {imageSrc && (
        <Image
          alt="Cossack"
          width={500}
          height={500}
          src={handleIpfsUrl(imageSrc)}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
        />
      )}
    </Modal>
  );
};
