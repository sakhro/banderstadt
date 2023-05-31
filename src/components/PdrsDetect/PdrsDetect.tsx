"use client";
import { UploadSection } from "$/components/UploadSection";
import { Video } from "$/components/Video";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { useFileContext } from "$/contexts/FileContext/FileContext";
import { ObjectDetection } from "$/components/ObjectDetection";

export const PdrsDetect = () => {
  const { file } = useFileContext();

  return (
    <div className="flex-col flex gap-8 w-full items-center">
      {!!file && (
        <div className="flex-auto">
          <ObjectDetection url={URL.createObjectURL(file)} />
        </div>
      )}
      {!file && (
        <div className="flex-auto relative">
          <Video src={DEMO_VIDEO_PATH} />
          <div className="absolute left-0 right-0 bottom-0 top-0">
            <UploadSection className="bg-black/80 hover:bg-black/70" />
          </div>
        </div>
      )}
      {!!file && (
        <div className="flex-auto">
          <UploadSection className="bg-white/10 hover:bg-white/5 rounded-3xl p-4" />
        </div>
      )}
    </div>
  );
};
