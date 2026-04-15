
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../../components/home/navbar";
import { nordhin } from "../fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAboutAnimation, useAboutImageAnimation } from "../../public/hooks/aboutAnimation";



export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null)
    useAboutAnimation(containerRef);
    useAboutImageAnimation(imageRef)

    return (
        <div className="flex flex-col relative items-start justify-center w-full px-10 py-20 bg-white overflow-hidden min-h-screen">
            <img src="/about/redCornerRight.svg" className="absolute w-[150%] md:w-[60%] right-[-45%] md:right-[-15%] top-[-20%]  md:top-[-30%]" alt="" />
            <Navbar />
            <img src="/about/redCornerLeft.svg" className="absolute w-[150%] md:w-[60%] left-[-25%] md:left-[-15%] bottom-[-10%] md:bottom-[-30%]" alt="" />
            <p className="text-5xl md:text-8xl font-bold text-[#9f1d21]">Kelly<br />Christiana</p>
            <p className="text-3xl font-bold text-[#9f1d21]">Contact me here !</p>
            <p className="text-2xl text-[#9f1d21]"><br />applepi794@gmail.com
                <br />
                <br />
                087702848078
                <br />
                <br />
                @kelly.christiana02
                <br />
                <br />
                <span className="font-bold">Terbuka untuk kolaborasi dan bisnis</span>
            </p>
        </div>
    );
}