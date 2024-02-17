import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
 });

export const metadata = {
  title: "Citizen Remote",
  description: "test page for citizen remote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="preload"
          fetchPriority="high"
          href="bg.webp"
          as="image"
          type="image/png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
