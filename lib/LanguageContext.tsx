"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations } from "./translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load language from localStorage on mount
        const savedLang = localStorage.getItem("hacktheboot-language") as Language | null;
        if (savedLang && (savedLang === "en" || savedLang === "it")) {
            setLanguageState(savedLang);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("hacktheboot-language", lang);
        // Update HTML lang attribute
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
    };

    // Update HTML lang attribute when language changes
    useEffect(() => {
        if (mounted && typeof document !== "undefined") {
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const t = translations[language];

    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
