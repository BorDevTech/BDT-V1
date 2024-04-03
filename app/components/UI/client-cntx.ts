"use client";

export default function ScreenSize() {
  if (typeof window !== "undefined") {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return { windowHeight, windowWidth };
  }
}
