import { useCallback } from "react";
import mergeLeft from "ramda/src/mergeLeft";

import { AlertColor } from "@mui/material/Alert";

import { useSnackbarContext } from "$/components/EnhancedSnackbar/context";

export const useSnackbar = () => {
  const setSnackbarState = useSnackbarContext();

  const showSnackbar = useCallback(
    (type: AlertColor) => (message: string, action?: React.ReactNode[]) => {
      setSnackbarState({
        type,
        action,
        message,
        open: true,
      });
    },
    [setSnackbarState]
  );

  const closeSnackbar = () => {
    setSnackbarState(mergeLeft({ open: false }));
  };

  const showErrorSnackbar = useCallback(showSnackbar("error"), [showSnackbar]);

  const showSuccessSnackbar = useCallback(showSnackbar("success"), [
    showSnackbar,
  ]);

  const showInfoSnackbar = useCallback(showSnackbar("info"), [showSnackbar]);

  return {
    showInfoSnackbar,
    showErrorSnackbar,
    showSuccessSnackbar,
    closeSnackbar,
  };
};
