import HomeAbout from "./components/HomeAbout";
import HomeExperience from "./components/HomeExperience";
import HomeHeader from "./components/HomeHeader";
import HomeProject from "./components/HomeProject";

export default function Home() {
    return (
        <div className="mx-auto h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <HomeHeader />

                <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
                    <main>
                        <HomeAbout />
                        <HomeExperience />
                        <HomeProject />
                    </main>
                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                        <p>&copy; {new Date().getFullYear()} Ikhwan Studio. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
