// ScrollContext.tsx
"use client";

import { createContext, useContext } from "react";
import gsap from "gsap";

type ScrollContextType = {
  scrollTween: gsap.core.Tween | null;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollTween: null,
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ScrollContext.Provider;
