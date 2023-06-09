import { Video } from "$/components/Video";
import { BackdropLinkWrapper } from "$/components/BackdropLinkWrapper";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { NAV } from "$/constants/navigation";
import { Image } from "$/components/Image";

import NFT_COVER from "../../public/static/images/nfts-cover.png";

export default function HomePage() {
  return (
    <section className="max-w-7xl w-full flex flex-col gap-6 md:flex-row">
      <div className="flex-1">
        <BackdropLinkWrapper
          href={NAV.PDRS_DETECT}
          title="Пдрс Детект"
          subtitle="Завантажте відео з дрону і програма визначить місцезнаходження окупанта(-ів)"
        >
          <Video src={DEMO_VIDEO_PATH} className="h-full object-cover" />
        </BackdropLinkWrapper>
      </div>
      <div className="flex-1">
        <BackdropLinkWrapper
          href={NAV.NFTS}
          title="NFTs"
          subtitle={`Авторська колекція NFTs, для підтримки фонду "Повернись Живим"`}
        >
          <Image
            src={NFT_COVER}
            alt="Cossacs"
            className="h-full object-cover rounded-2xl overflow-hidden"
          />
        </BackdropLinkWrapper>
      </div>
    </section>
  );
}
