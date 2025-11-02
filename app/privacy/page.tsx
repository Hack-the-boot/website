"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <main className="page">
            <motion.section className="mainPageContainer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="!text-3xl !font-bold !mb-8">{t.privacy.title}</h1>

                <div className="!prose !prose-invert !max-w-4xl !mx-auto">
                    <h2 className="!text-2xl !font-semibold !mt-8 !mb-4">{t.privacy.subtitle}</h2>

                    <p className="!mb-6">{t.privacy.controller}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.dataCollection}</h3>
                    <p className="!mb-4">{t.privacy.dataCollectionDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.purpose}</h3>
                    <ul className="!list-disc !ml-6 !mb-6">
                        {t.privacy.purposeItems.map((item, i) => (
                            <li key={i} className="!mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.legalBasis}</h3>
                    <p className="!mb-4">{t.privacy.legalBasisDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.dataSharing}</h3>
                    <p className="!mb-4">{t.privacy.dataSharingDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.international}</h3>
                    <p className="!mb-4">{t.privacy.internationalDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.retention}</h3>
                    <p className="!mb-4">{t.privacy.retentionDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.rights}</h3>
                    <p className="!mb-4">
                        {t.privacy.rightsDesc}{" "}
                        <a href="mailto:privacy@hacktheboot.it" className="!text-blue-400 hover:!text-blue-300">
                            privacy@hacktheboot.it
                        </a>
                    </p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.supervisory}</h3>
                    <p className="!mb-4">
                        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="!text-blue-400 hover:!text-blue-300">
                            Garante per la Protezione dei Dati Personali
                        </a>
                    </p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.minors}</h3>
                    <p className="!mb-4">{t.privacy.minorsDesc}</p>

                    <h3 className="!text-xl !font-semibold !mt-6 !mb-3">{t.privacy.contact}</h3>
                    <p className="!mb-8">
                        <a href="mailto:privacy@hacktheboot.it" className="!text-blue-400 hover:!text-blue-300">
                            privacy@hacktheboot.it
                        </a>
                    </p>

                    <div className="!border-t !border-blue-500/20 !mt-12 !pt-6 !text-center !text-sm !text-gray-400">{t.privacy.footer}</div>
                </div>
            </motion.section>
        </main>
    );
}
