import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kirstein Genzen Nojapa - Virtual Assistant & Bookkeeper",
  description:
    "Professional Virtual Assistant and Bookkeeper with 4+ years of experience in QuickBooks, Xero, and financial management. Based in Butuan City, Philippines.",
  keywords: "Virtual Assistant, Bookkeeper, QuickBooks, Xero, Financial Management, Butuan City, Philippines",
  authors: [{ name: "Kirstein Genzen Nojapa" }],
  openGraph: {
    title: "Kirstein Genzen Nojapa - Virtual Assistant & Bookkeeper",
    description: "Professional Virtual Assistant and Bookkeeper with 4+ years of experience",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
