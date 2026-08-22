import type { Metadata } from "next";
import InfraClient from "./InfraClient";

export const metadata: Metadata = {
  title: "Infrastructure Development Services",
  description:
    "NRK Construction Company delivers comprehensive infrastructure development – RCC roads, control rooms, powerhouses, cable trenches, and complete civil infrastructure for power sector projects across India.",
  alternates: {
    canonical: "https://www.nrkcompany.com/services/infrastructure",
  },
  openGraph: {
    title: "Infrastructure Development | NRK Construction Company",
    description:
      "RCC roads, powerhouses, control rooms, and complete civil infrastructure for power sector projects across India.",
    url: "https://www.nrkcompany.com/services/infrastructure",
  },
};

export default function InfrastructurePage() {
  return <InfraClient />;
}
