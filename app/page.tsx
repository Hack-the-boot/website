import Image from "next/image";
import NavBar from "@/components/NavBar";
import LeftUser from "@/components/LeftUser";
import RightUser from "@/components/RightUser";
import TextAndCodeBlock from "@/components/uilayouts/TextAndCodeBlock";
import CardInfo from "@/components/uilayouts/CardInfo";
import SpeakerCard from "@/components/uilayouts/SpeakerCard";
import CardTimeLine from "@/components/uilayouts/CardTimeLine";

export default function Home() {
    return (
        <div className="page">
            <NavBar />
            <div className="mainPageContainer">
                <div className="leftSide">
                    <div className="logoAndText">
                        <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" />
                        <h1>Hack The Boot</h1>
                    </div>

                    <p className="hackInfo">
                        Italy&apos;s <span className="font-bold text-blue-600">first</span> international students Hackathon
                    </p>

                    <p className="descriptionHack">
                        The <b>brand new</b> Hackathon, powered by <b>students</b>, hosted in <b>Italy.</b> <br />
                        Are you ready to take part in it and win the prizes? <br /> <br />
                        We are waiting for you. 🫵
                    </p>

                    <div className="terminal-block">
                        <div className="terminal-center">
                            <div className="terminal">
                                {/* top bar */}
                                <div className="terminal-top">
                                    <div className="trafficLights" aria-hidden>
                                        <span className="dot dot-red" />
                                        <span className="dot dot-yellow" />
                                        <span className="dot dot-green" />
                                    </div>

                                    <span className="terminal-title">HackTheBoot — bash</span>
                                </div>

                                {/* content */}
                                <div className="terminal-content">
                                    <p className="text-gray-400/60">Copyright © HackTheBoot Corporation.</p>

                                    <p className="cmd-line">
                                        <span className="prompt">$</span> <b>Date:</b> Spring 2026
                                    </p>

                                    <p className="cmd-line">
                                        <span className="prompt">$</span> <b>Location:</b> Milan, Politecnico di Milano.
                                    </p>

                                    <p className="cmd-line">
                                        <span className="prompt">$</span> <b>Application Priority Round:</b> January 2026
                                    </p>

                                    <p className="cmd-line">
                                        <span className="prompt">$</span> <b>Regular Applications:</b> March
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    {/* primary action centered below the terminal */}
                                    <button className="applyButton">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="chatWindow">
                        <LeftUser avatar="L">
                            Hey, have you guys heard about <b>Hack The Boot?</b>
                        </LeftUser>
                        <RightUser avatar="M">Nope, what's that?</RightUser>
                        <LeftUser avatar="G">It's this new international hackathon happening in Milan next spring.</LeftUser>
                        <RightUser avatar="M">Oh wow, that sounds huge.</RightUser>
                        {/* <LeftUser avatar="L">Yeah, everyone's been talking about it. Priority applications open in January.</LeftUser> */}
                        <LeftUser avatar="G">I'm definitely applying. I don't want to miss this chance.</LeftUser>
                        <RightUser avatar="M">Same here. Let's team up for it! 🚀</RightUser>
                    </div>
                </div>
            </div>

            <div id="event" className="titleSection">
                <TextAndCodeBlock title="The Event" code="HackTheBoot.getEventDesc()"></TextAndCodeBlock>
            </div>
            <p className="eventDescription">
                For 24 hours straight, you'll <span className="text-blue-600 font-bold">team up</span>, <span className="text-blue-600   font-bold">code</span>, <span className="text-blue-600 font-bold">design</span>, and brainstorm your way through <br />
                challenges. You'll meet brilliant minds from all over the world and build something <br />
                amazing together.
            </p>
            <div className="containerCardsInfo">
                <CardInfo title="300+ Hackers" img="/img/Hackers Icon World.png" subtitle="From all over the world" items={["Students from top universities", "Industry professionals", "International participants", "Diverse skill levels welcome"]} />
                <CardInfo title="Mentorships" img="/img/Mentorships.png" subtitle="From academia and industry" items={["One-on-one guidance", "Technical workshops", "Career advice sessions", "Code reviews and feedback"]}></CardInfo>
                <CardInfo title="Prizes" img="/img/Prizes.png" subtitle="Cash & Tech Gadgets" items={["$5,000 grand prize", "Latest tech gadgets", "Internship opportunities", "Exclusive swag and merch"]}></CardInfo>
            </div>

            <div id="speakers" className="titleSection">
                <TextAndCodeBlock title="Speakers & Judges" code="HackTheBoot.getSpeakers()"></TextAndCodeBlock>
                <div className="flex flex-col gap-4 mt-4">
                    <p className="eventDescription">
                        Learn from industry leaders who are shaping the future of technology
                        <br />
                        and innovation. Our speakers and judges come from top tech companies and renowned universities.
                    </p>
                </div>
                <div className="speakerContainer">
                    <SpeakerCard
                        img="/img/speaker1.png"
                        name="John Doe"
                        roleAndCompany="Senior ML Engineer @ OpenAI"
                        skills={["Fintech", "Machine Learning", "Cybersecurity"]}
                        socialLinks={[
                            { platform: "LinkedIn", url: "https://linkedin.com/in/speaker1" },
                            { platform: "X", url: "https://x.com/speaker1" },
                            { platform: "Instagram", url: "https://instagram.com/speaker1" },
                        ]}
                        description="John has over a decade of experience building large-scale machine learning systems. At HackTheBoot, he’ll share insights on applying AI in fintech and how to protect critical models from evolving cybersecurity threats."
                    />

                    <SpeakerCard
                        img="/img/speaker2.png"
                        name="Mark Smith"
                        roleAndCompany="AI Researcher @ DeepMind"
                        skills={["NLP", "Neural Networks", "Reinforcement Learning"]}
                        socialLinks={[
                            { platform: "LinkedIn", url: "https://linkedin.com/in/speaker2" },
                            { platform: "X", url: "https://x.com/speaker2" },
                            { platform: "Instagram", url: "https://instagram.com/speaker2" },
                        ]}
                        description="Mark focuses on cutting-edge AI research in natural language processing and reinforcement learning. He’ll dive into how neural architectures are evolving and what the next generation of intelligent systems could look like."
                    />

                    <SpeakerCard
                        img="/img/speaker3.png"
                        name="Alice Johnson"
                        roleAndCompany="Security Architect @ Microsoft"
                        skills={["Cloud Security", "DevSecOps", "Zero Trust Architecture"]}
                        socialLinks={[
                            { platform: "LinkedIn", url: "https://linkedin.com/in/speaker3" },
                            { platform: "X", url: "https://x.com/speaker3" },
                            { platform: "Instagram", url: "https://instagram.com/speaker3" },
                        ]}
                        description="Alice designs enterprise-scale security systems and leads Microsoft’s efforts in cloud resilience. Her talk will highlight zero trust strategies, DevSecOps practices, and how to secure AI-driven infrastructures."
                    />
                </div>
            </div>
            <div className="titleSection">
                <TextAndCodeBlock title="Event Timeline" code="HackTheBoot.getEventTimeline()"></TextAndCodeBlock>
                <div className="timelineContainer !pt-20">
                    {/* Row 1 (card left) */}
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex justify-end">
                            <CardTimeLine date="2023-09-01" title="Priority Application Open" subtitle="Early bird registration for committed participants" daysRemaining={30} alignment="end" />
                        </div>
                        <div className="flex justify-center ">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                {/* Timeline Dot Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                                    <path
                                        d="M6 2a2 2 0 0 0-2 2v16a2 2 0 
                                        0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 
                                        1.5L18.5 9H13V3.5zM10.97 15.03l-2.47-2.47a.75.75 
                                        0 0 0-1.06 1.06l3 3a.75.75 
                                        0 0 0 1.06 0l6-6a.75.75 
                                        0 0 0-1.06-1.06l-5.47 5.47z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div></div> {/* empty right side */}
                    </div>

                    {/* Row 2 (card right) */}
                    <div className="grid grid-cols-3 items-center">
                        <div></div> {/* empty left side */}
                        <div className="flex justify-center">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                {/* Timeline Dot Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                                    <path
                                        d="M6 2a2 2 0 0 0-2 2v16a2 2 0 
                                        0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 
                                        1.5L18.5 9H13V3.5zM10.97 15.03l-2.47-2.47a.75.75 
                                        0 0 0-1.06 1.06l3 3a.75.75 
                                        0 0 0 1.06 0l6-6a.75.75 
                                        0 0 0-1.06-1.06l-5.47 5.47z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <CardTimeLine date="2023-09-01" title="General Applications Open" subtitle="Open registration for all participants" daysRemaining={60} alignment="start" />
                        </div>
                    </div>

                    {/* Row 3 (card left again) */}
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex justify-end">
                            <CardTimeLine date="2023-09-01" title="Hack The Boot!" subtitle="24 hours of collaboration & coding" daysRemaining={90} alignment="end" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                {/* Timeline Dot Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                                    <path
                                        d="M6 2a2 2 0 0 0-2 2v16a2 2 0 
                                        0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 
                                        1.5L18.5 9H13V3.5zM10.97 15.03l-2.47-2.47a.75.75 
                                        0 0 0-1.06 1.06l3 3a.75.75 
                                        0 0 0 1.06 0l6-6a.75.75 
                                        0 0 0-1.06-1.06l-5.47 5.47z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
