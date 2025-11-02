"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="page">
            <motion.section className="mainPageContainer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="!text-3xl !font-bold !mb-8">Privacy Policy & Data Protection</h1>

                <div className="!prose !prose-invert !max-w-4xl !mx-auto">
                    <h2 className="!text-2xl !font-semibold !mt-8 !mb-4">HackTheBoot Privacy Policy (GDPR / EU Regulation 2016/679)</h2>

                    <p className="!mb-6">HackTheBoot (Milan, Italy) is the data controller for participant information collected via this site.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Data Collection</h3>
                    <p className="!mb-4">Data collected: full name, email address, and other details you voluntarily provide.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Purpose</h3>
                    <ul className="!list-disc !ml-6 !mb-6">
                        <li className="!mb-2">To process your registration and participation in HackTheBoot</li>
                        <li className="!mb-2">To send event-related communications (confirmation, updates, logistics)</li>
                        <li className="!mb-2">To send marketing/newsletters only if you consent</li>
                    </ul>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Legal Basis</h3>
                    <p className="!mb-4">Contract necessity, legitimate interest, and consent (for marketing).</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Data Sharing</h3>
                    <p className="!mb-4">Only with authorized service providers (email, hosting, registration tools). Data is never sold or shared with sponsors without consent.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">International Transfers</h3>
                    <p className="!mb-4">If any data leaves the EU, it is protected under Standard Contractual Clauses.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Retention</h3>
                    <p className="!mb-4">Stored only as long as needed for event management or until consent is withdrawn.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Your Rights</h3>
                    <p className="!mb-4">
                        Access, correction, deletion, restriction, objection, portability — contact{" "}
                        <a href="mailto:privacy@hacktheboot.it" className="!text-blue-400 hover:!text-blue-300">
                            privacy@hacktheboot.it
                        </a>
                    </p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Supervisory Authority</h3>
                    <p className="!mb-4">
                        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="!text-blue-400 hover:!text-blue-300">
                            Garante per la Protezione dei Dati Personali
                        </a>
                    </p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Minors</h3>
                    <p className="!mb-4">Participants under 14 require parental consent.</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">Contact</h3>
                    <p className="!mb-8">
                        <a href="mailto:privacy@hacktheboot.it" className="!text-blue-400 hover:!text-blue-300">
                            privacy@hacktheboot.it
                        </a>
                    </p>

                    <div className="!border-t !border-blue-500/20 !mt-12 !pt-6 !text-center !text-sm !text-gray-400">© HackTheBoot 2026 – All rights reserved. Your privacy matters.</div>
                </div>
            </motion.section>
        </main>
    );
}
