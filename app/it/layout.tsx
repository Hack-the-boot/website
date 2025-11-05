import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
    variable: "--font-source-code-pro",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hack The Boot: L'hackathon Made In Italy",
    description: "Hack The Boot — l'hackathon studentesco internazionale in Italia. 24 ore di innovazione, creatività e competizione a Milano. Pre-registrati per la Spring 2026!",
    keywords: "Hack The Boot, Hackathon Italia, Hackathon Studenti Milano, Hack The Boot 2026, Hackathon Internazionale Europa, Competizione Tech Italia, Hackathon per Studenti",
    authors: [{ name: "Hack The Boot Team" }],
    creator: "Hack The Boot",
    publisher: "Hack The Boot",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
            { url: "/favicon.png", sizes: "any", type: "image/png" },
        ],
        shortcut: "/favicon-32x32.png",
        apple: "/favicon-192x192.png",
    },
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: "https://hacktheboot.it/it",
        siteName: "Hack The Boot",
        title: "Hack The Boot: L'hackathon Made In Italy",
        description: "Partecipa all'hackathon studentesco internazionale in Italia — 24 ore di innovazione a Milano.",
        images: [
            {
                url: "/img/Logo_Transparent.png",
                width: 1200,
                height: 630,
                alt: "Logo Hack The Boot Hackathon",
            },
        ],
        alternateLocale: ["en_US"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hack The Boot: L'hackathon Made In Italy",
        description: "Unisciti a centinaia di studenti per 24 ore di creatività, codice e competizione. Pre-registrati ora!",
        images: ["/img/Logo_Transparent.png"],
        creator: "@hacktheboot",
    },
    alternates: {
        canonical: "https://hacktheboot.it/it",
        languages: {
            en: "/",
            it: "/it",
        },
    },
};

export default function ItLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${sourceCodePro.variable} antialiased`}>
                {/* Ensure client UI loads in Italian */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: "try{localStorage.setItem('hacktheboot-language','it');}catch(e){}",
                    }}
                />
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
