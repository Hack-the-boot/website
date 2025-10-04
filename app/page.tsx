import Image from "next/image";
import NavBar from "@/components/NavBar";
import LeftUser from "@/components/LeftUser";
import RightUser from "@/components/RightUser";
import TextAndCodeBlock from "@/components/uilayouts/TextAndCodeBlock";
import CardInfo from "@/components/uilayouts/CardInfo";
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
        </div>
    );
}
