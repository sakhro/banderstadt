import { PdrsDetect } from "$/components/PdrsDetect";
import { FileContextProvider } from "$/contexts/FileContext/FileContext";

export default function PdrsDetectPage() {
  return (
    <FileContextProvider>
      <PdrsDetect />
    </FileContextProvider>
  );
}
