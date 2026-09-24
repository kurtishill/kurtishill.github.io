import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kurtishill.github.io"),
  title: "Kurt Hill — Mobile Architect & Product Engineer",
  description:
    "Kurt Hill is a senior mobile architect and full-stack product engineer specializing in Flutter, Firebase, TypeScript, and cloud systems.",
  openGraph: {
    title: "Kurt Hill — Mobile Architect & Product Engineer",
    description: "Thoughtful mobile products backed by strong architecture.",
    type: "website",
    url: "/",
  },
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
};

export const viewport: Viewport = { themeColor: "#0b1312" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
