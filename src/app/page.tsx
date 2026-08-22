import type { Metadata } from "next";
import Home from '@/components/home_components/Home'
import React from 'react'

export const metadata: Metadata = {
  title: "NRK Construction Company | Substation Civil Works & Power Infrastructure",
  description:
    "NRK Construction Company delivers expert civil works for AIS, GIS & GSS substations (33kV–400kV), powerhouse construction, RCC roads, and foundations across India. 38+ projects completed.",
  alternates: {
    canonical: "https://www.nrkcompany.com",
  },
};

function Root() {
  return (
    <Home />
  )
}

export default Root