import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore NRK Construction Company's portfolio of 38+ completed power infrastructure projects across India – including 132kV, 220kV, and 400kV substations for UPPTCL, HVPNL, BSPTCL, and more.",
  alternates: {
    canonical: "https://www.nrkcompany.com/projects",
  },
  openGraph: {
    title: "Our Projects | NRK Construction Company",
    description:
      "38+ completed substation and infrastructure projects across India for UPPTCL, HVPNL, BSPTCL, and leading private clients.",
    url: "https://www.nrkcompany.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
