import type { Metadata } from "next";
import { Playfair_Display, Roboto, Nunito_Sans } from "next/font/google";
import "./globals.css";

import Providers from "./providers"; // contains QueryClientProvider wrapper
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "sonner"; // sonner toast

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights as Roboto requires them
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Department of Biomedical Engineering | NIT Raipur",
  description:
    "Advancing healthcare through engineering excellence and innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} ${nunitoSans.variable} antialiased`}
      >
        <Providers>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          
            <Sonner richColors position="bottom-right" />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}