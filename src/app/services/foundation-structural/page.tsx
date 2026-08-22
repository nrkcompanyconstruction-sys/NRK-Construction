import type { Metadata } from "next";
import FoundationClient from "./FoundationClient";

export const metadata: Metadata = {
  title: "Foundation & Structural Civil Works",
  description:
    "NRK Construction Company specializes in foundation and structural civil works for power substations and industrial projects – including deep foundations, structural concrete, and earthwork across India.",
  alternates: {
    canonical: "https://www.nrkcompany.com/services/foundation-structural",
  },
  openGraph: {
    title: "Foundation & Structural Civil Works | NRK Construction",
    description:
      "Expert foundation and structural concrete work for power substations and industrial facilities across India.",
    url: "https://www.nrkcompany.com/services/foundation-structural",
  },
};

export default function FoundationStructuralPage() {
  return <FoundationClient />;
}
