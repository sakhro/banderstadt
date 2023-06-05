import { Video } from "$/components/Video";
import { VideoLinkWrapper } from "$/components/VideoLinkWrapper";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { NAV } from "$/constants/navigation";

export default function HomePage() {
  return (
    <section className="max-w-5xl w-full">
      <VideoLinkWrapper
        href={NAV.PDRS_DETECT}
        title="Пдрс Детект"
        subtitle="Завантажте відео з дрону і програма визначить місцезнаходження окупанта(-ів)"
      >
        <Video src={DEMO_VIDEO_PATH} />
      </VideoLinkWrapper>
    </section>
  );
}
