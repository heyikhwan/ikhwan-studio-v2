"use client";

import { useEffect, useState } from "react";
import HomeAbout from "./components/HomeAbout";
import HomeExperience from "./components/HomeExperience";
import HomeHeader from "./components/HomeHeader";
import HomeProject from "./components/HomeProject";

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection: string = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const offset = section.id === "contact-us" ? 450 : 150;

                if (window.scrollY >= sectionTop - offset) {
                    currentSection = section.getAttribute("id") || "";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="mx-auto h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <HomeHeader activeSection={activeSection} />

                <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
                    <main>
                        <section>
                            <HomeAbout />
                            <HomeExperience />
                            <HomeProject />
                        </section>
                    </main>
                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                        <p>
                            Layout & Design by
                            <a
                                href="https://brittanychiang.com/"
                                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                Brittany Chiang
                            </a>
                            .
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
