import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../store/Providers";
import { ReduxHydration } from "../store/ReduxHydration";
import "animate.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghibli Dashboard",
  description: "A beautiful dashboard of Studio Ghibli films",
  openGraph: {
    title: "Ghibli Dashboard",
    description: "A beautiful dashboard of Studio Ghibli films",
    url: "https://ghibli-dashboard.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://ghibli-dashboard.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview de la web",
      },
    ],
  },
  icons: {
    icon: "/ghibli-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}  antialiased`}>
        <Providers>
          <ReduxHydration></ReduxHydration>
          {children}
        </Providers>
      </body>
    </html>
  );
}
