import Image from "next/image";
import NavBar from "@/components/NavBar";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
    return (
        <div className="mainPageContainer">
            <NavBar />
            <div className="logoAndText">
                <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" />
                <h1>Hack The Boot</h1>
            </div>
            <p className="hackInfo">
                Italy's <span className="font-bold text-blue-600">first</span> international students Hackathon
            </p>
            <CodeBlock />
            <p className="descriptionHack">
                The <b>brand new</b> Hackathon, powered by <b>students</b>, hosted in <b>Italy.</b> <br />
                Are you ready to take part in it and win the prizes? <br /> <br />
                We are waiting for you. 🫵
            </p>
            <div className="terminal">
                <div className="topTerminalBar">
                    &gt;_ HackTheBoot Terminal
                    <div className="circleContainer">
                        <div className="circleYellow"></div>
                        <div className="circleGreen"></div>
                        <div className="circleRed"></div>
                    </div>
                </div>
                <div className="bottomTerminalBar">
                    <p className="text-gray-400/50">Copyright © HackTheBoot Corporation.</p>
                    <p>
                        <span className="font-bold text-blue-600">$ </span> <b>Date:</b> Spring 2026
                    </p>
                    <p>
                        <span className="font-bold text-blue-600">$ </span> <b>Location:</b> Milan, Politecnico di Milano.
                    </p>
                    <p>
                        <span className="font-bold text-blue-600">$ </span> <b>Application Priority Round: </b>January 2026
                    </p>
                    <p>
                        <span className="font-bold text-blue-600">$ </span> <b>Regular Applications:</b> March 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
