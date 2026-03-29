
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { nordhin } from "../fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAboutAnimation, useAboutImageAnimation } from "../hooks/aboutAnimation";



export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null)
    useAboutAnimation(containerRef);
    useAboutImageAnimation(imageRef)

    return (
        <div className="flex min-h-screen bg-white relative overflow-hidden items-center justify-center">
            <img src="/about/redCornerRight.svg" className="absolute w-[150%] md:w-[60%] right-[-45%] md:right-[-15%] top-[-20%]  md:top-[-30%]" alt="" />
            <img src="/about/redCornerLeft.svg" className="absolute w-[150%] md:w-[60%] left-[-25%] md:left-[-15%] bottom-[-10%] md:bottom-[-30%]" alt="" />
            <Navbar />
            <div className="flex flex-col gap-5 items-center  pb-5 px-10 md:px-0 md:pb-0 md:flex-row">
                <div className="flex flex-col gap-2 md:gap-5 order-2 md:order-1 md:w-[50%] md:pl-20 md:pr-10">
                    <p className="text-4xl md:text-6xl text-[#a00a0a] text-center md:text-start font-bold">Hello my name is</p>
                    <div className="flex justify-center md:justify-start mb-5 md:mb-0">
                        <div ref={containerRef} className={`text-9xl ${nordhin.className} opacity-0 kelly flex text-center gap-3 md:text-start font-nordhin`}>
                            <p className="kelly-letter text-[#d44a9a] rotate-[-15deg] px-2">K</p>
                            <p className="kelly-letter text-[#a00a0a]">e</p>
                            <p className="kelly-letter text-[#116b09]">l</p>
                            <p className="kelly-letter text-[#1e6bed]">l</p>
                            <p className="kelly-letter text-[#ff5757] rotate-15 px-2">y</p>
                        </div>
                    </div>
                    <p className="text-[#a00a0a] text-xl mb-5 md:mb-0 text-center md:text-start md:w-[75%]">I’m a Visual Communication Design student who loves playing with bold, eccentric, and colorful elements. Pop art and maximalism are at the core of my creative identity.
I approach my designs with precision and emotional balance, while spreading a sense of joy and vibrancy in every piece I create.
I’m always crafting fresh works full of spontaneous ideas, so stay tuned and watch me cook up my next designs!</p>
                    <p className="text-[#a00a0a] text-xl text-center md:text-start md:w-[75%]">In my free time, when I’m not designing, I love spending time reading books and traveling solo to discover new and exciting sources of inspiration.</p>
                </div>
                <Image ref={imageRef} src={'/about/kelly.jpg'} alt="kelly" className="w-full order-1 relative z-2 md:order-2 basis-1/2 px-5 pt-30 md:pr-5" width={600} height={450} />
            </div>
        </div>
    );
}