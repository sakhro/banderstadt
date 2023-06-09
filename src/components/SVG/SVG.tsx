import React from "react";
import styled from "@emotion/styled";
import InlineSVG from "react-inlinesvg";
import prop from "ramda/src/prop";
import { COLOR_PRIMARY } from "../../constants/styles";

export interface IProps {
  size?: number;
  color?: string;
  src: string;
  style?: React.CSSProperties;
}

const StyledWrapper = styled.div<{
  size: number | undefined;
  color: string | undefined;
}>`
  display: inline-flex;
  align-items: center;

  & svg {
    width: ${prop("size")}px;
    height: ${prop("size")}px;

    & path,
    & circle {
      stroke: ${prop("color")};
    }
  }
`;

export const SVG: React.FC<IProps> = (props) => (
  <StyledWrapper size={props.size} color={props.color}>
    <InlineSVG src={props.src} style={props.style} />
  </StyledWrapper>
);

SVG.defaultProps = {
  size: 32,
  color: COLOR_PRIMARY,
};
