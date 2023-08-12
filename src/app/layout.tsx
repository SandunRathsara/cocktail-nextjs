import type { Metadata } from "next"
import { Handlee } from "next/font/google"
import { ReactNode } from "react"

const font = Handlee({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cocktails",
  description: "The Cocktails Database"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={font.className}>{children}</body>
    </html>
  )
}
