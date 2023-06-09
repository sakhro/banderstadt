import { createEmotionCache } from "$/helpers/createEmotionCache";
import { MainLayout } from "$/layouts/MainLayout";

import "./global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <MainLayout emotionCache={emotionCache}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
