"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
];

const SectionNav = () => {
    const [activeSection, setActiveSection] = useState<string>(sections[0].id);

    useEffect(() => {
        const visible = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                });

                // the last visible section (in page order) wins; keep the
                // previous one while moving through the gap between sections
                const current = sections
                    .map((section) => section.id)
                    .filter((id) => visible.has(id))
                    .pop();
                if (current) setActiveSection(current);
            },
            { rootMargin: "-10% 0px -50% 0px" }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {sections.map(({ id, label }) => {
                    const active = activeSection === id;

                    return (
                        <li key={id}>
                            <Link
                                className="group flex items-center py-3"
                                href={`#${id}`}
                                aria-current={active ? "location" : undefined}
                            >
                                <span
                                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${active ? "w-16 bg-slate-200" : "w-8 bg-slate-600"}`}
                                ></span>
                                <span
                                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-slate-200 group-focus-visible:text-slate-200 ${active ? "text-slate-200" : "text-slate-500"}`}
                                >
                                    {label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SectionNav;
