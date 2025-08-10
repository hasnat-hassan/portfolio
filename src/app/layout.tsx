import type { Metadata } from "next";
import { Poppins, Jost } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import ResourcePreloader from "../components/ResourcePreloader";

// Optimized font loading
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Hasnat Hassan - Frontend Web Developer",
  description: "Portfolio of Hasnat Hassan, a Frontend Web Developer specializing in React.js, Next.js, and Tailwind CSS",
  keywords: ["Frontend Developer", "React.js", "Next.js", "Tailwind CSS", "TypeScript", "Web Development"],
  authors: [{ name: "Hasnat Hassan" }],
  creator: "Hasnat Hassan",
  openGraph: {
    title: "Hasnat Hassan - Frontend Web Developer",
    description: "Portfolio of Hasnat Hassan, a Frontend Web Developer specializing in React.js, Next.js, and Tailwind CSS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnat Hassan - Frontend Web Developer",
    description: "Portfolio of Hasnat Hassan, a Frontend Web Developer specializing in React.js, Next.js, and Tailwind CSS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jost.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/Logo4.png" as="image" type="image/png" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Viewport meta tag for proper responsive behavior */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Theme initialization script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <ResourcePreloader />
      </head>
      <body className={`antialiased ${poppins.variable} ${jost.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
