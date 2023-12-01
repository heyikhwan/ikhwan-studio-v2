import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import Link from "next/link";

const HomeProject = () => {
    const project = projects.sort((a, b) => {
        return b.id - a.id;
    });

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {project.map(
                        (item) =>
                            item.selected && (
                                <li className="mb-12" key={item.id}>
                                    <ProjectCard
                                        title={item.title}
                                        link={item.link}
                                        description={item.description}
                                        techStack={item.techStack}
                                        image={item.image}
                                        selected={item.selected}
                                        github={item.github}
                                    />
                                </li>
                            )
                    )}
                </ul>

                <div className="mt-12">
                    <Link
                        className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                        aria-label="View All Project Archive"
                        href="/projects"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                                View All Project
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                                    {" "}
                                    Archive
                                </span>
                                <i className="fa-solid fa-arrow-right-long ml-2 inline-block h-3 w-3 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"></i>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeProject;
