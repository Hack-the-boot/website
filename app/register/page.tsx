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
                    <div className="logoAndTextRegister">
                        <Image src="/img/Logo_Transparent.png" alt="Logo" width={300} height={300} className="logoHTB" />
                        <h1>Hack The Boot</h1>
                    </div>
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
                            <select id="role" name="role" defaultValue="" required className="peer inputText w-full appearance-none focus:outline-none bg-transparent">
                                <option value="" disabled hidden></option>
                                <option value="Hacker">Hacker</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Judge">Judge</option>
                            </select>

                            {/* Floating label */}
                            <label
                                htmlFor="role"
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition-all
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500
                                peer-placeholder-shown:text-base
                                peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
                            >
                                Select role <span className="text-red-500">*</span>
                            </label>

                            {/* Dropdown arrow */}
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
                        </div>

                        <p className="agree">
                            By registering, you agree to our{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline font-bold">
                                Terms and Conditions
                            </Link>
                            .
                        </p>
                        <button className="register">Register</button>
                        <Link href="/login" className="hover:underline font-mono text-[15px]">
                            Already have an account? <span className="font-bold text-blue-600">Login</span>
                        </Link>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
