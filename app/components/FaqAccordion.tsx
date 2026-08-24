"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is Playhouse?",
        answer: "Playhouse is a Hack Club You-Ship We-Ship program where you design a dollhouse, build it, and get a Smiski in return.",
    },
    {
        question: "What is Hack Club?",
        answer: "Hack Club is a 501(c)(3) nonprofit and network of 100k+ technical high schoolers. We believe you learn best by building, so we’re creating community and providing grants so you can make awesome projects.",
    },
    {
        question: "Who can participate?",
        answer: "Anyone from ages 13-18 inclusive can do Playhouse.",
    },
    {
        question: "When is the deadline?",
        answer: "Project designs are due September 6th at 11:59 PM EDT.",
    },
] as const;

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full rounded-lg bg-blue-100 p-4 text-blahaj" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="mb-3 p-2 text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-2 sm:grid-cols-2">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    const answerId = `faq-answer-${index}`;

                    return (
                        <div key={faq.question} className="overflow-hidden rounded-lg bg-white">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 p-4 text-left text-lg font-bold hover:bg-creamsicle/30"
                                aria-expanded={isOpen}
                                aria-controls={answerId}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <span aria-hidden="true" className="text-2xl leading-none">{isOpen ? " −" : " +"}</span>
                            </button>
                            {isOpen && (
                                <div id={answerId} className="border-t border-blahaj/15 px-4 pb-4 pt-3 text-lg">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div>
                <p className="mt-4 text-center text-lg font-semibold">If you have more questions, feel free to reach out to me at <a href="mailto:selena@hackclub.com">selena@hackclub.com</a></p>
            </div>
        </section>
    );
}