import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cooper Portfolio",
  description:
    "Cooper's portfolio in data analytics, business intelligence and machine learning.",
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
