import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Violences Relationnelles",
  description: "Site informatif sur les violences relationnelles — projet de fin d'études",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
