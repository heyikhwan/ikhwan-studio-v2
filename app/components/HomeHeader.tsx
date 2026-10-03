import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa6";
import Link from "next/link";
import SectionNav from "./SectionNav";
import React from "react";

const HomeHeader = () => {
    return (
        <>
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl max-w-60 md:max-w-sm">
                        <Link href="/">Ikhwanul Akhmad. DLY</Link>
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        Full Stack Web Developer
                    </h2>
                    <p className="mt-4 max-w-sm leading-normal">
                        I specialize in bridging the idea to exceptional and
                        accessible digital experiences.
                    </p>
                    <SectionNav />
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
                            <FaGithub aria-hidden="true" />
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
                            <FaRegEnvelope aria-hidden="true" />
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
                            <FaInstagram aria-hidden="true" />
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
                            <FaLinkedin aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default HomeHeader;