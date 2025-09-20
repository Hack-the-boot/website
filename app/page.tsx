import Image from "next/image";
import NavBar from "@/components/NavBar";
import PrimaryButton from "@/components/PrimaryButton";

export default function Home() {
    return (
        <div className="page">
            <div className="mainPageContainer">
                <NavBar />

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

                {/* Terminal + Button (clean, single inner wrapper) */}
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

                                <p className="cmd-line">
                                    <span className="prompt">$</span> <span className="text-gray-300">_</span>
                                    <span className="cursor" />
                                </p>
                            </div>
                        </div>

                        {/* primary action centered below the terminal */}
                        <PrimaryButton>Apply</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
