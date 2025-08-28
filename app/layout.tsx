import type React from "react"
import type { Metadata } from "next"
import type { Viewport } from "next"
import { Roboto } from "next/font/google";
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // choose the weights you need
});

export const metadata: Metadata = {
  title: "Lutong Ilocano Litson - Authentic Ilocano Cuisine & Roasted Pig",
  description:
    "Experience authentic Ilocano cuisine with our signature roasted pig, Dinuguan, Pork Sisig, Bagnet, and traditional favorites made with the freshest ingredients.",
  icons: {
    icon: '/images/litson-logo.jpg',
    shortcut: '/images/litson-logo.jpg',
    apple: '/images/litson-logo.jpg',
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.className} antialiased`}>
      <head>
        <link rel="icon" href="/images/litson-logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
