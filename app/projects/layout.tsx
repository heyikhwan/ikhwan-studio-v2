import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Archive Project",
    description: "A complete archive of web projects built by Ikhwanul Akhmad. DLY.",
    alternates: { canonical: "/projects" },
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
        </div>
    );
};

export default ProjectLayout;
