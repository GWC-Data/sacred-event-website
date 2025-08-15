import React, { useRef, useEffect, useState } from "react";

const BlurFade = ({
  children,
  className = "",
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(!inView);

  useEffect(() => {
    if (!inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-50px", threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  const animationStyle = {
    "--duration": `${duration}s`,
    "--delay": `${0.04 + delay}s`,
    "--y-offset": `${yOffset}px`,
    "--blur": blur,
    opacity: isInView ? 1 : 0,
    transform: `translateY(${isInView ? -yOffset : yOffset}px)`,
    filter: `blur(${isInView ? "0px" : blur})`,
    transition: `all var(--duration) ease-out var(--delay)`,
  };

  return (
    <div ref={ref} className={className} style={animationStyle}>
      {children}
    </div>
  );
};

const DateFade = () => {
  return (
    <div className="">
      <BlurFade delay={0.25} inView={true} className="">
        <h2 className="display-6 fw-bold text-white">
          13
          <span className="text-lowercase">
            <sup>th</sup>
          </span>{" "}
          September 2025
        </h2>
      </BlurFade>
      {/* <BlurFade delay={0.5} inView={true}>
          <span className="display-4 text-muted">Nice to meet you</span>
        </BlurFade> */}
    </div>
  );
};

export default DateFade;
