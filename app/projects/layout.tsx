import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Archive Project | Ikhwanul Akhmad. DLY",
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
        </div>
    );
};

export default ProjectLayout;
