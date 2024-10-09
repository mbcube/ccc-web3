import type { Metadata } from "next";

import "./globals.css";
import { FONT_ORBITRON } from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Content Creator Circle",
  description:
    "Behind CCC, is a team of 100+ seasoned and experienced content creators who can leverage their reach and exposure to deliver your message.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Content Creator Circle",
    description:
      "Behind CCC, is a team of 100+ seasoned and experienced content creators who can leverage their reach and exposure to deliver your message.",
    url: process.env.APP_PATH,
    siteName: "Content Creator Circle",
    images: [
      {
        width: 655,
        height: 336,
        url: `${process.env.APP_PATH}/img/logo.jpg`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${FONT_ORBITRON.className} dark h-full`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
