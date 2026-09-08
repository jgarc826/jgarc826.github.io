import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jessy Garcia",
  description:
    "Personal site of Jessy Garcia — computer science student at UC Riverside.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
