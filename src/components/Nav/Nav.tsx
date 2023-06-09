import { Link } from "$/components/Link";
import { SVG } from "$/components/SVG";
import { NAV } from "$/constants/navigation";
import Stack from "@mui/material/Stack";
import { unstyledListStyles } from "$/constants/styles";

import packageJSON from "../../../package.json";

export const Nav = () => (
  <nav>
    <Stack
      direction="row"
      sx={unstyledListStyles}
      spacing={2}
      alignItems="center"
    >
      <li>
        <Link href={NAV.PDRS_DETECT}>Пдрс Детект</Link>
      </li>
      <li>
        <Link href={NAV.NFTS}>NFTs</Link>
      </li>
      <li>
        <Link noLinkStyle target="_blank" href={packageJSON.repository}>
          <SVG src="/static/icons/github.svg" />
        </Link>
      </li>
    </Stack>
  </nav>
);
