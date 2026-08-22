import type { Metadata } from "next";
import AisClient from "./AisClient";

export const metadata: Metadata = {
  title: "AIS, GIS & GSS Substation Civil Works",
  description:
    "NRK Construction Company provides end-to-end civil construction for AIS, GIS, and GSS substations from 33kV to 765kV, including CRB, boundary walls, cable trenches, auxiliary foundations, and RCC roads.",
  alternates: {
    canonical: "https://www.nrkcompany.com/services/ais-gis-gss",
  },
  openGraph: {
    title: "AIS, GIS & GSS Substation Civil Works | NRK Construction",
    description:
      "Complete civil construction services for AIS, GIS, and GSS substations (33kV–765kV). CRB, trenches, foundations, and roads.",
    url: "https://www.nrkcompany.com/services/ais-gis-gss",
  },
};

export default function AisGisGssPage() {
  return <AisClient />;
}
