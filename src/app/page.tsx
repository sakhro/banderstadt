import { VideoDemo } from "$/components/VideoDemo";
import { VideoLinkWrapper } from "$/components/VideoLinkWrapper";
import { NAV } from "$/constants/navigation";

export default function Home() {
  return (
    <main className="px-4 py-8 sm:max-md:py-4 flex justify-center">
      <section className="max-w-5xl">
        <VideoLinkWrapper href={NAV.PDRS_DETECT} title="Pdrs Detect">
          <VideoDemo />
        </VideoLinkWrapper>
      </section>
    </main>
  );
}
