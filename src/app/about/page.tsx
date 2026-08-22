import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NRK Construction Company – specialists in civil works for power substations across India. With nearly 20 years of team experience across 33kV to 400kV projects, we deliver dependable substation and infrastructure construction.",
  alternates: {
    canonical: "https://www.nrkcompany.com/about",
  },
  openGraph: {
    title: "About NRK Construction Company",
    description:
      "Nearly 20 years of team experience in civil works for 33kV–400kV power substations across India.",
    url: "https://www.nrkcompany.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
