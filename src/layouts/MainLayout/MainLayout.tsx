import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import { MUITheme } from "$/constants/styles";
import { Web3Provider } from "$/contexts/Web3Provider";
import { UserProvider } from "$/contexts/UserProvider";
import { SnackbarProvider } from "$/components/EnhancedSnackbar/context";
import { Header } from "$/components/Header";
import { Version } from "$/components/Version";
import { ProgressBar } from "$/components/ProgressBar";
import { ModalProvider } from "$/components/Modal/context";

interface IProps {
  emotionCache: EmotionCache;
}

export const MainLayout: ReactFCWithChildrenProp<IProps> = (props) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={props.emotionCache}>
      <MUIThemeProvider theme={MUITheme}>
        <CssBaseline />
        <UserProvider>
          <Web3Provider>
            <SnackbarProvider>
              <ModalProvider>
                <Stack alignItems="center">
                  <ProgressBar />
                  <Header />
                  <Box component="main" px={2} maxWidth={1024} pt={10} pb={4}>
                    {props.children}
                  </Box>
                  <Box display="flex" justifyContent="center" mb={4}>
                    <Version />
                  </Box>
                </Stack>
              </ModalProvider>
            </SnackbarProvider>
          </Web3Provider>
        </UserProvider>
      </MUIThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
