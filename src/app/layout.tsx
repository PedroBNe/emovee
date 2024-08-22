import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Footer from "@/components/common/Footer/page";
import Header from "@/components/common/Header/page";
import WhatsButton from "@/components/common/WhatsButton/WhatsButton";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        <main>
          {children}
        </main>
        <WhatsButton />
        <Footer />
      </body>
    </html>
  );
}
