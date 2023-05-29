import { Ref, useRef } from "react";

interface IProps {
  onUpload: React.ChangeEventHandler<HTMLInputElement>;
}

export const UploadButton: React.FC<IProps> = (props) => {
  const inputRef = useRef<Ref<HTMLInputElement>>(null);

  const onClick = () => {
    if (!inputRef.current) return;

    (inputRef.current as any).click();
  };

  return (
    <>
      <input
        type="file"
        accept="video/*"
        onChange={props.onUpload}
        style={{ display: "none" }}
        ref={inputRef as Ref<HTMLInputElement>}
      />
      <button onClick={onClick}>Open Video</button>
    </>
  );
};
