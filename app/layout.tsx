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
    title: "Hack The Boot | Italy's International Student Hackathon 2026",
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
            { url: "/favicon.png", sizes: "any" },
            { url: "/favicon.png", type: "image/png" },
        ],
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hacktheboot.it",
        siteName: "Hack The Boot",
        title: "Hack The Boot | Italy's International Student Hackathon 2026",
        description: "Compete. Build. WIN. Join Italy's international student hackathon — 24 hours of innovation in Milan.",
        images: [
            {
                url: "/img/Logo_Transparent.png",
                width: 1200,
                height: 630,
                alt: "Hack The Boot Hackathon Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hack The Boot | Student Hackathon in Milan",
        description: "Join hundreds of students for 24 hours of creativity, code, and competition. Pre-register now!",
        images: ["/img/Logo_Transparent.png"],
        creator: "@hacktheboot",
    },
    alternates: {
        canonical: "https://hacktheboot.it",
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
