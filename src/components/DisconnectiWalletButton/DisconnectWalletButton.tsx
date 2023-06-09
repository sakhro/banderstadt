import Button from "@mui/material/Button";

import { useLogout } from "./useLogout";

export const DisconnectWalletButton = () => {
  const logout = useLogout();

  return (
    <Button onClick={logout} variant="outlined">
      Відключити гаманець
    </Button>
  );
};
