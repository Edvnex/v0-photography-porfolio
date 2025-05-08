import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimalist Photography",
  description: "A minimalist photography portfolio website",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Minimalist Photography. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
