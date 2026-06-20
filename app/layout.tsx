import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nero11Vision — Forever Mode Learning",
  description:
    "A quantum-AI powered cultural learning universe. Emotionally intelligent, creative, and forever evolving. Enter God-Mode and learn forever.",
  keywords: [
    "Nero11Vision",
    "AI learning",
    "cultural intelligence",
    "creative labs",
    "forever learning",
  ],
  openGraph: {
    title: "Nero11Vision — Forever Mode Learning",
    description:
      "A quantum-AI powered cultural learning universe. Emotionally intelligent, creative, and forever evolving.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0612",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
