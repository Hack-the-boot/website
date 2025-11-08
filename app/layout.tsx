import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Source_Code_Pro } from "next/font/google";
import "./globals.css";
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
    title: "Hack The Boot: Italy's Signature Hackathon",
    description: "Hack The Boot — Italy's premier international student hackathon in Milan. 24 hours of innovation, creativity, and competition. Pre-register now for Spring 2026!",
    keywords: "Hack The Boot, Hackathon Italy, Student Hackathon Milan, Hack The Boot 2026, International Hackathon Europe, Tech Competition Italy, Hackathon for Students",
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
            { url: "/Logo_Transparent.ico", sizes: "48x48", type: "image/x-icon" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
            { url: "/favicon.png", sizes: "any", type: "image/png" },
        ],
        shortcut: "/Logo_Transparent.ico",
        apple: "/favicon-192x192.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hacktheboot.it",
        siteName: "Hack The Boot",
        title: "Hack The Boot: Italy's Signature Hackathon",
        description: "Compete. Build. WIN. Join Italy's international student hackathon — 24 hours of innovation in Milan.",
        images: [
            {
                url: "/img/Logo_Transparent.png",
                width: 1200,
                height: 630,
                alt: "Hack The Boot Hackathon Logo",
            },
        ],
        // Declare Italian as an alternate locale for better SERP localization
        alternateLocale: ["it_IT"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hack The Boot: Italy's Signature Hackathon",
        description: "Join hundreds of students for 24 hours of creativity, code, and competition. Pre-register now!",
        images: ["/img/Logo_Transparent.png"],
        creator: "@hacktheboot",
    },
    alternates: {
        canonical: "https://hacktheboot.it",
        languages: {
            en: "/",
            it: "/it",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${sourceCodePro.variable} antialiased`}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
