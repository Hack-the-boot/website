"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Terminal, { Field } from "@/components/Terminal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const phrases = ["Where bold ideas become reality", "Compete. Build. WIN.", "24 hours of innovation in Milan", "Create the future, one hack at a time"];

    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [ctaStickyVisible, setCtaStickyVisible] = useState(false);
    const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

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

    // ================= COUNTDOWN =================
    useEffect(() => {
        const eventDate = new Date("2026-03-01T09:00:00+01:00").getTime();
        const timer = setInterval(() => {
            const now = Date.now();
            const diff = Math.max(0, eventDate - now);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setCountdown({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // ================= STICKY CTA VISIBILITY =================
    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            setCtaStickyVisible(scrolled > 600 && !submitted);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [submitted]);

    // ================= SCROLL TO TOP ON SUBMIT =================
    useEffect(() => {
        if (submitted) {
            // Wait a bit for the DOM to update, then scroll to top with smooth animation
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
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

    const shareInvite = async () => {
        const shareText = "I’m joining Italy’s national student hackathon in Milan, open to students worldwide. Come build with me at Hack The Boot! #HackTheBoot";
        const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://hacktheboot.it";
        const title = "Hack The Boot — Italy’s Student Hackathon";
        try {
            if (navigator.share) {
                await navigator.share({ title, text: shareText, url: shareUrl });
            } else {
                await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                alert("Share message copied to clipboard!");
            }
        } catch (e) {
            try {
                await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                alert("Share message copied to clipboard!");
            } catch (_) {
                // ignore
            }
        }
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            {/* ================= STRUCTURED DATA ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "Hack The Boot",
                        description: "Italy's premier international student hackathon in Milan. 24 hours of innovation, creativity, and competition.",
                        startDate: "2026-03-01T00:00:00+01:00",
                        endDate: "2026-03-02T00:00:00+01:00",
                        eventStatus: "https://schema.org/EventScheduled",
                        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                        location: {
                            "@type": "Place",
                            name: "Milan, Italy",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Milan",
                                addressCountry: "IT",
                            },
                        },
                        organizer: {
                            "@type": "Organization",
                            name: "Hack The Boot",
                            url: "https://hacktheboot.it",
                            logo: "https://hacktheboot.it/img/Logo_Transparent.png",
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "EUR",
                            availability: "https://schema.org/InStock",
                        },
                        audience: {
                            "@type": "Audience",
                            audienceType: "Students",
                        },
                        url: "https://hacktheboot.it",
                        image: "https://hacktheboot.it/img/Logo_Transparent.png",
                    }),
                }}
            />

            {/* ================= NAVBAR ================= */}
            <header className="!fixed !top-0 !left-0 !right-0 !z-50 !backdrop-blur !bg-[rgba(20,22,23,0.55)] !border-b !border-blue-500/20">
                <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 !h-14 !flex !items-center !justify-between">
                    <div className="!flex !items-center !gap-3">
                        <button className="sm:!hidden !p-2 !rounded-lg !border !border-blue-500/30 !text-gray-200 hover:!bg-blue-500/10 !transition" aria-label="Toggle navigation" onClick={() => setMobileNavOpen((v) => !v)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="!h-5 !w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <a href="#hero-heading" className="!hidden sm:!flex !items-center !gap-3 !text-gray-200 !font-semibold hover:!text-white !transition">
                            <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Logo" width={32} height={32} className="!w-8 !h-8" />
                            Hack The Boot
                        </a>
                    </div>
                    <nav className="!hidden sm:!flex !items-center !gap-5">
                        <a href="#why-join-heading" className="!text-gray-300 hover:!text-white !transition">
                            Why Join
                        </a>
                        <a href="#faq-heading" className="!text-gray-300 hover:!text-white !transition">
                            FAQs
                        </a>
                        <a href="#contacts" className="!text-gray-300 hover:!text-white !transition">
                            Contacts
                        </a>
                        <a href="#pre-register" className="!text-blue-300 hover:!text-white !font-bold !transition">
                            Join
                        </a>
                    </nav>
                </div>
                {mobileNavOpen && (
                    <div className="sm:!hidden !px-4 !pb-3">
                        <div className="!mt-2 !rounded-xl !border !border-blue-500/20 !bg-[rgba(30,32,33,0.75)] !backdrop-blur !p-3 !space-y-2">
                            <a href="#hero-heading" onClick={() => setMobileNavOpen(false)} className="!flex !items-center !gap-3 !px-5 !py-2 !rounded-lg !text-gray-200 hover:!bg-blue-500/10 !transition !mb-2">
                                <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Logo" width={24} height={24} className="!w-6 !h-6" />
                                <span className="!font-semibold">Hack The Boot</span>
                            </a>
                            {[
                                { href: "#why-join-heading", label: "Why Join" },
                                { href: "#faq-heading", label: "FAQs" },
                                { href: "#contacts", label: "Contacts" },
                                { href: "#pre-register", label: "Join" },
                            ].map((l, i) => (
                                <a key={i} href={l.href} onClick={() => setMobileNavOpen(false)} className="!block !w-full !px-3 !py-2 !rounded-lg !text-gray-200 hover:!bg-blue-500/10 !transition">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* ================= MAIN ================= */}
            <main className="page">
                {/* ================= HERO ================= */}
                <section className="mainPageContainer text-center" aria-labelledby="hero-heading">
                    <div className="logoAndText !mt-12 sm:!mt-20">
                        <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Hackathon Logo" width={300} height={300} className="logoHTB w-48 h-48 sm:w-72 sm:h-72" priority />
                        <h1 id="hero-heading" className="!mt-2">
                            Italy's Signature Hackathon
                        </h1>
                    </div>
                    {/* ================= SUBTITLE ================= */}
                    <p className="!mt-2 sm:!mt-[-40px] !text-gray-300 !text-base sm:!text-lg !font-medium !max-w-2xl !mx-auto">
                        Made by students, for students.
                    </p>
                    {/* ================= TYPEWRITER ================= */}
                    <p className="hackInfo !max-w-5xl !mx-auto !mt-6 !text-gray-300">
                        <span className="tech-gradient">
                            <span className="typewriter">{displayText}</span>
                            <span className="cursor" />
                        </span>
                    </p>

                    {/* ================= HYPE BADGES ================= */}
                    <div className="!mt-8 !flex !items-center !justify-center !gap-3 sm:!gap-4 !flex-wrap">
                        {[
                            {
                                label: "No experience required",
                                icon: (
                                    <svg className="!w-4 !h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "International students welcome",
                                icon: (
                                    <svg className="!w-4 !h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Mentors & workshops",
                                icon: (
                                    <svg className="!w-4 !h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                ),
                            },
                            {
                                label: "Food, swag, prizes",
                                icon: (
                                    <svg className="!w-4 !h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                    </svg>
                                ),
                            },
                        ].map((b, i) => (
                            <div key={i} className="!px-3 !py-2 !rounded-full !border !border-blue-500/30 !bg-[rgba(51,54,56,0.27)] !text-gray-200 !text-sm !flex !items-center !gap-2">
                                {b.icon}
                                <span>{b.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="!mt-8 !flex !items-center !justify-center !gap-3 sm:!gap-4 !flex-wrap">
                        <button
                            onClick={scrollToTerminal}
                            className="!px-6 sm:!px-10 !py-4 sm:!py-5 !rounded-2xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 
                            !text-white !font-bold !text-lg sm:!text-xl !tracking-wide !shadow-lg 
                            hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 
                            !transform hover:!scale-105 hover:!shadow-cyan-500/50"
                            aria-label="Join now"
                        >
                            Join Now
                        </button>
                        <button
                            onClick={shareInvite}
                            className="!px-6 sm:!px-10 !py-4 sm:!py-5 !rounded-2xl !border !border-blue-500/50 !text-blue-300 !font-bold !text-lg sm:!text-xl 
                            hover:!bg-blue-500/10 !transition-all !duration-300"
                            aria-label="Invite a friend"
                        >
                            Invite a Friend
                        </button>
                    </div>
                    <p className="!text-lg !mt-6 sm:!text-xl !font-medium !text-gray-400 !text-center">
                        <span className="!text-blue-300">Limited spots available.</span> Be the first to know when applications open.
                    </p>
                </section>
                {/* ================= WHEN & WHERE ================= */}
                {!submitted && (
                    <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="event-details-heading">
                        <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                            <h2 id="event-details-heading" className="sr-only">
                                Event Details
                            </h2>

                            <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
                                {[
                                    {
                                        label: "When",
                                        text: "March 2026",
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
                <section className="!mt-12 sm:!mt-16 !flex !justify-center !items-center !w-full">
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
                {/* ================= WHY JOIN ================= */}
                <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="why-join-heading">
                    <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                        <h2 id="why-join-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold !text-center !mb-8">
                            Why Join
                        </h2>
                        <div className="!grid !grid-cols-1 sm:!grid-cols-3 !gap-4 sm:!gap-6">
                            {[
                                {
                                    title: "Learn & Grow",
                                    desc: "Workshops, mentors, and hands-on building. Pick up new skills by doing.",
                                    icon: (
                                        <svg className="!w-6 !h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "Connect & Collaborate",
                                    desc: "Meet students from Italy and abroad. Team up across disciplines.",
                                    icon: (
                                        <svg className="!w-6 !h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "Create & Shine",
                                    desc: "Prototype, pitch, and get recognized. Prizes, opportunities, and stories to tell.",
                                    icon: (
                                        <svg className="!w-6 !h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                },
                            ].map((c, i) => (
                                <div key={i} className="!rounded-2xl !p-6 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20 hover:!border-blue-500/40 !transition-all">
                                    <div className="!flex !items-center !gap-3">
                                        <div className="!p-3 !rounded-full !bg-blue-500/10">{c.icon}</div>
                                        <p className="!font-bold !text-white">{c.title}</p>
                                    </div>
                                    <p className="!mt-3 !text-gray-400">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ================= HOW IT WORKS =================
                <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="how-heading">
                    <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                        <h2 id="how-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold !text-center">
                            How It Works
                        </h2>
                        <div className="!mt-8 !grid !grid-cols-1 sm:!grid-cols-5 !gap-4">
                            {["Apply", "Form Team", "Build", "Present", "Celebrate"].map((step, i) => (
                                <div key={i} className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20">
                                    <div className="!flex !items-center !gap-3">
                                        <div className="!h-8 !w-8 !rounded-full !bg-blue-500/20 !text-blue-300 !flex !items-center !justify-center !font-bold">{i + 1}</div>
                                        <p className="!text-white !font-semibold">{step}</p>
                                    </div>
                                    <p className="!mt-3 !text-gray-400 !text-sm">
                                        {step === "Apply" && "Simple pre-registration. No prior experience required."}
                                        {step === "Form Team" && "Meet students from all disciplines. We help you match."}
                                        {step === "Build" && "24 hours with mentors, food, and fun. Learn by doing."}
                                        {step === "Present" && "Pitch your prototype to judges and peers."}
                                        {step === "Celebrate" && "Prizes, recognition, and a new community."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
                {/* ================= COMMUNITY & SOCIAL PROOF ================= */}
                {/* <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="community-heading">
                    <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                        <h2 id="community-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold !text-center">
                            Be part of the first cohort.
                        </h2>
                        <div className="!mt-8 !grid !grid-cols-1 sm:!grid-cols-3 !gap-4">
                            {["Day 1 of Italy’s hackathon movement starts with you.", "Limited spots. Big stage. Build something you’ll talk about.", "No experience needed — just bring ambition and curiosity."].map((t, i) => (
                                <div key={i} className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20 !text-gray-300">
                                    {t}
                                </div>
                            ))}
                        </div>

                        <div className="!mt-6 !flex !items-center !justify-between !flex-col sm:!flex-row !gap-3">
                            <p className="!text-gray-300">#HackTheBoot — Italy’s first national student hackathon in Milan, open to the world. Join me?</p>
                            <button onClick={shareInvite} className="!px-5 !py-3 !rounded-xl !border !border-blue-500/50 !text-blue-300 hover:!bg-blue-500/10 !transition-all">
                                Share your intent
                            </button>
                        </div>
                    </div>
                </section> */}
                {/* ================= TIMELINE & LOGISTICS ================= */}
                {/* <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="logistics-heading">
                    <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6">
                        <h2 id="logistics-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold !text-center">
                            At a Glance
                        </h2>
                        <div className="!mt-8 !grid !grid-cols-1 sm:!grid-cols-4 !gap-4">
                            <div className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20">
                                <div className="!flex !items-center !gap-2">
                                    <span className="!text-xl">🗓️📍</span>
                                    <p className="!text-gray-400 !uppercase !text-xs !tracking-wide">When & Where</p>
                                </div>
                                <p className="!mt-2 !text-white !font-semibold">Spring 2026 — Milan</p>
                                <p className="!mt-2 !text-gray-400 !text-sm">Exact venue announcement coming soon.</p>
                            </div>
                            <div className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20">
                                <div className="!flex !items-center !gap-2">
                                    <span className="!text-xl">💸</span>
                                    <p className="!text-gray-400 !uppercase !text-xs !tracking-wide">Cost</p>
                                </div>
                                <p className="!mt-2 !text-white !font-semibold">Free for students</p>
                                <p className="!mt-2 !text-gray-400 !text-sm">Every expense will be covered by sponsors and the university.</p>
                            </div>
                            <div className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20">
                                <div className="!flex !items-center !gap-2">
                                    <span className="!text-xl">🎓</span>
                                    <p className="!text-gray-400 !uppercase !text-xs !tracking-wide">Who can join</p>
                                </div>
                                <p className="!mt-2 !text-white !font-semibold">All disciplines. All universities.</p>
                                <p className="!mt-2 !text-gray-400 !text-sm">Don't know how to code? We welcome any background, skills, or ideas.</p>
                            </div>
                            <div className="!rounded-2xl !p-5 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20">
                                <div className="!flex !items-center !gap-2">
                                    <span className="!text-xl">📝</span>
                                    <p className="!text-gray-400 !uppercase !text-xs !tracking-wide">How to apply</p>
                                </div>
                                <p className="!mt-2 !text-white !font-semibold">Pre-register below in seconds.</p>
                                <p className="!mt-2 !text-gray-400 !text-sm">We'll notify you when applications open.</p>
                            </div>
                        </div>
                        <div className="!mt-8 !text-center">
                            <p className="!text-gray-300 !mb-3">Applications open in</p>
                        </div>
                        <div className="!mt-2 !flex !items-center !justify-center !gap-6 !text-center">
                            <div className="!px-6 !py-4 !rounded-2xl !bg-gradient-to-r !from-green-500/10 !via-white/5 !to-red-500/10 !border !border-blue-500/20 !text-white !font-mono">
                                {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* ================= TERMINAL FORM ================= */}
                <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="pre-register">
                    <div className="!mx-auto !w-full !max-w-7xl px-4 sm:px-6">
                        <div className="!text-center !mb-8">
                            <h2 id="pre-register" className="!text-white !text-2xl sm:!text-3xl !font-bold !mb-4">
                                Pre-Register Now
                            </h2>
                            <p className="!text-gray-300 !text-base sm:!text-lg !max-w-2xl !mx-auto">Secure your spot for Italy's premier student hackathon. Fill out the form below to be the first to know when applications open.</p>
                        </div>
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
                {/* ================= BOTTOM CTA ================= */}
                <section className="!mt-16 sm:!mt-24 !w-full" aria-labelledby="bottom-cta-heading">
                    <div className="!mx-auto !w-full !max-w-6xl px-4 sm:px-6 !text-center">
                        <h2 id="bottom-cta-heading" className="!text-white !text-2xl sm:!text-3xl !font-bold">
                            This is where Italy’s student innovators rise.
                        </h2>
                        <p className="!mt-3 !text-gray-300">Join the movement. Build, learn, and create the future, together.</p>
                        <div className="!mt-6 !flex !items-center !justify-center !gap-3 !flex-wrap">
                            <button onClick={shareInvite} className="!px-6 !py-4 !rounded-2xl !border !border-blue-500/50 !text-blue-300 hover:!bg-blue-500/10 !transition-all">
                                Invite a Friend
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* ================= STICKY CTA ================= */}
            {!submitted && ctaStickyVisible && (
                <div className="!fixed !bottom-4 !left-1/2 !-translate-x-1/2 !z-50 !backdrop-blur !bg-[rgba(30,32,33,0.6)] !border !border-blue-500/30 !rounded-2xl !shadow-xl !px-4 !py-3 !flex !items-center !gap-3">
                    <span className="!hidden sm:!inline !text-gray-200">Be part of Italy’s innovation story</span>
                    <button onClick={scrollToTerminal} className="!px-6 !py-3 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !text-white !font-semibold !text-base sm:!text-sm !whitespace-nowrap hover:!from-blue-600 hover:!to-cyan-600 !transition-all">
                        Join Now
                    </button>
                    <button onClick={shareInvite} className="!px-4 !py-2 !rounded-xl !border !border-blue-500/50 !text-blue-300 hover:!bg-blue-500/10 !transition-all">
                        Invite
                    </button>
                </div>
            )}

            {/* ================= FAQ SECTION ================= */}
            {!submitted && (
                <>
                    {/* ================= FAQ SECTION ================= */}
                    <section className="!mt-16 sm:!mt-24 !w-full !text-center" aria-labelledby="faq-heading">
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
                                    q: "What if I don't have an idea or a team?",
                                    a: "You can still join! We'll organize team formation sessions and idea jams before hacking begins, so you can meet other participants and collaborate on something exciting together. Teams must be between 1-4 people.",
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
                                        className="!w-full !flex !justify-between !items-start !cursor-pointer !p-4 sm:!p-5 
                     !text-gray-200 !font-semibold !text-base sm:!text-lg !text-left
                     hover:!text-blue-400 !transition-all"
                                        onClick={() => toggleFAQ(i)}
                                    >
                                        <span className="!flex-1 !text-left !pr-4">{item.q}</span>
                                        <span className="!text-blue-400 !text-2xl !font-light !flex-shrink-0">
                                            {openFAQ === i ? "−" : "+"}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openFAQ === i && (
                                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }} exit={{ opacity: 0, y: 9, transition: { duration: 0.22, ease: "easeIn" } }} className="!p-5 !pt-0 !text-gray-400 !leading-relaxed !border-t !border-blue-500/10">
                                                {item.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {/* ================= FOOTER ================= */}
            <footer id="contacts" className="!relative !mt-20 !w-full !border-t !border-blue-500/20 !bg-gradient-to-b !from-[rgba(51,54,56,0.2)] !to-[rgba(51,54,56,0.4)]">
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
