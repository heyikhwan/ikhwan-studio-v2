import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../lib/data";

const HomeExperience = () => {
    return (
        <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((item) => (
                        <li className="mb-12" key={item.id}>
                            <ExperienceCard
                                title={item.title}
                                position={item.position}
                                start={item.start}
                                end={item.end}
                                description={item.description}
                                link={item.link}
                                skills={item.skills}
                            />
                        </li>
                    ))}
                </ol>
                <div className="mt-12">
                    <a
                        className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                        aria-label="View Full Curriculum Vitae"
                        href="/cv_ikhwanul_akhmad_dly.pdf"
                        rel="noreferrer"
                        target="_blank"
                        download
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                                View Curriculum
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                                    {" "}
                                    Vitae
                                </span>
                                <FaArrowRightLong className="ml-2 inline-block shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true" />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeExperience;
