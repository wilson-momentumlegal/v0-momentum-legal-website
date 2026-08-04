import type { Metadata } from "next"
import { ServiceDetailPage } from "@/components/ServiceDetailPage"
import { servicePageData } from "@/lib/service-page-data"

const data = servicePageData["brand-sponsor"]

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: { canonical: `/services/${data.slug}` },
  openGraph: { title: data.seoTitle, description: data.seoDescription, url: `/services/${data.slug}`, type: "website" },
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
