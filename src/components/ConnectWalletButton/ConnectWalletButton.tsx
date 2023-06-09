import React from "react";
import Button from "@mui/material/Button";

import { Image } from "$/components/Image";

import { useModalContext } from "../Modal/context";
import { WalletsModal } from "../WalletsModal";

const ICON_SIZE = 21;

export const ConnectWalletButton: ReactFCWithChildrenProp = (props) => {
  const { setIsOpen } = useModalContext();

  const handleClick = () => setIsOpen(true);

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        onClick={handleClick}
        endIcon={
          <Image
            alt="Binance icon"
            height={ICON_SIZE}
            width={ICON_SIZE}
            src="/static/images/binance.svg"
          />
        }
        {...props}
      >
        Підключити гаманець
      </Button>
      <WalletsModal />
    </>
  );
};
