"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Guide = {
    name: string;
    slug: string;
    content: string;
};

export function GuideViewer({ guides }: { guides: Guide[] }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedGuide = guides[selectedIndex];

    if (!selectedGuide) {
        return <p className="rounded-lg bg-white/95 p-8 text-blahaj shadow-lg">No guide files found.</p>;
    }

    function selectGuide(index: number) {
        setSelectedIndex(index);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            <nav aria-label="Guide sections" className="rounded-lg bg-white/90 p-6 text-blahaj shadow-lg lg:sticky lg:top-6 h-full justify-left">
                <h2 className="text-xl font-bold">In this guide</h2>
                <ul className="mt-3 space-y-2">
                    {guides.map((guide, index) => (
                        <li key={guide.slug}>
                            <button
                                type="button"
                                aria-current={index === selectedIndex ? "page" : undefined}
                                className={`w-full rounded p-2 text-left font-semibold capitalize transition-colors ${index === selectedIndex ? "bg-macaroni" : "hover:bg-creamsicle/40"}`}
                                onClick={() => selectGuide(index)}
                            >
                                {guide.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <article className="markdown-content min-w-0 rounded-lg bg-white/95 p-6 text-blahaj shadow-lg sm:p-10">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedGuide.content}</ReactMarkdown>
                <div className="mt-10 flex justify-between gap-4 border-t border-blahaj/20 pt-6">
                    <button
                        type="button"
                        className="rounded bg-blahaj px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={selectedIndex === 0}
                        onClick={() => selectGuide(selectedIndex - 1)}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        className="rounded bg-blahaj px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={selectedIndex === guides.length - 1}
                        onClick={() => selectGuide(selectedIndex + 1)}
                    >
                        Next
                    </button>
                </div>
            </article>
        </div>
    );
}