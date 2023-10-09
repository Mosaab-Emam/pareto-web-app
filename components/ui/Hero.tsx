"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [children, setChildren] = useState<Array<JSX.Element>>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const obsoleteCommands = [
    "npx create-next-app@latest",
    "npm create svelte@latest",
    "django-admin startproject",
    "npm i @remix-run/*",
    "npm create qwik@latest",
    "npm init solid@latest",
    "npx supastarter@latest",
    "shipfa.st",
  ];

  const getObsoleteCommand = () =>
    obsoleteCommands[Math.floor(Math.random() * obsoleteCommands.length)];

  useEffect(() => {
    const interval = setInterval(() => {
      const newChild = (
        <div
          key={Math.random()}
          className="absolute animate-custom-ping"
          style={{
            top: randomTopPosition(),
            left: randomLeftPosition(),
          }}
        >
          No more &nbsp;
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {getObsoleteCommand()}
          </code>
        </div>
      );
      setChildren((prevChildren) => [...prevChildren, newChild]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const randomTopPosition = (): number => {
    const top = Math.floor(Math.random() * window.innerHeight);

    const { top: heading_start, bottom: heading_end } =
      headingRef.current!.getBoundingClientRect();

    if (top > 100 && top < heading_start) return top;
    if (top > heading_end && top < window.innerHeight - 100) return top;

    return randomTopPosition();
  };

  const randomLeftPosition = (): number => {
    const left = Math.floor(Math.random() * window.innerWidth);
    return left;
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-x-hidden">
      <div ref={headingRef} className="text-center text-7xl">
        1 Project Starter <br />
        To Rule Them All
      </div>

      <div className="absolute inset-0">
        {children.map((child) => (
          <div key={child.key}>{child}</div>
        ))}
      </div>
    </div>
  );
}
