import { Theme, alpha } from "@mui/material/styles";

export const generateTransparentBgColor = (theme: Theme) =>
  alpha(theme.palette.background.default, 0.5);
