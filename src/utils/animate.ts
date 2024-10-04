"use client";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animateIn = () => {
  const TransittionDiv = document.getElementById("banner");
  if (TransittionDiv) {
    const tl = gsap.timeline();
    tl.set(TransittionDiv, { yPercent: 0 }).to(TransittionDiv, {
      yPercent: 100,
      duration: 2,
      ease: "power2.inOut",
    });
  }
};

export const animateOut = (href: string, router: AppRouterInstance) => {
  const TransittionDiv = document.getElementById("banner");
  if (TransittionDiv) {
    const tl = gsap.timeline();
    tl.set(TransittionDiv, { yPercent: -100 }).to(TransittionDiv, {
      yPercent: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {router.push(href)}
    });
  }
};
