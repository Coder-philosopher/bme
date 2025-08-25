import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers"; // contains QueryClientProvider wrapper
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "sonner"; // sonner toast

import { Nunito } from 'next/font/google'
 
const roboto = Nunito({
  weight: '400',
  subsets: ['latin'],
})

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
      className={roboto.className}
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