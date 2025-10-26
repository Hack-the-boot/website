import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Source_Code_Pro } from "next/font/google";
import "./globals.css";

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
    title: "Hack The Boot",
    description: "Italy's student-powered international hackathon - Compete. Build. WIN.",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
            { url: "/favicon.png", sizes: "any" }
        ],
        shortcut: "/favicon.png",
        apple: "/favicon-192x192.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${sourceCodePro.variable} antialiased`}>{children}</body>
        </html>
    );
}
