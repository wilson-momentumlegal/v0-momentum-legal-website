import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Representative Transaction Experience | Momentum Legal",
  description:
    "Selected M&A, venture financing, growth equity, and investor-side transaction experience from Momentum Legal founder Wilson Hall.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Representative Transaction Experience | Momentum Legal",
    description:
      "Selected M&A, venture financing, growth equity, and investor-side transaction experience.",
    url: "/experience",
    type: "website",
  },
}

export default function ExperienceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
