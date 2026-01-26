import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageTransition } from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varko.app'), // Placeholder production domain
  title: {
    default: "VARKO",
    template: "%s | VARKO"
  },
  description: "Sistema Estratégico Interno. No es marketing, es estructura.",
  openGraph: {
    title: "VARKO",
    description: "Sistema Estratégico Interno",
    url: 'https://varko.app',
    siteName: 'VARKO',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VARKO",
    description: "Sistema Estratégico Interno",
  },
  robots: {
    index: false,
    follow: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VARKO',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { FloatingMenu } from "@/components/FloatingMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-foreground selection:bg-emerald-500 selection:text-black tracking-tight`}
        suppressHydrationWarning
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <MobileNav />
          <FloatingMenu />
          <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 pb-32 md:pb-12 lg:pb-16 transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
