"use client";
import { useDropzone } from "react-dropzone";
import { ReactSVG } from "react-svg";
import compose from "ramda/es/compose";
import path from "ramda/es/path";
import clsx from "clsx";

import { useFileContext } from "$/contexts/FileContext/FileContext";

import styles from "./UploadSection.module.css";

interface IProps {
  className?: string;
}

export const UploadSection: React.FC<IProps> = (props) => {
  const { setFile } = useFileContext();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: compose(setFile, path([0])),
    multiple: false,
  });

  return (
    <div
      className={clsx(
        "w-full h-full flex gap-2 flex-col justify-center items-center cursor-pointer",
        props.className
      )}
      {...getRootProps()}
    >
      <ReactSVG src="/static/icons/upload.svg" className={styles.icon} />
      <input {...getInputProps()} />
      <p className="text-white text-center px-4 pb-4">
        Drag {"'n'"} drop some files here, or click to select files
      </p>
    </div>
  );
};
