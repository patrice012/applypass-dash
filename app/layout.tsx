import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

import { Provider } from "@/provider";

const SpaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SpaceGrotesk.className} antialiased`}>
        <Provider>
          <TooltipProvider>{children}</TooltipProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
