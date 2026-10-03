import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "./components/Spotlight";
import { siteDescription, siteName, siteTitle, siteUrl } from "./lib/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    authors: [{ name: siteName }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName,
        title: siteTitle,
        description: siteDescription,
        url: "/",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
    },
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
                    <Spotlight />
                    {children}
                </div>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
