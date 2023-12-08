import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotLight from "./components/Spotlight";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ikhwanul Akhmad. DLY | Full Stack Developer | Laravel | ReactJS | NextJS",
    description:
        "Ikhwanul Akhmad. DLY is a Full Stack Developer from Indonesia. He is a Laravel, ReactJS, and NextJS enthusiast.",
    keywords: [
        "ikhwan",
        "ikhwanul akhmad",
        "ikhwanul",
        "akhmad",
        "ikhwanul akhmad dly",
        "ikhwanul dly",
        "ikhwanul akhmad dly laravel",
        "ikhwanul akhmad dly reactjs",
        "ikhwanul akhmad dly nextjs",
        "ikhwanul akhmad dly full stack developer",
        "ikhwanul akhmad dly full stack",
        "ikhwanul akhmad dly developer",
        "ikhwanul akhmad dly laravel developer",
        "ikhwanul akhmad dly reactjs developer",
        "ikhwanul akhmad dly nextjs developer",
        "ikhwanul akhmad dly web developer",
        "ikhwanul akhmad dly web",
        "ikhwanul akhmad dly web developer laravel",
        "ikhwanul akhmad dly web developer reactjs",
        "ikhwanul akhmad dly web developer nextjs",
        "ikhwanul akhmad dly web developer full stack",
        "ikhwan programmer",
        "ikhwanul programmer",
        "ikhwanul akhmad programmer",
        "ikhwanul akhmad dly programmer",
        "ikhwanul akhmad dly web programmer",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.className} bg-gray-900 leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
            >
                <div className="relative">
                    <SpotLight />
                    {children}
                </div>
                <SpeedInsights />
                <Analytics />

                <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js" />
            </body>
        </html>
    );
}
