import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useDropzone } from "react-dropzone";
import compose from "ramda/es/compose";
import path from "ramda/es/path";

import { useFileContext } from "$/contexts/FileContext/FileContext";
import { SVG } from "$/components/SVG";

export const UploadSection: React.FC = (props) => {
  const { setFile } = useFileContext();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: compose(setFile, path([0])),
    multiple: false,
  });

  return (
    <Stack
      spacing={1}
      cursor="pointer"
      alignItems="center"
      {...(getRootProps() as any)}
    >
      <SVG src="/static/icons/upload.svg" color="white" size={70} />
      <input {...getInputProps()} />
      <Typography align="center">
        Перетягніть файли сюди або натисніть, щоб обрати файли
      </Typography>
    </Stack>
  );
};
