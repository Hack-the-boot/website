"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Terminal, { Field } from "@/components/Terminal";

export default function Home() {
    const phrases = ["Where bold ideas become reality", "Compete. Build. WIN.", "24 hours of innovation in Milan", "Create the future, one hack at a time"];

    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

    // ================= SCROLL TO TOP ON SUBMIT =================
    useEffect(() => {
        if (submitted) {
            // Use instant scroll for more reliable behavior
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [submitted]);

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

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
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
                        <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Hackathon Logo" width={300} height={300} className="logoHTB w-48 h-48 sm:w-72 sm:h-72" priority />
                        <h1 id="hero-heading" className="!mt-2">
                            Hack The Boot
                        </h1>
                    </div>
                    {/* ================= SUBTITLE ================= */}
                    <p className="!mt-2 sm:!mt-[-40px] !text-gray-400 !text-sm sm:!text-base !font-medium !max-w-md !mx-auto">A 24-hour international student hackathon in Milan</p>
                    {/* ================= TYPEWRITER ================= */}
                    <p className="hackInfo !max-w-5xl !mx-auto !mt-6 !text-gray-300">
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
                        className="!mt-8 !px-6 sm:!px-10 !mb-3 !py-4 sm:!py-5 !rounded-2xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 
                        !text-white !font-bold !text-lg sm:!text-xl !tracking-wide !shadow-lg 
                        hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                        !transform hover:!scale-105 hover:!shadow-cyan-500/50"
                    >
                        Pre-Register Now
                    </button>
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
                               !w-full !rounded-[20px] !p-6 sm:!p-8 !min-h-[160px] sm:!min-h-[180px]
                               !bg-[rgba(51,54,56,0.27)] 
                               !border-2 !border-blue-500/30 
                               !transition-all !duration-300 !ease-out 
                               hover:!bg-[rgba(51,54,56,0.40)] hover:!border-blue-500/50
                               hover:!scale-[1.02] group"
                                    >
                                        <div className="!flex !flex-col !items-center !justify-center !h-full !space-y-4">
                                            <div className="!p-4 sm:!p-5 !rounded-full !bg-blue-500/10 group-hover:!bg-blue-500/20 !transition-all !duration-300">{card.icon}</div>
                                            <p className="!text-gray-400 !text-sm sm:!text-lg !tracking-wide !uppercase !font-semibold">{card.label}</p>
                                            <p className="!text-blue-400 !font-extrabold !text-xl sm:!text-4xl !leading-snug group-hover:!text-blue-300 !transition-colors !duration-300">{card.text}</p>{" "}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {/* ================= DESCRIPTIVE SUBTITLE =================
                <section className="!mt-16 !w-full text-center">
                    <h2 className="!text-white !text-xl sm:!text-2xl mb-4">
                        <span className="!font-medium">Hack The Boot is a 24-hour innovation marathon where students from around the world team up to build, design, and launch new ideas in Milan.</span>
                        <br />
                        <span className="!font-bold">Turn your creativity into reality: one hack at a time.</span>
                    </h2>
                </section> */}

                {/* ================= ARROW CUE ================= */}
                <section className="!mt-8 sm:!mt-16 !flex !justify-center !items-center !w-full">
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
                {/* ================= TERMINAL FORM ================= */}
                <section className="!mt-6 sm:!mt-10 !w-full" aria-labelledby="pre-register">
                    <div className="!mx-auto !w-full !max-w-7xl px-4 sm:px-6">
                        <h2 id="pre-register" className="sr-only">
                            Pre-register Form
                        </h2>
                        <form ref={terminalRef} onSubmit={handleSubmit} className="!w-full !mx-auto !max-w-6xl !transition-all !duration-300 !rounded-2xl !min-h-[280px] sm:!min-h-[360px]">
                            <Terminal>
                                {!submitted ? (
                                    <>
                                        <p className="!text-green-400 !font-mono !text-lg sm:!text-xl mb-2">
                                            $ Welcome to <span className="!text-cyan-400">HackTheBoot</span> pre-registration
                                        </p>
                                        <p className="!text-gray-400 !text-base sm:!text-lg !font-mono mb-4"># Please enter your info below:</p>

                                        <div className="!flex !flex-col !gap-5 !mt-2">
                                            <div className="!flex !flex-col">
                                                <label htmlFor="fullName" className="!block !text-gray-400 !font-mono !text-sm sm:!text-base !mb-1">
                                                    Insert your full name
                                                </label>
                                                <Field id="fullName" text="E.g. Paolo Rossi" required />
                                            </div>

                                            <div className="!flex !flex-col">
                                                <label htmlFor="email" className="!block !text-gray-400 !font-mono !text-sm sm:!text-base !mb-1">
                                                    Insert your email address (Use a personal email address)
                                                </label>
                                                <Field id="email" type="email" text="E.g. paolo.rossi@example.com" required />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="!mt-6 !w-full !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !py-4
              !text-white !font-semibold !font-mono !text-lg !tracking-wide !shadow-md
              hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
              !transform hover:!scale-[1.02]"
                                        >
                                            $ Submit
                                        </button>
                                    </>
                                ) : (
                                    <div role="status" aria-live="polite" className="!space-y-2">
                                        <p className="!text-green-400 !font-mono !text-xl sm:!text-2xl">$ Thank you for pre-registering!</p>
                                        <p className="!text-gray-400 !font-mono !text-lg sm:!text-xl"># We&apos;ll notify you when applications open.</p>
                                    </div>
                                )}
                            </Terminal>
                        </form>
                    </div>
                </section>
            </main>
            
            {/* ================= FAQ SECTION ================= */}
            {!submitted && (
                <>
                    {/* ================= FAQ SECTION ================= */}
                    <section className="!mt-20 !w-full !text-center" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold !mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="!max-w-3xl !mx-auto !text-left !space-y-3 !px-4 sm:!px-0">
                    {[
                        {
                            q: "What is a hackathon?",
                            a: "A hackathon is a 24-hour creative tech marathon where students team up to build prototypes: from software and hardware to AI tools or IoT devices. It’s not just coding: it’s collaboration, design, innovation, and fun. Hack The Boot will bring this experience to Milan, empowering students to turn bold ideas into reality.",
                        },
                        {
                            q: "How much does it cost?",
                            a: "Nothing at all! Hack The Boot is completely free to attend. The only thing you need to bring is your curiosity and energy.",
                        },
                        {
                            q: "What if I don’t know how to code?",
                            a: "No worries! Hackathons are for everyone! Whether you’re a designer, researcher, storyteller, or just curious, you can contribute. Our beginner track and mentors will guide you through tools and creative processes so you can still build something amazing.",
                        },
                        {
                            q: "What if I don’t have an idea or a team?",
                            a: "You can still join! We’ll organize team formation sessions and idea jams before hacking begins, so you can meet other participants and collaborate on something exciting together.",
                        },
                        {
                            q: "What can I build?",
                            a: "Anything that solves a real problem or inspires others: from apps and AI tools to hardware prototypes and data-driven projects. You’ll be able to choose from themes like Education, Healthcare, and Sustainability, or even tackle custom sponsor challenges.",
                        },
                        {
                            q: "Who can come?",
                            a: "Hack The Boot is open to all students: undergraduate, graduate, from Italy and around the world. Whether you’re a first-timer or an experienced builder, you’re welcome to join us in Milan for 24 hours of creativity, collaboration, and discovery.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="!group !rounded-xl !bg-[rgba(30,32,33,0.6)] !border !border-blue-500/20 
                   !overflow-hidden !transition-all !duration-300 hover:!border-blue-500/40"
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="!w-full !flex !justify-between !items-start !cursor-pointer !p-4 sm:!p-5 
                     !text-gray-200 !font-semibold !text-base sm:!text-lg !text-left
                     hover:!text-blue-400 !transition-all"
                            >
                                <span className="!flex-1 !text-left !pr-4">{item.q}</span>
                                <span className="!text-blue-400 !text-2xl !font-light !transition-transform !duration-300 !flex-shrink-0">
                                    {openFAQ === i ? "−" : "+"}
                                </span>
                            </button>
                            {openFAQ === i && (
                                <div className="!p-5 !pt-0 !text-gray-400 !leading-relaxed !border-t !border-blue-500/10">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                    </section>
                </>
            )}

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
                            <p className="!text-sm sm:!text-base !text-gray-400">© {new Date().getFullYear()} Hack The Boot | Made with ❤️ by The Hack The Boot Team</p>
                            <p className="!text-xs sm:!text-sm !text-gray-500">All rights reserved</p>
                        </div>
                    </div>
                </div>

                <div className="!absolute !bottom-0 !left-1/2 !-translate-x-1/2 !w-1/2 !h-px !bg-gradient-to-r !from-transparent !via-cyan-500/30 !to-transparent !blur-sm" />
            </footer>
        </>
    );
}
