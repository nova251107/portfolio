"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,212,0.04) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
