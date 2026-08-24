import fs from "node:fs/promises";
import path from "node:path";
import { GuideViewer } from "./GuideViewer";
import { Navbar } from "../components/Navbar";
import { FooterBar } from "../components/footerbar";

const guidesDirectory = path.join(process.cwd(), "content", "guides");

async function getGuides() {
    const files = (await fs.readdir(guidesDirectory))
        .filter((file) => file.endsWith(".md"))
        .sort();

    return Promise.all(
        files.map(async (file) => ({
            name: file.replace(/\.md$/, "").replace(/[-_]/g, " "),
            slug: file,
            content: await fs.readFile(path.join(guidesDirectory, file), "utf8"),
        })),
    );
}

export default async function GuidePage() {
    const guides = await getGuides();

    return (
        <div className="min-h-screen bg-[url('/ikeabackground.jpg')] bg-cover bg-fixed font-sans dark:bg-black w-full">
            <Navbar/>
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 sm:px-12">
                <GuideViewer guides={guides} />
            </main>
            <FooterBar/>
        </div>
    );
}