"use client";

import { useEffect, useState } from "react";

const MouseMovement = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const moveCursor = () => {
      setCursor((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.01, // Lerp effect
        y: prev.y + (position.y - prev.y) * 0.01, // Adjust speed here
      }));

      requestAnimationFrame(moveCursor);
    };

    moveCursor();
  }, [position]);

  return (
    <>
      {cursor ? "" : ""}
      <div
        className="fixed w-[25rem] h-[25rem] bg-[#00c1001a] rounded-full blur-3xl pointer-events-none transition-transform duration-200 "
        style={{ top: position.y, left: position.x, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}

export default MouseMovement;
