import { BackdropLinkWrapper } from "$/components/BackdropLinkWrapper";
import { Image } from "$/components/Image";
import { Video } from "$/components/Video";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { NAV } from "$/constants/navigation";
import Grid from "@mui/material/Grid";

import NFT_COVER from "../../../public/static/images/nfts-cover.png";

export const HomePage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <BackdropLinkWrapper
          href={NAV.PDRS_DETECT}
          title="Пдрс Детект"
          subtitle="Завантажте відео з дрону і програма визначить місцезнаходження окупанта(-ів)"
        >
          <Video
            src={DEMO_VIDEO_PATH}
            sx={{ height: "100%", objectFit: "cover" }}
          />
        </BackdropLinkWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <BackdropLinkWrapper
          href={NAV.NFTS}
          title="NFTs"
          subtitle={`Авторська колекція NFTs, для підтримки фонду "Повернись Живим"`}
        >
          <Image
            alt="Cossacs"
            src={NFT_COVER}
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
          />
        </BackdropLinkWrapper>
      </Grid>
    </Grid>
  );
};
