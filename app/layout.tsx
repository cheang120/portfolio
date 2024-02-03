import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";
import { Provider } from "@/components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Carrey's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="google-site-verification" content="2q1qz8bYmMFIN4lqP0ncJA3oYoEhSDtb5ERPBcTpHcA" />
      <body className={`inter.className   ${manrope.className}`}>
      <Provider>
        {/* Next top loader */}
        <NextTopLoader color="#5700ff" showSpinner={false} />
        {/* Init aos */}
        <AOSInit />
          <Header href={""} label={""} />
          {children}
          <Footer />
        </Provider>
        
      </body>
    </html>
  );
}
