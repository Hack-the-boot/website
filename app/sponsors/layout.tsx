import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner With Us | Hack The Boot",
    description: "Support Italy's premier student hackathon and connect with the next generation of innovators. Become a sponsor of Hack The Boot.",
    keywords: "Hack The Boot sponsor, hackathon sponsorship, tech event sponsorship Italy, student hackathon partner",
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
        url: "https://hacktheboot.it/sponsors",
        siteName: "Hack The Boot",
        title: "Partner With Us | Hack The Boot",
        description: "Support Italy's premier student hackathon and connect with the next generation of innovators.",
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
        title: "Partner With Us | Hack The Boot",
        description: "Support Italy's premier student hackathon and connect with the next generation of innovators.",
        images: ["/img/Logo_Transparent.png"],
    },
    alternates: {
        canonical: "https://hacktheboot.it/sponsors",
        languages: {
            en: "/sponsors",
            it: "/it",
        },
    },
};

export default function SponsorsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}

