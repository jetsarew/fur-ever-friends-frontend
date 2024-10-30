import type { Metadata } from "next";
import "./globals.css";
import TanstackProvider from "@/provider/tanstack.provider";
import StoreProvider from "@/provider/store.provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Fur-ever-friends",
};

export default function RootLayout({
  children,
  compose
}: Readonly<{
  children: React.ReactNode;
  compose: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white">
        <TanstackProvider>
          <StoreProvider>
            <Toaster />
            <main className="w-[1154px] mx-auto mt-16 pt-9">
              {children}
              {compose}
            </main>
          </StoreProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
