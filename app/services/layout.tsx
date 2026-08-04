import type { Metadata } from "next"

const title = "Corporate, Commercial & Sports Legal Services | Momentum Legal"
const description =
  "Explore corporate, venture, commercial, and technology transaction counsel for companies and investors, plus dedicated Sports and NIL legal services."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: "/services",
    siteName: "Momentum Legal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
}

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
