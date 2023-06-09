import { Link } from "$/components/Link";
import { Logo } from "$/components/Logo";
import { Nav } from "$/components/Nav";
import { NAV } from "$/constants/navigation";
import { useMediaQuery } from "$/hooks/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const Header = () => {
  const { isUpSm } = useMediaQuery();

  return (
    <AppBar color="default">
      <Toolbar variant="dense">
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item xs>
            <Link href={NAV.HOME} display="inline-flex" alignItems="center">
              <Logo />
              {isUpSm && <Box ml={1}>BANDERSTADT</Box>}
            </Link>
          </Grid>
          <Grid item>
            <Nav />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
