import { useMemo, useState } from "react";
import { createContext } from "$/helpers/createContext";

interface IFileContext {
  file?: File;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const [FileContext, useFileContext] = createContext<IFileContext>();

export const FileContextProvider: ReactFCWithChildrenProp = (props) => {
  const [file, setFile] = useState<File>();

  const value = useMemo(
    () => ({
      file,
      setFile,
    }),
    [file]
  );

  return <FileContext.Provider {...props} value={value} />;
};

export { FileContext, useFileContext };
