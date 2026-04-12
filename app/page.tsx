'use client'

import Image from "next/image";
import Navbar from "./components/navbar";
import { useRef } from "react";
import { useHomeAnimation } from "./hooks/homeAnimation";
import Link from "next/link";

export default function Home() {
  useHomeAnimation();

  return (
    <div className="flex flex-col bg-white relative">
      <div className="flex z-2 h-[350px]  md:h-[800px] lg:min-h-[130vh] bg-white bg-cover bg-center bg-no-repeat bg-[url(/home/homeBG.png)] relative items-center justify-center overflow-hidden">
        <Navbar />
        <Image src={'/home/fruits.png'} alt="fruit" className="fruits absolute z-4 left-[5%] top-[25%] lg:top-[20%] lg:left-[8%] w-[75px] lg:w-[300px]" width={300} height={300} />
        <Image src={'/home/clover.png'} alt="clover" className="clover absolute z-2 left-[-10%] lg:left-[-5%] w-[150px] lg:w-[450px] top-[-5%] lg:top-[-10%]" width={500} height={500} />
        <Image src={'/home/fish.png'} alt="fish" className="fish absolute z-3 rotate-30 right-[-35%] lg:rotate-0 bottom-0 w-[325px] lg:w-[750px] lg:right-0 lg:bottom-[10%] " width={750} height={750} />
        <Image src={'/home/tape.png'} alt="tape" className="absolute z-1 right-[-5%] lg:right-0 top-[15%] lg:top-[25%]  w-[60px] lg:w-[120px]" width={120} height={120} />
        <Image src={'/home/graphicDesignStar.svg'} alt="starGraphDes" className="graphDesStar absolute z-2 left-[-10%] lg:left-[-5%] bottom-[0%] w-[150px] lg:w-[600px] lg:bottom-[4%]" width={600} height={600} />
        <Image src={'/home/starAsset.png'} alt="star" className="star absolute z-1 right-[-10%] lg:right-0 top-[-10%] lg:top-[-25%]  w-[200px] lg:w-[600px]" width={600} height={600} />
        <img src={'/home/thePortfolioAsset.png'} alt="portfo" className="portfolio top-[25%] lg:top-[10%] absolute z-3 w-[70vw] lg:w-[900px] h-auto" />
        <div className="w-[15vw]  h-[120vh] bg-[#9f1d21] absolute top-0 left-0">
        </div>
        <div className="w-[15vw]  h-[120vh] bg-[#9f1d21] absolute top-0 right-0">
        </div>
        <div className="bg-linear-to-b from-[#9f1d21] z-0 absolute bottom-[-2%] from-40% to-[75%] w-full h-[75px] lg:h-[25vh] to-white">

        </div>
      </div>

      <div className="flex bg-white relative z-0 items-center justify-center h-full flex-col h-[400px] lg:min-h-screen">
        <div className="border-2 border-[#9f1d21] absolute top-5 rounded-2xl px-5 md:px-10 py-2 text-lg md:text-xl text-[#9f1d21]">
          <p>Projects</p>
        </div>
        <div className="flex flex-col py-30 px-10 md:px-5 md:flex-row gap-5 justify-center items-start w-full h-full">
          <div className="flex flex-col justify-start">
            <Link href={'/main-work'}>
              <Image alt="" width={500} height={300} src={'/home/mainWorkCover.png'} />
              <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">Main Work</p>
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <Link href={'/'}>
              <Image alt="" width={500} height={300} src={'/home/pastWorkCover.png'} />
              <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">Past Work</p>
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <Link href={'/'}>
              <Image alt="" width={500} height={300} src={'/home/univWorkCover.png'} />
              <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">University <br />Projects</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start w-full px-10 py-20">
          <p className="text-5xl md:text-8xl font-bold text-[#9f1d21]">Kelly<br />Christiana</p>
          <p className="text-3xl font-bold text-[#9f1d21]">Contact me here !</p>
          <p className="text-2xl text-[#9f1d21]"><br/>applepi794@gmail.com
            <br/>
            <br/>
            087702848078
            <br/>
            <br/>
            @kelly.christiana02
          </p>
        </div>
      </div>
    </div>

  );
}
