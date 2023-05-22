import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
