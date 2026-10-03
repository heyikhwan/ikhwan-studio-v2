export const siteName = "Ikhwanul Akhmad. DLY";
export const siteTitle = "Ikhwanul Akhmad. DLY | Full Stack Developer | Laravel | ReactJS | NextJS";
export const siteDescription =
    "Ikhwanul Akhmad. DLY is a Full Stack Developer from Indonesia. He is a Laravel, ReactJS, and NextJS enthusiast.";

export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000");
