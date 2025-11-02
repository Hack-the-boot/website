"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Sponsors() {
    const { t } = useLanguage();

    return (
        <main className="page">
            <motion.section className="mainPageContainer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="!text-center !mb-5">
                    <Image src="/img/Logo_Transparent.png" alt="Hack The Boot Logo" width={120} height={120} className="!mx-auto !mb-6" />
                    <h1 className="!text-4xl sm:!text-5xl !font-bold !text-white !mb-4">{t.sponsors.title}</h1>
                    <p className="!text-xl !text-gray-300 !max-w-3xl !mx-auto">{t.sponsors.subtitle}</p>
                </div>

                <div className="!max-w-4xl !mx-auto !space-y-8">
                    {/* Event Information */}
                    <motion.div className="!rounded-2xl !p-8 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <h2 className="!text-2xl !font-bold !text-white !mb-6">{t.sponsors.aboutTitle}</h2>
                        <div className="!prose !prose-invert !text-gray-300 !space-y-4">
                            <p>
                                <strong className="!text-white">Hack The Boot</strong> {t.sponsors.aboutDesc1}
                            </p>
                            <p>{t.sponsors.aboutDesc2}</p>
                            <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4 !mt-6">
                                <div className="!flex !items-start !gap-3">
                                    <svg className="!w-6 !h-6 !text-blue-400 !mt-1 !flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <div>
                                        <p className="!font-semibold !text-white">{t.sponsors.stats.students}</p>
                                        <p className="!text-sm !text-gray-400">{t.sponsors.stats.studentsDesc}</p>
                                    </div>
                                </div>
                                <div className="!flex !items-start !gap-3">
                                    <svg className="!w-6 !h-6 !text-blue-400 !mt-1 !flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <p className="!font-semibold !text-white">{t.sponsors.stats.date}</p>
                                        <p className="!text-sm !text-gray-400">{t.sponsors.stats.dateDesc}</p>
                                    </div>
                                </div>
                                <div className="!flex !items-start !gap-3">
                                    <svg className="!w-6 !h-6 !text-blue-400 !mt-1 !flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="!font-semibold !text-white">{t.sponsors.stats.location}</p>
                                        <p className="!text-sm !text-gray-400">{t.sponsors.stats.locationDesc}</p>
                                    </div>
                                </div>
                                <div className="!flex !items-start !gap-3">
                                    <svg className="!w-6 !h-6 !text-blue-400 !mt-1 !flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div>
                                        <p className="!font-semibold !text-white">{t.sponsors.stats.impact}</p>
                                        <p className="!text-sm !text-gray-400">{t.sponsors.stats.impactDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Why Sponsor */}
                    <motion.div className="!rounded-2xl !p-8 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                        <h2 className="!text-2xl !font-bold !text-white !mb-6">{t.sponsors.whyTitle}</h2>
                        <div className="!space-y-4 !text-gray-300">
                            <div className="!flex !items-start !gap-4">
                                <div className="!p-2 !rounded-lg !bg-blue-500/10 !flex-shrink-0">
                                    <svg className="!w-5 !h-5 !text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="!font-semibold !text-white !mb-1">{t.sponsors.why.talent.title}</p>
                                    <p className="!text-sm">{t.sponsors.why.talent.desc}</p>
                                </div>
                            </div>
                            <div className="!flex !items-start !gap-4">
                                <div className="!p-2 !rounded-lg !bg-blue-500/10 !flex-shrink-0">
                                    <svg className="!w-5 !h-5 !text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="!font-semibold !text-white !mb-1">{t.sponsors.why.brand.title}</p>
                                    <p className="!text-sm">{t.sponsors.why.brand.desc}</p>
                                </div>
                            </div>
                            <div className="!flex !items-start !gap-4">
                                <div className="!p-2 !rounded-lg !bg-blue-500/10 !flex-shrink-0">
                                    <svg className="!w-5 !h-5 !text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="!font-semibold !text-white !mb-1">{t.sponsors.why.innovation.title}</p>
                                    <p className="!text-sm">{t.sponsors.why.innovation.desc}</p>
                                </div>
                            </div>
                            <div className="!flex !items-start !gap-4">
                                <div className="!p-2 !rounded-lg !bg-blue-500/10 !flex-shrink-0">
                                    <svg className="!w-5 !h-5 !text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="!font-semibold !text-white !mb-1">{t.sponsors.why.community.title}</p>
                                    <p className="!text-sm">{t.sponsors.why.community.desc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Team */}
                    <motion.div className="!rounded-2xl !p-8 !bg-[rgba(51,54,56,0.27)] !border !border-blue-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h2 className="!text-2xl !font-bold !text-white !mb-6">{t.sponsors.teamTitle}</h2>
                        <div className="!prose !prose-invert !text-gray-300 !space-y-4">
                            <p>{t.sponsors.teamDesc1}</p>
                            <p>{t.sponsors.teamDesc2}</p>
                            <p className="!text-sm !text-gray-400 !mt-4">{t.sponsors.teamDesc3}</p>
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div className="!rounded-2xl !p-8 !bg-gradient-to-br !from-blue-500/10 !to-cyan-500/10 !border !border-blue-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                        <div className="!text-center !space-y-6">
                            <div>
                                <h2 className="!text-3xl !font-bold !text-white !mb-3">{t.sponsors.contactTitle}</h2>
                                <p className="!text-gray-300 !max-w-2xl !mx-auto">{t.sponsors.contactDesc}</p>
                            </div>
                            <div className="!flex !flex-col !items-center !gap-4">
                                <a href="mailto:sponsors@hacktheboot.it" className="!inline-flex !items-center !gap-3 !px-8 !py-4 !rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !text-white !font-bold !text-lg !shadow-lg hover:!from-blue-600 hover:!to-cyan-600 !transition-all !duration-300 !transform hover:!scale-105">
                                    <svg className="!w-6 !h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    sponsors@hacktheboot.it
                                </a>
                                <p className="!text-sm !text-gray-400">{t.sponsors.contactResponse}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Note */}
                    <div className="!border-t !border-blue-500/20 !pt-6 !text-center !text-sm !text-gray-400">
                        <p>{t.sponsors.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
                        <p className="!mt-2">
                            <a href="/" className="!text-blue-400 hover:!text-blue-300 !underline">
                                {t.sponsors.returnHome}
                            </a>
                        </p>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
