'use client'
import React, { useEffect } from "react";
import Home1 from "./home-cmp/Home1";
import Home2 from "./home-cmp/Home2";
import Home7 from "./home-cmp/Home7";
import Home3 from "./home-cmp/Home3";
import Home4 from "./home-cmp/Home4";
import Home5 from "./home-cmp/Home5";
import Home6 from "./home-cmp/Home6";

function Home() {
  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
    </>
  );
}

export default Home;
