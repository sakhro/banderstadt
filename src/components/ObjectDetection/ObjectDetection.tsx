"use client";

import { useRef } from "react";

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
    <div className="relative">
      {model.net && (
        <>
          <Video
            ref={videoRef}
            src={props.url}
            className="w-full max-h-[600px]"
            onPlay={handleDetect}
          />
          <canvas
            ref={canvasRef}
            width={model.inputShape[1]}
            height={model.inputShape[2]}
            className="absolute top-0 left-0 w-full h-full"
          />
        </>
      )}
    </div>
  );
};
