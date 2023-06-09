import { forwardRef } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material";

interface IProps {
  src: string;
  className?: string;
  controls?: boolean;
  onPlay?: VoidFunction;
  onTimeUpdate?: VoidFunction;
  ref?: React.Ref<HTMLVideoElement>;
  sx?: SxProps<Theme>;
}

export const Video: React.FC<IProps> = forwardRef<HTMLVideoElement, IProps>(
  (props, ref) => (
    <Box
      component="video"
      loop
      display="block"
      muted
      playsInline
      autoPlay
      ref={ref}
      width="100%"
      height="auto"
      sx={props.sx}
      minWidth="100%"
      src={props.src}
      onPlay={props.onPlay}
      controls={props.controls}
      onTimeUpdate={props.onTimeUpdate}
      className={props.className}
      borderRadius={2}
      overflow="hidden"
    />
  )
);

Video.displayName = "Video";
