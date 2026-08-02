import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solid Space's Interior Design | Building Spaces. Creating Legacies.",
  description:
    "From concept to creation, we deliver exceptional construction and interior solutions that blend creativity, quality, and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
