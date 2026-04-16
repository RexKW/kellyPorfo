'use client'

import Image from "next/image";
import Navbar from "../components/home/navbar";
import { useRef } from "react";
import { useHomeAnimation } from "../public/hooks/homeAnimation";
import Link from "next/link";
import PortfolioHeader from "../components/home/portfolioHeader";
import Footer from "../components/home/footer";
import Projects from "../components/home/projects";
import About from "../components/home/about";

export default function Home() {
  useHomeAnimation();

  return (
    <div className="flex flex-col items-center bg-white overflow-x-hidden relative">
      <Navbar />
      <About/>
      <PortfolioHeader/>
      <Projects/>
    </div>

  );
}
