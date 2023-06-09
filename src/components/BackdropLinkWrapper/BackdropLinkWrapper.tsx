import styled from "@emotion/styled";
import { Link } from "$/components/Link";
import { flexCenterStyles } from "$/constants/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { generateTransparentBgColor } from "$/helpers/generateTransparentBgColor";

interface IProps {
  href: string;
  title?: string;
  subtitle?: string;
}

const StyledLink = styled(Link)`
  height: 100%;
  display: block;
`;

export const BackdropLinkWrapper: ReactFCWithChildrenProp<IProps> = (props) => {
  return (
    <StyledLink href={props.href}>
      <Box position="relative" borderRadius={2} overflow="hidden" height="100%">
        <Box
          top={0}
          left={0}
          right={0}
          bottom={0}
          position="absolute"
          sx={flexCenterStyles}
          flexDirection="column"
          bgcolor={generateTransparentBgColor}
        >
          {props.title && (
            <Typography
              gutterBottom
              variant="h4"
              align="center"
              color={(theme) => theme.palette.text.primary}
            >
              {props.title}
            </Typography>
          )}
          {props.subtitle && (
            <Typography
              color={(theme) => theme.palette.text.primary}
              align="center"
            >
              {props.subtitle}
            </Typography>
          )}
        </Box>
        {props.children}
      </Box>
    </StyledLink>
  );
};
