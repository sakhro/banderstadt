"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoDemo = () => (
  <ReactPlayer
    loop
    muted
    playing
    width="100%"
    height="auto"
    url="/static/videos/demo.mp4"
    className="rounded-2xl overflow-hidden min-w-full"
  />
);
