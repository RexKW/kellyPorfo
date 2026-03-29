"use client";

import { RefObject, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TLSSocket } from "tls";

export const useAboutAnimation = (scope: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
    if (!scope.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    tl.fromTo(scope.current, 
      { y: 60, autoAlpha: 0 }, 
      { y: 0, autoAlpha: 1 }
    );

    tl.from(".kelly-letter", {
        y:60,
      scale: 0.5,
      stagger: 0.1,
      duration: 0.8,
      autoAlpha: 0,
    }, "-=0.5"); 

    tl.to('.kelly-letter', {
        y:0,
      duration: 1,
      stagger: 0.1,
      autoAlpha: 1,
    }, "-=0.5");

  }, { scope });

    
}

export const useAboutImageAnimation = (scope: RefObject<HTMLImageElement | null>) => {
    useGSAP(() => {
    if (!scope.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 1.5 }
    });

    tl.fromTo(scope.current, 
      { x: 100, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1 }
    );




  }, { scope });

    
}

