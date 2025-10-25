"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Terminal, { Field } from "@/components/Terminal";

export default function Home() {
    const phrases = ["Italy's international student hackathon", "Where bold ideas become reality", "Compete. Build. WIN.", "24 hours of innovation in Milan", "Create the future, one hack at a time"];

    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const terminalRef = useRef<HTMLFormElement>(null);

    // ================= TYPEWRITER =================
    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 90;
        const current = phrases[index];

        const tick = () => {
            if (!isDeleting && displayText.length < current.length) {
                setDisplayText(current.slice(0, displayText.length + 1));
            } else if (isDeleting && displayText.length > 0) {
                setDisplayText(current.slice(0, displayText.length - 1));
            } else if (!isDeleting && displayText.length === current.length) {
                setTimeout(() => setIsDeleting(true), 4000);
                return;
            } else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                setIndex((p) => (p + 1) % phrases.length);
                return;
            }
        };

        const t = setTimeout(tick, typingSpeed);
        return () => clearTimeout(t);
    }, [displayText, isDeleting, index]);

    // ================= SUBMIT HANDLER =================
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;

        try {
            const response = await fetch("/api/pre-register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email }),
            });

            const data = await response.json();

            if (response.ok) setSubmitted(true);
            else alert(`Error: ${data.error}`);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error submitting pre-registration. Please try again.");
        }
    };

    const scrollToTerminal = () => {
        terminalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <>
            {/* ================= SEO ================= */}
            <Head>
                <title>Hack The Boot | Italy&apos;s International Student Hackathon 2026</title>
                <meta name="description" content="Hack The Boot — Italy's premier international student hackathon in Milan. 24 hours of innovation, creativity, and competition. Pre-register now for Spring 2026!" />
                <meta name="keywords" content="Hack The Boot, Hackathon Italy, Student Hackathon Milan, Hack The Boot 2026, International Hackathon Europe, Tech Competition Italy, Hackathon for Students" />
                <meta property="og:title" content="Hack The Boot | Italy's International Student Hackathon 2026" />
                <meta property="og:description" content="Compete. Build. WIN. Join Italy's international student hackathon — 24 hours of innovation in Milan." />
                <meta property="og:image" content="/img/Logo_Transparent.png" />
                <meta property="og:url" content="https://hacktheboot.it" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hack The Boot | Student Hackathon in Milan" />
                <meta name="twitter:description" content="Join hundreds of students for 24 hours of creativity, code, and competition. Pre-register now!" />
                <meta name="twitter:image" content="/img/Logo_Transparent.png" />
                <link rel="canonical" href="https://hacktheboot.it" />
            </Head>

            {/* ================= MAIN ================= */}
            <main className="page">
                {/* ================= HERO ================= */}
                <section className="mainPageContainer text-center" aria-labelledby="hero-heading">
                    <div className="logoAndText">
                        <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Hackathon Logo" width={300} height={300} className="logoHTB" priority />
                        <h1 id="hero-heading">Hack The Boot</h1>
                    </div>

                    <p className="hackInfo !max-w-5xl !mx-auto !text-gray-300">
                        <span className="tech-gradient">
                            <span className="typewriter">{displayText}</span>
                            <span className="cursor" />
                        </span>
                    </p>

                    <p className="!text-2xl !mt-8 sm:!text-3xl !font-bold !text-gray-300">
                        <span className="!text-blue-400">Limited spots available.</span> Be the first to know when applications open.
                    </p>

                    <button
                        onClick={scrollToTerminal}
                        className="!mt-8 !px-10 !mb-3 !py-5 !rounded-2xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 
                       !text-white !font-bold !text-xl !tracking-wide !shadow-lg 
                       hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                       !transform hover:!scale-105 hover:!shadow-cyan-500/50"
                    >
                        Pre-Register Now
                    </button>
                </section>

                {/* ================= DESCRIPTIVE SUBTITLE ================= */}
                <section className="!mt-16 !w-full text-center">
                    <h2 className="!text-white !text-xl sm:!text-2xl mb-4">
                        <span className="!font-medium">Join innovators from around the world for 24 hours of creativity, code, and collaboration in Milan:</span> <br />
                        <span className="!font-bold">Hack The Boot is where ideas become reality.</span>
                    </h2>
                </section>

                {/* ================= WHEN & WHERE ================= */}
                {!submitted && (
                    <section className="!mt-12 !w-full" aria-labelledby="event-details-heading">
                        <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                            <h2 id="event-details-heading" className="sr-only">
                                Event Details
                            </h2>

                            <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
                                {[
                                    {
                                        label: "When",
                                        text: "Spring 2026",
                                        icon: (
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        label: "Where",
                                        text: "Milan, Italy",
                                        icon: (
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ),
                                    },
                                ].map((card, i) => (
                                    <div
                                        key={i}
                                        className="!relative !flex !flex-col !justify-center !items-center !text-center 
                               !w-full !rounded-[20px] !p-8 !min-h-[180px]
                               !bg-[rgba(51,54,56,0.27)] 
                               !border-2 !border-blue-500/30 
                               !transition-all !duration-300 !ease-out 
                               hover:!bg-[rgba(51,54,56,0.40)] hover:!border-blue-500/50
                               hover:!scale-[1.02] group"
                                    >
                                        <div className="!flex !flex-col !items-center !justify-center !h-full !space-y-4">
                                            <div className="!p-5 !rounded-full !bg-blue-500/10 group-hover:!bg-blue-500/20 !transition-all !duration-300">{card.icon}</div>

                                            <p className="!text-gray-400 !text-base sm:!text-lg !tracking-wide !uppercase !font-semibold">{card.label}</p>

                                            <p className="!text-blue-400 !font-extrabold !text-4xl sm:!text-5xl !leading-snug group-hover:!text-blue-300 !transition-colors !duration-300">{card.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ================= ARROW CUE ================= */}
                <section className="!mt-16 !flex !justify-center !items-center !w-full">
                    <div className="!flex !flex-col !items-center !gap-3 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="url(#techGradient)" className="w-8 h-8 !drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            <defs>
                                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00ffff" />
                                    <stop offset="50%" stopColor="#007bff" />
                                    <stop offset="100%" stopColor="#00ffff" />
                                </linearGradient>
                            </defs>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </section>

                {/* ================= TERMINAL FORM ================= */}
                <section className="!mt-10 !w-full" aria-labelledby="pre-register">
                    <div className="!mx-auto !w-full !max-w-7xl px-4 sm:px-6">
                        <h2 id="pre-register" className="sr-only">
                            Pre-register Form
                        </h2>
                        <form ref={terminalRef} onSubmit={handleSubmit} className="!w-full !mx-auto !max-w-6xl !transition-all !duration-300 !rounded-2xl !min-h-[380px]">
                            <Terminal>
                                {!submitted ? (
                                    <>
                                        <p className="!text-green-400 !font-mono !text-xl sm:!text-2xl">
                                            $ Welcome to <span className="!text-cyan-400">HackTheBoot</span> pre-registration
                                        </p>
                                        <p className="!text-gray-400 !text-lg sm:!text-xl !font-mono"># Please enter your info below:</p>

                                        <div className="!flex !flex-col !gap-8 !mt-6">
                                            <Field text="Full Name" required id="fullName" />
                                            <Field text="Email" type="email" required id="email" />
                                        </div>

                                        <button
                                            type="submit"
                                            className="!mt-8 !w-full !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !py-5 
                                 !text-white !font-semibold !font-mono !text-lg !tracking-wide !shadow-md 
                                 hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                                 !transform hover:!scale-[1.02]"
                                        >
                                            $ Submit
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div role="status" aria-live="polite" className="!space-y-2">
                                            <p className="!text-green-400 !font-mono !text-xl sm:!text-2xl">$ Thank you for pre-registering!</p>
                                            <p className="!text-gray-400 !font-mono !text-lg sm:!text-xl"># We&apos;ll notify you when applications open.</p>
                                        </div>
                                    </>
                                )}
                            </Terminal>
                        </form>
                    </div>
                </section>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="!relative !mt-20 !w-full !border-t !border-blue-500/20 !bg-gradient-to-b !from-[rgba(51,54,56,0.2)] !to-[rgba(51,54,56,0.4)]">
                <div className="!absolute !top-0 !left-0 !right-0 !h-px !bg-gradient-to-r !from-transparent !via-cyan-400 !to-transparent !opacity-50" />

                <div className="!relative !max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-16">
                    <div className="!flex !flex-col !items-center !justify-center !space-y-8">
                        <div className="!text-center !space-y-4">
                            <p className="!text-3xl !font-semibold !text-gray-200">Have questions? Get In Touch 👇</p>
                            <a
                                href="mailto:support@hacktheboot.it"
                                className="!inline-flex !items-center !gap-2 !text-blue-400 hover:!text-cyan-400 
                           !transition-all !duration-300 !font-mono !text-lg sm:!text-xl hover:!scale-105 !transform"
                            >
                                <svg className="!w-5 !h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                support@hacktheboot.it
                            </a>
                        </div>

                        <div className="!w-full !max-w-md">
                            <div className="!h-px !bg-gradient-to-r !from-transparent !via-blue-500/50 !to-transparent" />
                        </div>

                        <div className="!text-center !space-y-2">
                            <p className="!text-base !text-gray-400">© {new Date().getFullYear()} Hack The Boot | Made with ❤️ by The Hack The Boot Team</p>
                            <p className="!text-sm !text-gray-500">All rights reserved</p>
                        </div>
                    </div>
                </div>

                <div className="!absolute !bottom-0 !left-1/2 !-translate-x-1/2 !w-1/2 !h-px !bg-gradient-to-r !from-transparent !via-cyan-500/30 !to-transparent !blur-sm" />
            </footer>
        </>
    );
}
