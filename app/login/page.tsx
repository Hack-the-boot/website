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
                    <div className="logoAndText mt-12 flex flex-col items-center scale-70">
                        <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" />
                        <h1 className="text-gray-100 text-3xl font-bold mt-4">Hack The Boot</h1>
                    </div>

                    <p className="desc">Create your new account and get ready to hack!</p>

                    <Terminal>
                        {/* <p className="text-gray-400">Please enter your details</p> */}

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
                            <label className="flex items-center gap-2">
                                <span className="text-blue-500">{">"}</span>
                                <span className="font-bold text-gray-100">Select role:</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <select className="inputText" id="role" name="role">
                                <option value="" disabled selected>
                                    Choose a role
                                </option>
                                <option value="Hacker">Hacker</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Judge">Judge</option>
                            </select>
                        </div>

                        <label className="relative flex items-center gap-3 cursor-pointer text-gray-200">
                            <input type="checkbox" className="check-input" id="terms" />
                            <span className="check"></span>
                            <span>
                                I agree to{" "}
                                <Link href="/terms" className="text-blue-600 hover:underline font-bold">
                                    Terms and conditions
                                </Link>
                            </span>
                        </label>

                        <label className="relative flex items-center gap-3 cursor-pointer text-gray-200">
                            <input type="checkbox" className="check-input" id="updates" />
                            <span className="check"></span>
                            <span>I want to receive future updates on Hack The Boot</span>
                        </label>
                        <button className="register">Register</button>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
