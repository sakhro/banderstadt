import axios from "axios";
import compose from "ramda/src/compose";
import pathOr from "ramda/src/pathOr";
import gt from "ramda/src/gt";
import { INft } from "$/services/sqlite3";

import { Image } from "$/components/Image";
import { handleIpfsUrl } from "$/helpers/handleIpfsUrl";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { flexCenterStyles, unstyledListStyles } from "$/constants/styles";
import { Typography } from "@mui/material";
import { useMediaQuery } from "$/hooks/useMediaQuery";
import { useContractContext } from "$/contexts/ContractProvider";

export const CollectionNfts: React.FC = (props) => {
  const [nfts, setNfts] = useState<INft[]>([]);
  const { minted } = useContractContext();
  const { isUpMd, isUpLg } = useMediaQuery();

  useEffect(() => {
    axios<INft[]>("/api/nfts").then(compose(setNfts, pathOr([], ["data"])));
  }, []);

  const mintedNfts = nfts.filter(compose(gt(minted), pathOr(0, ["id"])));

  const imgSize = isUpLg ? 200 : isUpMd ? 300 : 400;

  return (
    <Grid container spacing={2} component="ul" sx={unstyledListStyles}>
      {mintedNfts.map((nft) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={nft.id}
          component="li"
          sx={flexCenterStyles}
          flexDirection="column"
        >
          <Image
            width={imgSize}
            height={imgSize}
            alt={nft.name}
            src={handleIpfsUrl(nft.image)}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: 8,
              overflow: "hidden",
            }}
          />
          <Typography variant="subtitle1" mt={1}>
            {nft.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Раритетний ранг #{nft.rarity_rank}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
