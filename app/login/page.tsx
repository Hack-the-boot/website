import "../../styles/loginPage.css";
import "../../styles/base.css";
import "../../styles/terminal.css";
import Terminal from "@/components/Terminal";
import Image from "next/image";
import { Field } from "@/components/Terminal";
import Link from "next/link";
import Head from "next/head";

export default function LoginPage() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="loginPage">
                <div className="pageLogin">
                    <div className="logoAndText mt-12">
                        {/* Use Next/Image responsively via CSS class (logoHTB) and sizes attribute */}
                        <Image src="/img/Logo_Transparent.png" alt="Logo" width={0} height={0} sizes="(max-width: 768px) 56px, (max-width: 1280px) 80px, 96px" className="logoHTB" />
                        <h1 className="mainTitle">Hack The Boot</h1>
                    </div>

                    <p className="desc">Create your new account and get ready to hack!</p>

                    <Terminal>
                        <div className="fullNameContainer w-full">
                            <div className="name">
                                <Field text="Name" required id="name" />
                            </div>
                            <div className="surname">
                                <Field text="Surname" required id="surname" />
                            </div>
                        </div>

                        <Field text="Email" required id="email" />

                        <div className="fullNameContainer w-full">
                            <div className="name">
                                <Field text="Password" required type="password" id="password" />
                            </div>
                            <div className="surname">
                                <Field text="Confirm Password" required type="password" id="confirmPassword" />
                            </div>
                        </div>

                        <div className="selectionRole w-full">
                            <label className="roleLabel">
                                <span className="roleArrow">&gt;</span>
                                <span className="roleText">Select role:</span>
                                <span className="roleRequired">*</span>
                            </label>
                            <select className="inputText" id="role" name="role" defaultValue="">
                                <option value="" disabled>
                                    Choose a role
                                </option>
                                <option value="Hacker">Hacker</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Judge">Judge</option>
                            </select>
                        </div>

                        <label className="relative flex items-center gap-3 cursor-pointer text-gray-200 rowLabel">
                            <input type="checkbox" className="check-input" id="terms" />
                            <span className="check" />
                            <span className="termsText">
                                I agree to{" "}
                                <Link href="/terms" className="termsLink">
                                    Terms and conditions
                                </Link>
                            </span>
                        </label>

                        <label className="relative flex items-center gap-3 cursor-pointer text-gray-200 rowLabel">
                            <input type="checkbox" className="check-input" id="updates" />
                            <span className="check" />
                            <span>I want to receive future updates on Hack The Boot</span>
                        </label>

                        <button className="register">Register</button>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
