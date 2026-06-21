import type { Metadata, Viewport } from "next"
import { Oswald, Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nero11Vision — The Forever-Learning Culture Engine",
  description:
    "ATL street-born, quantum-AI powered. A free-forever God Mode learning universe built for disadvantaged communities and global expansion. Powered by BLACKCATALYST100.",
  keywords: [
    "Nero11Vision",
    "BLACKCATALYST100",
    "BC100",
    "AI mentor",
    "cultural learning",
    "forever learning",
    "street leadership",
    "ATL",
  ],
  openGraph: {
    title: "Nero11Vision — The Forever-Learning Culture Engine",
    description:
      "ATL street-born, quantum-AI powered. A free-forever God Mode learning universe built to evolve with you.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0806",
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
        <SpeedInsights />
      </body>
    </html>
  )
}
