"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  cursorImg?: string;   
  pointerImg?: string; 
};

export default function CustomCursor({
  cursorImg = "/assets/cursor/cursor.png",
  pointerImg = "/assets/cursor/pointer.png",
}: Props) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ease = 0.2;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // hover detection
    const hoverableSelector =
      "a, button, input, textarea, select, [data-cursor='pointer'], .cursor-pointer";

    const setHover = () => setIsPointer(true);
    const unsetHover = () => setIsPointer(false);

    const attachHoverEvents = () => {
      document.querySelectorAll(hoverableSelector).forEach((el) => {
        el.addEventListener("mouseenter", setHover);
        el.addEventListener("mouseleave", unsetHover);
      });
    };

    attachHoverEvents();

    const mo = new MutationObserver(() => attachHoverEvents());
    mo.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      pos.x += (mouse.x - pos.x) * ease;
      pos.y += (mouse.y - pos.y) * ease;

      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;

      if (pointerRef.current)
        pointerRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Cursor العادي */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          pointerEvents: "none",
          backgroundImage: `url(${cursorImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.15s ease-out",
          opacity: isPointer ? 0 : 1,
          zIndex: 9999,
        }}
      />

      <div
        ref={pointerRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          pointerEvents: "none",
          backgroundImage: `url(${pointerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.15s ease-out",
          opacity: isPointer ? 1 : 0,
          zIndex: 9999,
        }}
      />
    </>
  );
}
