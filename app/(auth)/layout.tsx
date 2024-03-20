import { ClerkProvider } from "@clerk/nextjs"
import { dark, neobrutalism } from '@clerk/themes';
import { Inter } from "next/font/google";

import '../globals.css'
import Providers from "../(root)/provider";

export const metadata = {
    title: 'TodoDash',
    description: 'A Next.js 14 Meta Knot',
}

const inter = Inter({ subsets: ['latin']});

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.className} h-screen py-5 flex justify-center items-center`}>
            <Providers>
             {children}
            </Providers>
            </body>
        </html>
      </ClerkProvider>
    )
  }