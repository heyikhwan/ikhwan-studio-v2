import projectsJson from "../data/projects.json";
import experiencesJson from "../data/experiences.json";
import type { Experience, Project } from "./types";

const byNewest = <T extends { id: number }>(items: T[]) =>
    [...items].sort((a, b) => b.id - a.id);

export const projects = byNewest(projectsJson as Project[]);
export const experiences = byNewest(experiencesJson as Experience[]);
