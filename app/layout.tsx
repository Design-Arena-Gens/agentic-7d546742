import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Lion Majestueux</title>
        <meta
          name="description"
          content="Une image haute résolution d'un lion majestueux."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
