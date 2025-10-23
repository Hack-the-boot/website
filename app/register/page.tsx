"use client";

import "../../styles/loginPage.css";
import "../../styles/base.css";
import "../../styles/terminal.css";
import Terminal from "@/components/Terminal";
import Image from "next/image";
import { Field } from "@/components/Terminal";
import Link from "next/link";
import Head from "next/head";
import ExternalLogin from "@/components/uilayouts/ExternalLogin";

export default function LoginPage() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="loginPage">
                <div className="pageLogin">
                    <Link href="/" className="logoAndTextRegister">
                        <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" />
                        <h1>Hack The Boot</h1>
                    </Link>
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

                        {/* Role selection with floating label */}
                        <div className="relative w-full font-mono text-[18px]">
                            <select id="role" name="role" required defaultValue="" className="inputText w-full focus:outline-none text-gray-100">
                                <option value="" disabled className="text-gray-400">
                                    Select role *
                                </option>
                                <option value="Hacker">Hacker</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Judge">Judge</option>
                            </select>
                        </div>

                        <p className="agree">
                            By signing up, you agree to our{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline font-bold">
                                Terms and Conditions
                            </Link>
                            .
                        </p>
                        <button className="register">Sign up</button>
                        <Link href="/login" className="hover:underline font-mono text-[12px]">
                            Already have an account? <span className="font-bold text-blue-600">Login</span>
                        </Link>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
