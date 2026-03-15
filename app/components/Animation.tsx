"use client";
import React, { useEffect, useRef, useState } from "react";

/* -------------------- MouseFollow -------------------- */

export const MouseFollow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          pos.current.x + 7
        }px, ${pos.current.y + 20}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full bg-orange-500"
    />
  );
};



/* -------------------- ScrollHighlightText -------------------- */

type ScrollHighlightTextProps = {
  children: string;
  className?: string;
  headstartWords?: number; 
};

export const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({
  children,
  className = "",
  headstartWords = 7,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Split text into letters
  const letters = children.split("");
  const headstartLetters = headstartWords * 5; // avg 5 letters per word

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = (windowHeight - rect.top) / (rect.height + windowHeight);
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlightCount = Math.floor(progress * letters.length) + headstartLetters;

  return (
    <div ref={containerRef} className={`inline ${className} leading-relaxed`}>
      {letters.map((letter, i) => {

        if (letter === "\n") {
        return <span key={i} className="block h-1.5" />;
      }
        const opacity =
          i < highlightCount
            ? 1
            : 0.2 + 0.8 * ((i - highlightCount) / letters.length);

        return (
          <span
            key={i}
            className="transition-colors duration-300"
            style={{ color: `rgba(0,0,0,${opacity})` }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};



/* -------------------- CountUpNumber -------------------- */

type CountUpNumberProps = {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  target,
  duration = 1000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const progressRatio = Math.min(progress / duration, 1); // 0 → 1
      setCount(Math.floor(progressRatio * target));

      if (progress < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};
