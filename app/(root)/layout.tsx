import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "./provider";
import LeftSidebar from "@/components/shared/LeftSidebar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main className="flex">
          <LeftSidebar />

          <section className="main-container">
            <div className="w-full max-w-4xl">
              <Providers>
                {children}
              </Providers>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
