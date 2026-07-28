import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academic Projects",
  description:
    "Academic projects in machine learning and interactive data visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
