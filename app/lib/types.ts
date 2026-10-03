export type Project = {
    id: number;
    title: string;
    description: string;
    shortDesc?: string;
    techStack: string[];
    selected: boolean;
    year: string;
    madeAt: string;
    image?: string;
    link?: string;
    github?: string;
};

export type Experience = {
    id: number;
    title: string;
    position: string;
    start: string;
    end: string;
    description: string;
    link?: string;
    skills: string[];
};
