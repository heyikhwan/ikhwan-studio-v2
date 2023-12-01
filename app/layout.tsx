import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotLight from "./components/Spotlight";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ikhwanul Akhmad. DLY | Full Stack Developer | Laravel | ReactJS | NextJS",
	description:
		"Ikhwanul Akhmad. DLY is a Full Stack Developer from Indonesia. He is a Laravel, ReactJS, and NextJS enthusiast.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className} bg-gray-900 leading-relaxed text-gray-400 antialiased selection:bg-cyan-300 selection:text-cyan-900`}>
				<div className="relative">
					<SpotLight />
					{children}
				</div>
				<Analytics />

				<Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js" />
			</body>
		</html>
	);
}
