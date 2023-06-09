import Typography from "@mui/material/Typography";
import packageJson from "../../../package.json";

export const Version = () => (
  <Typography variant="caption">v{packageJson.version}</Typography>
);
