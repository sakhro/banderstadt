import { Video } from "$/components/Video";
import { VideoLinkWrapper } from "$/components/VideoLinkWrapper";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { NAV } from "$/constants/navigation";

export default function HomePage() {
  return (
    <section className="max-w-5xl">
      <VideoLinkWrapper href={NAV.PDRS_DETECT} title="Pdrs Detect">
        <Video src={DEMO_VIDEO_PATH} />
      </VideoLinkWrapper>
    </section>
  );
}
