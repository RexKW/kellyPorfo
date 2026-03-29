'use client'

import Image from "next/image";
import Navbar from "./components/navbar";
import { useRef } from "react";
import { useHomeAnimation } from "./hooks/homeAnimation";

export default function Home() {
  useHomeAnimation();

  return (
    <div  className="flex min-h-screen bg-white bg-cover bg-center bg-no-repeat bg-[url(/home/homeBG.png)] relative items-center justify-center overflow-hidden">
      <Navbar/>
      <Image src={'/home/fruits.png'} alt="fruit" className="fruits absolute z-3 left-[-15%] top-[20%] lg:left-[8%] w-[150px] lg:w-[300px]" width={300} height={300}/>
      <Image src={'/home/clover.png'} alt="clover" className="clover absolute z-2 left-[-25%] lg:left-[-5%] w-[200px] lg:w-[450px] top-[-5%] lg:top-[-10%]" width={500} height={500}/>
      <Image src={'/home/fish.png'} alt="fish" className="fish absolute z-3 rotate-30 right-[-35%] lg:rotate-0 bottom-0 lg:right-0 lg:bottom-[-10%] " width={750} height={750}/>
      <Image src={'/home/tape.png'} alt="tape" className="absolute z-1 right-[-5%] lg:right-0 top-[55%] lg:top-[25%]  w-[60px] lg:w-[120px]" width={120} height={120}/>
      <Image src={'/home/graphicDesignStar.svg'} alt="starGraphDes" className="graphDesStar absolute z-1 left-[-20%] lg:left-[-5%] bottom-[-10%] lg:bottom-[-20%]" width={600} height={600}/>
      <Image src={'/home/starAsset.png'} alt="star" className="star absolute z-1 right-[-30%] lg:right-0 top-[10%] lg:top-[-15%]  w-[300px] lg:w-[600px]" width={600} height={600}/>
      <img src={'/home/thePortfolioAsset.png'} alt="portfo" className="portfolio absolute z-2 w-[900px] h-auto"/>
      <div className="w-[15vw]  h-screen bg-[#9f1d21] absolute left-0">
      </div>
      <div className="w-[15vw]  h-screen bg-[#9f1d21] absolute right-0">
      </div>
    </div>
  );
}
