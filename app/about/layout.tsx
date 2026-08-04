import type { Metadata } from "next"

const title = "About Wilson Hall | Momentum Legal"
const description =
  "Learn about Momentum Legal founder Wilson Hall and his experience advising companies, investors, and participants across the technology, sports, and broader business landscape."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "Momentum Legal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
}

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
