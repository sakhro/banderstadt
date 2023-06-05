import { Montserrat } from "next/font/google";

import { Header } from "$/components/Header";
import { Version } from "$/components/Version";

const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

import "./global.css";

export const metadata = {
  title: "BANDERSTADT",
  description: "Glory for Ukraine!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${inter.className} bg-black text-white/80 pb-4`}>
        <Header />
        <main className="px-4 py-8 sm:max-md:py-4 flex justify-center">
          {children}
        </main>
        <footer>
          <Version />
        </footer>
      </body>
    </html>
  );
}
