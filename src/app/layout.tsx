import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "英语小镇 · English Town — 在场景中练真英语",
  description: "英语小镇 · English Town — 在场景中练真英语",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
