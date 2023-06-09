import React from "react";
import styled from "@emotion/styled";

import NoSsr from "@mui/material/NoSsr";
import LinearProgress from "@mui/material/LinearProgress";

import { useProgressHandler } from "./useProgressHandler";

const StyledProgressWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.theme.spacing(0.375)};
  z-index: ${(props) => props.theme.zIndex.tooltip};
`;

export const ProgressBar: React.FC = () => {
  const { visible } = useProgressHandler();

  return (
    <NoSsr>
      {visible && (
        <StyledProgressWrapper>
          <LinearProgress />
        </StyledProgressWrapper>
      )}
    </NoSsr>
  );
};
