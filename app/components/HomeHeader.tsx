import Link from "next/link";
import React from "react";

const HomeHeader = ({ activeSection }: { activeSection: string }) => {
    return (
        <>
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl max-w-[15rem] md:max-w-sm">
                        <Link href="/">Ikhwanul Akhmad. DLY</Link>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        Full Stack Web Developer
                    </h2>
                    <p className="mt-4 max-w-sm leading-normal">
                        I specialize in bridging the idea to exceptional and
                        accessible digital experiences.
                    </p>
                    <nav
                        className="nav hidden lg:block"
                        aria-label="In-page jump links"
                    >
                        <ul className="mt-16 w-max">
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#about"
                                >
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "about" ? "w-16 bg-slate-200" : ""}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "about" ? "text-slate-100" : ""}`}>
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#experience"
                                >
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "experience" ? "w-16 bg-slate-200" : ""}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "experience" ? "text-slate-100" : ""}`}>
                                        Experience
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="group flex items-center py-3"
                                    href="#projects"
                                >
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "projects" ? "w-16 bg-slate-200" : ""}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "projects" ? "text-slate-100" : ""}`}>
                                        Projects
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <ul
                    className="ml-1 mt-8 flex items-center"
                    aria-label="Social media"
                >
                    <li className="mr-5 text-2xl">
                        <a
                            className="block hover:text-slate-200"
                            href="https://github.com/heyikhwan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only">GitHub</span>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="mr-5 text-2xl">
                        <a
                            className="block hover:text-slate-200"
                            href="mailto:heyikhwan@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only">Mail</span>
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                    <li className="mr-5 text-2xl">
                        <a
                            className="block hover:text-slate-200"
                            href="https://instagram.com/heyikhwan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only">Instagram</span>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="mr-5 text-2xl">
                        <a
                            className="block hover:text-slate-200"
                            href="https://www.linkedin.com/in/heyikhwan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default HomeHeader;