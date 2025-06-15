import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Hasnat Hassan - Frontend Web Developer",
  description: "Portfolio of Hasnat Hassan, a Frontend Web Developer specializing in React.js, Next.js, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
