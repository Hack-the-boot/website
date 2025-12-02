import NavBar from "@/components/NavBar";
export default function Home() {
    return (
        <>
            {/* ================= STRUCTURED DATA ================= */}
            {/* Organization Schema for Google Search Results Logo */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Hack The Boot",
                        url: "https://hacktheboot.it",
                        logo: "https://hacktheboot.it/Logo_Transparent.ico",
                        description: "Italy's premier international student hackathon in Milan.",
                    }),
                }}
            />
            {/* Event Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "Hack The Boot",
                        description: "Italy's premier international student hackathon in Milan. 24 hours of innovation, creativity, and competition.",
                        startDate: "2026-03-01T00:00:00+01:00",
                        endDate: "2026-03-02T00:00:00+01:00",
                        eventStatus: "https://schema.org/EventScheduled",
                        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                        location: {
                            "@type": "Place",
                            name: "Milan, Italy",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Milan",
                                addressCountry: "IT",
                            },
                        },
                        organizer: {
                            "@type": "Organization",
                            name: "Hack The Boot",
                            url: "https://hacktheboot.it",
                            logo: "https://hacktheboot.it/Logo_Transparent.ico",
                        },
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "EUR",
                            availability: "https://schema.org/InStock",
                        },
                        audience: {
                            "@type": "Audience",
                            audienceType: "Students",
                        },
                        url: "https://hacktheboot.it",
                        image: "https://hacktheboot.it/img/Logo_Text_PoliNetwork.png",
                    }),
                }}
            />
            {/* NavBar */}
            <div className="navBar">
                <a href="">Event</a>
                <a href="">FAQs</a>
                <a href="">Contacts</a>
                <a href="">Sponsor</a>
            </div>
            <h1 className="heroSection">Italy's Signature Student Hackathon</h1>
            <p className="heroSubtitle">Made by students, for students.</p>
            <h2 className="mainSubtitle">It's happening.</h2>

            <div className="mainInfoContainer">
                <div className="eventInfoCard">
                    {/* WHERE CARD */}
                    <div className="cardInfo">
                        <div className="containerTextInfo">
                            <p className="topInfoCard">WHERE</p>
                            <p className="mainInfoCard">MILAN, ITALY</p>
                        </div>
                    </div>
                    {/* WHEN CARD */}
                    <div className="cardInfo">
                        <div className="containerTextInfo">
                            <p className="topInfoCard">WHEN</p>
                            <p className="mainInfoCard">SPRING 2026</p>
                        </div>
                    </div>
                    {/* MORE INFO CARD */}
                    <div className="cardInfo">
                        <div className="containerTextInfo">
                            <p className="topInfoCard">MORE INFO</p>
                            <p className="mainInfoCard">VERY SOON</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SPONSOR BAR */}
            <div className="supportedBy">
                <p className="supportedByText">Supported by</p>
                <div className="sponsorImageContainer">
                    <img src="img/Sponsors/lovable_white.png" alt="" className="w-60" />
                </div>
            </div>
            {/* PRE REGISTER BAR */}

            <div className="preRegisterBar">
                <input type="email" className="email-input" placeholder="Be the first to know when applications open" />
                <button className="email-btn">REMIND ME</button>
            </div>
        </>
    );
}
