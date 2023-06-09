import Stack from "@mui/material/Stack";
import { ConnectWalletButton } from "$/components/ConnectWalletButton";
import { useWeb3Context } from "$/contexts/Web3Provider";

import { DisconnectWalletButton } from "$/components/DisconnectiWalletButton";
import { MintButton } from "$/components/MintButton";

export const Web3Buttons = () => {
  const { provider } = useWeb3Context();

  return (
    <>
      {provider && (
        <Stack spacing={2}>
          <MintButton />
          <DisconnectWalletButton />
        </Stack>
      )}
      {!provider && <ConnectWalletButton />}
    </>
  );
};
