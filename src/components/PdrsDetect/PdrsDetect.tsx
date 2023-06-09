import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { UploadSection } from "$/components/UploadSection";
import { Video } from "$/components/Video";
import { DEMO_VIDEO_PATH } from "$/constants/common";
import { useFileContext } from "$/contexts/FileContext/FileContext";
import { ObjectDetection } from "$/components/ObjectDetection";
import { flexCenterStyles } from "$/constants/styles";
import { generateTransparentBgColor } from "$/helpers/generateTransparentBgColor";

export const PdrsDetect = () => {
  const { file } = useFileContext();

  return (
    <Stack spacing={4} alignItems="center">
      {!!file && <ObjectDetection url={URL.createObjectURL(file)} />}
      {!file && (
        <Box position="relative" height="100%">
          <Video
            src={DEMO_VIDEO_PATH}
            sx={{ height: "100%", objectFit: "cover" }}
          />
          <Box
            top={0}
            left={0}
            right={0}
            bottom={0}
            position="absolute"
            sx={flexCenterStyles}
            bgcolor={generateTransparentBgColor}
          >
            <UploadSection />
          </Box>
        </Box>
      )}
      {!!file && <UploadSection />}
    </Stack>
  );
};
