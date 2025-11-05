"use client";

import gsap from "gsap";
import { LenisRef, ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";

export default function Lenis({ children }: { children?: ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />;
}
