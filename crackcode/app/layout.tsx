import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CrackCode - Learn Coding Through Stories",
  description: "Learn coding through interactive story-based challenges",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white">{children}</body>
    </html>
  )
}
