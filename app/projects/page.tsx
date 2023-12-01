import Link from "next/link";
import projects from "../../data/projects.json";
import Badge from "../components/Badge";

const ProjectPage = () => {
    const project = projects.sort((a, b) => {
        return b.id - a.id;
    });

    return (
        <main className="lg:py-24">
            <Link
                className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300"
                href="/"
            >
                <i className="fa-solid fa-arrow-right-long mr-2 h-3 w-3 rotate-180 transition-transform group-hover:-translate-x-2"></i>
                Ikhwanul Akhmad. DLY
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                All Projects
            </h1>
            <table
                id="content"
                className="mt-12 w-full border-collapse text-left"
            >
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                            Year
                        </th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                            Project
                        </th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                            Made at
                        </th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                            Built with
                        </th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {project &&
                        project.map((item) => (
                            <tr
                                className="border-b border-slate-300/10 last:border-none"
                                key={item.id}
                            >
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">
                                        {item.year}
                                    </div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300sm:hidden group/link text-base"
                                                href={item.link ?? "#!"}
                                                target={
                                                    item.link
                                                        ? "_blank"
                                                        : "_self"
                                                }
                                                rel="noreferrer"
                                                aria-label={item.title}
                                            >
                                                <span>
                                                    <span className="flex items-center gap-2">
                                                        {item.title}
                                                        {item.link && (
                                                            <i className="fa-solid fa-up-right-from-square inline-block h-2.5 w-2.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"></i>
                                                        )}
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hidden sm:block">
                                            {item.title}
                                            <p className="mt-1 text-xs text-gray-500">{item.shortDesc}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                                    <div className="translate-y-px whitespace-nowrap">
                                        {item.madeAt}
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {item.techStack &&
                                            item.techStack.map(
                                                (item, index) => (
                                                    <li
                                                        className="my-1 mr-1.5"
                                                        key={index}
                                                    >
                                                        <Badge name={item} />
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <ul className="translate-y-1 flex gap-5">
                                        {item.link && (
                                            <li className="mb-1 flex items-center">
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-sky-200 focus-visible:text-sky-300 group/link text-sm"
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={item.title}
                                                >
                                                    <span className="flex gap-2 items-center">
                                                        {
                                                            item.link
                                                                .split("//")[1]
                                                                .split("/")[0]
                                                        }
                                                        <i className="fa-solid fa-up-right-from-square inline-block h-2.5 w-2.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px"></i>
                                                    </span>
                                                </a>
                                            </li>
                                        )}
                                        {item.github && (
                                            <li className="flex items-center">
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-sky-200 focus-visible:text-sky-300 group/link text-sm"
                                                    href={item.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={item.title}
                                                >
                                                    <span className="flex gap-2 items-center">
                                                        <i className="fa-brands fa-github h-4 w-4"></i>
                                                        Github
                                                    </span>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </main>
    );
};

export default ProjectPage;
