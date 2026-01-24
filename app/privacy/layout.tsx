import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy & Data Protection | Hack The Boot",
    description: "HackTheBoot Privacy Policy (GDPR / EU Regulation 2016/679). Learn how we protect your personal data.",
    keywords: "Hack The Boot privacy policy, GDPR compliance, data protection, hackathon privacy",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hacktheboot.it/privacy",
        siteName: "Hack The Boot",
        title: "Privacy Policy & Data Protection | Hack The Boot",
        description: "HackTheBoot Privacy Policy (GDPR / EU Regulation 2016/679). Learn how we protect your personal data.",
        images: [
            {
                url: "/img/Logo_Transparent.png",
                width: 1200,
                height: 630,
                alt: "Hack The Boot Hackathon Logo",
            },
        ],
        alternateLocale: ["it_IT"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy & Data Protection | Hack The Boot",
        description: "HackTheBoot Privacy Policy (GDPR / EU Regulation 2016/679).",
        images: ["/img/Logo_Transparent.png"],
    },
    alternates: {
        canonical: "https://hacktheboot.it/privacy",
        languages: {
            en: "/privacy",
            it: "/it",
        },
    },
};

export default function PrivacyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}

