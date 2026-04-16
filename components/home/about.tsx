
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { nordhin } from "../../app/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAboutAnimation, useAboutImageAnimation } from "../../public/hooks/aboutAnimation";



export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null)
    useAboutAnimation(containerRef);
    useAboutImageAnimation(imageRef)

    return (
        <div className="flex min-h-screen bg-white relative overflow-hidden items-center justify-center">

            
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
                    <p className="text-[#a00a0a] text-xl mb-5 md:mb-0 text-center md:text-start md:w-[75%]">Saya adalah Graphic Designer asal indonesia sedang mengejar gelar di Desain Komunikasi Visual di Universitas Ciputra
<br/><br/>
Saya sangat bersemangat untuk melakukan visual branding utamanya dengan style pop art yang unik dan menyenangkan</p>
                </div>
                <Image ref={imageRef} src={'/about/kelly.jpg'} alt="kelly" className="w-full order-1 relative z-2 md:order-2 basis-1/2 px-5 pt-30 md:pr-5" width={600} height={450} />
            </div>
        </div>
    );
}