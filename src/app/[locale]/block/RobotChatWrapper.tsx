"use client";
import React, { useEffect, useState } from "react";
import RobotChat from "./RobotChat";

export default function RobotChatWrapper() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const helpSection = document.querySelector("#help-section"); 
    if (!helpSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setVisible(!isVisible);
      },
      { threshold: 0.3 }
    );

    observer.observe(helpSection);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;
  return <RobotChat />;
}
