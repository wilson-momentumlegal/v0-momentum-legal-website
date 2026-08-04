import type { Metadata } from "next"

const title = "Contact Momentum Legal | Business & Transaction Counsel"
const description =
  "Contact Momentum Legal to discuss corporate, venture, commercial, technology, Sports, NIL, or institutional legal counsel."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName: "Momentum Legal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
