"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Terminal, { Field } from "@/components/Terminal";

export default function Home() {
    const phrases = ["brand new international students Hackathon", "fastest-growing hackathon in Europe", "place where ideas become startups", "chance to compete with the best", "event you don't want to miss"];

    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const terminalRef = useRef<HTMLFormElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 90;
        const currentPhrase = phrases[index];
        const handleTyping = () => {
            if (!isDeleting && displayText.length < currentPhrase.length) {
                setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            } else if (isDeleting && displayText.length > 0) {
                setDisplayText(currentPhrase.slice(0, displayText.length - 1));
            } else if (!isDeleting && displayText.length === currentPhrase.length) {
                setTimeout(() => setIsDeleting(true), 4000);
                return;
            } else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % phrases.length);
                return;
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        const syncHeights = () => {
            if (!terminalRef.current || !cardsRef.current) return;

            const terminalHeight = terminalRef.current.offsetHeight;
            const cardsHeight = cardsRef.current.scrollHeight;
            const maxHeight = Math.max(terminalHeight, cardsHeight);

            terminalRef.current.style.height = `${maxHeight}px`;
            cardsRef.current.style.height = `${maxHeight}px`;
        };

        syncHeights();
        window.addEventListener("resize", syncHeights);
        return () => window.removeEventListener("resize", syncHeights);
    }, [submitted]);

    return (
        <div className="page">
            {/* ================= HERO SECTION ================= */}
            <div className="mainPageContainer">
                <div className="logoAndText">
                    <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" priority />
                    <h1>Hack The Boot</h1>
                </div>

                <p className="hackInfo">
                    <span className="tech-gradient">
                        Italy&apos;s <span className="typewriter">{displayText}</span>
                        <span className="cursor"></span>
                    </span>
                </p>

                <p className="descriptionHack !text-center !w-full">
                    A student-powered international hackathon hosted in Italy — compete with a team, learn from mentors, and win prizes.
                    <br />
                    <b>Pre-register</b> to get notified when applications open.
                </p>
            </div>

            {/* ================= BOTTOM WRAPPER ================= */}
            <div className="!mt-20 sm:!mt-15 !w-full !max-w-6xl !mx-auto !grid !grid-cols-1 sm:!grid-cols-2 !gap-10 !items-start !justify-center">
                {/* ========== LEFT COLUMN — Terminal Form ========== */}
                <form ref={terminalRef} onSubmit={handleSubmit} className="!w-full !max-w-xl !mx-auto !transition-all !duration-300">
                    <Terminal>
                        {!submitted ? (
                            <>
                                <p className="!text-green-400 !font-mono !text-sm sm:!text-base">
                                    $ Welcome to <span className="!text-cyan-400">HackTheBoot</span> pre-registration
                                </p>
                                <p className="!text-gray-400 !text-sm sm:!text-base !font-mono"># Please enter your info below:</p>

                                <div className="!flex !flex-col !gap-5 !mt-2">
                                    <Field text="Full Name" required id="fullName" />
                                    <Field text="Email" type="email" required id="email" />
                                </div>

                                <button
                                    type="submit"
                                    className="!mt-2 !w-full !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !py-3.5 
                                               !text-white !font-semibold !font-mono !text-sm !tracking-wide !shadow-md 
                                               hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                                               !transform hover:!scale-[1.02]"
                                >
                                    $ Submit
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="!text-green-400 !font-mono !text-sm sm:!text-base">$ Thank you for pre-registering!</p>
                                <p className="!text-gray-400 !font-mono !text-sm sm:!text-base"># We&apos;ll notify you when applications open.</p>
                            </>
                        )}
                    </Terminal>
                </form>

                {/* ========== RIGHT COLUMN — Info Cards (Tech / FOMO Style) ========== */}
                <div ref={cardsRef} className="!w-full !grid !grid-cols-1 sm:!grid-cols-2 !gap-8 !h-full !place-items-stretch !transition-all !duration-300">
                    {[
                        { title: "📅 Date", text: "Spring 2026" },
                        { title: "📍 Location", text: "Milan — Politecnico di Milano" },
                        { title: "🧠 Applications", text: "Priority — Jan 2026\nRegular — Mar 2026" },
                        { title: "💡 Theme", text: "Innovation, AI & Sustainability" },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="!relative !flex !flex-col !justify-center !items-center !text-center 
                                       !w-full !rounded-2xl !p-8
                                       !bg-gradient-to-br !from-gray-900/80 !to-black/80 
                                       !border !border-cyan-500/30 
                                       !shadow-[0_0_15px_rgba(0,255,255,0.15)] 
                                       hover:!shadow-[0_0_25px_rgba(0,255,255,0.5)]
                                       hover:!border-cyan-400
                                       !transition-all !duration-500 !ease-out 
                                       !overflow-hidden hover:!scale-[1.03] group"
                        >
                            {/* Animated neon border glow */}
                            <div className="!absolute !inset-0 !rounded-2xl !p-[1px] !bg-gradient-to-r !from-cyan-500 !via-blue-500 !to-indigo-600 opacity-30 group-hover:opacity-60 blur-[4px] !transition-opacity !duration-500"></div>

                            <div className="!relative z-10">
                                <h3 className="!text-cyan-400 !font-bold !text-xl !tracking-wide !mb-3 group-hover:!text-cyan-300 transition-all duration-300">{card.title}</h3>
                                <p className="!text-gray-300 !text-base !font-mono whitespace-pre-line leading-relaxed tracking-tight">{card.text}</p>
                            </div>

                            {/* Corner glow effect */}
                            <div className="!absolute !top-0 !left-0 !w-2 !h-2 !bg-cyan-400/40 !blur-md !rounded-full" />
                            <div className="!absolute !bottom-0 !right-0 !w-3 !h-3 !bg-blue-400/30 !blur-lg !rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
