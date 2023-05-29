import { Montserrat } from "next/font/google";

import { Header } from "$/components/Header";

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
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="px-4 py-8 sm:max-md:py-4 flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
