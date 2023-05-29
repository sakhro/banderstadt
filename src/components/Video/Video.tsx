"use client";

import clsx from "clsx";
import { forwardRef } from "react";

interface IProps {
  src: string;
  className?: string;
  controls?: boolean;
  onPlay?: VoidFunction;
  onTimeUpdate?: VoidFunction;
  ref?: React.Ref<HTMLVideoElement>;
}

export const Video: React.FC<IProps> = forwardRef<HTMLVideoElement, IProps>(
  (props, ref) => (
    <video
      loop
      muted
      playsInline
      autoPlay
      ref={ref}
      width="100%"
      height="auto"
      src={props.src}
      onPlay={props.onPlay}
      controls={props.controls}
      onTimeUpdate={props.onTimeUpdate}
      className={clsx(
        "rounded-2xl overflow-hidden min-w-full",
        props.className
      )}
    />
  )
);

Video.displayName = "Video";
