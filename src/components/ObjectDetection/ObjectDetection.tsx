import { useRef } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { Video } from "$/components/Video";
import { useTFModel } from "$/hooks/useTFModel";
import { detectVideo } from "$/services/tf/detectVideo";

interface IProps {
  url: string;
}

export const ObjectDetection: React.FC<IProps> = (props) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const model = useTFModel();

  const handleDetect = () =>
    detectVideo(model, videoRef.current, canvasRef.current);

  return (
    <>
      {!model.net && <Skeleton variant="rounded" height={360} width="100%" />}
      {model.net && (
        <Box position="relative" width="fit-content">
          <Video
            ref={videoRef}
            src={props.url}
            onPlay={handleDetect}
            sx={{ maxHeight: 600, width: "100%" }}
          />
          <Box
            top={0}
            left={0}
            ref={canvasRef}
            component="canvas"
            position="absolute"
            width="100%"
            height="100%"
          />
        </Box>
      )}
    </>
  );
};
