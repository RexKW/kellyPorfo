"use client";

import { RefObject, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TLSSocket } from "tls";

export const useHomeAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inout", duration: 1 } });

    tl.fromTo(
      ".portfolio",
      { y: 60,scale: 0.8, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.5 },
      
    );

     tl.fromTo(
      ".fish",
      { x: 30, y: 60,scale: 0.8,rotate:45, autoAlpha: 0 },
      { x: 0, y: 0, scale: 1,rotate:0, autoAlpha: 1 },
      '<'
    );

    tl.fromTo(
      ".star",
      { x: 30, y: 30,scale: 0.8,rotate:45, autoAlpha: 0 },
      { x: 0, y: 0, scale: 1,rotate:0, autoAlpha: 1 },
      "<"
    );

    tl.fromTo(
      ".graphDesStar",
      { x: 30, y: 30,scale: 0.8,rotate:-45, autoAlpha: 0 },
      { x: 0, y: 0, scale: 1,rotate:0, autoAlpha: 1 },
      "<"
    );

    tl.fromTo(
      ".clover",
      { x: -30, y: 30,scale: 0.8,rotate:-20, autoAlpha: 0 },
      { x: 0, y: 0, scale: 1,rotate:0, autoAlpha: 1 },
      "<"
    );

    tl.fromTo(
      ".fruits",
      { y: 20,scale: 0.8, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1 },
      "<"
    );

    

    tl.fromTo(
    ".portfolio",
    { y: 0 },
    { 
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "power1.inOut"
    }
    );

    tl.fromTo(
    ".fish",
    { y: 0 },
    { 
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut"
    },
    "<"
    );

    tl.fromTo(
    ".fish",
    { y: 0 },
    { 
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut"
    },
    "<"
    );

    tl.fromTo(
    ".star",
    { rotate: 0 },
    { 
        rotate: 15,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: "power1.inOut"
    },
    "<"
    );

    tl.fromTo(
    ".graphDesStar",
    { rotate: 0 },
    { 
        rotate: -15,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: "power1.inOut"
    },
    "<"
    );

    tl.fromTo(
    ".clover",
    { y: 0 },
    { 
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut"
    },
    "<"
    );





  }, []);
};
