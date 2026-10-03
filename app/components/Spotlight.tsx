"use client";

import { useEffect, useRef } from "react";

const Spotlight = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            ref.current?.style.setProperty("--x", e.clientX + "px");
            ref.current?.style.setProperty("--y", e.clientY + "px");
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            id="spotlight"
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        ></div>
    );
};

export default Spotlight;
