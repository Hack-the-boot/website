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
                            <label className="flex items-center gap-2">
                                <span className="text-blue-500">{">"}</span>
                                <span className="font-bold text-gray-100">Select role:</span>
                                <span className="text-red-500">*</span>
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

                        <p className="agree">
                            By registering, you agree to our{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline font-bold">
                                Terms and Conditions
                            </Link>
                            .
                        </p>

                        <div className="orLoginWith flex items-center gap-3">
                            <span className="line" />
                            <span className="text-gray-400 font-mono text-[15px]">or register with</span>
                            <span className="line" />
                        </div>

                        {/* Social logins */}
                        <div className="containerLinks flex flex-row gap-4">
                            <ExternalLogin buttonText="Google" onClick={() => alert("Google")}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-6 w-6">
                                    {/* Google official icon */}
                                    <path
                                        fill="#EA4335"
                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 
                                        14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 
                                        17.74 9.5 24 9.5z"
                                    />
                                    <path
                                        fill="#4285F4"
                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94
                                        c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6
                                        c4.51-4.18 7.09-10.36 7.09-17.65z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 
                                        16.46 0 20.12 0 24c0 3.88.92 7.54 
                                        2.56 10.78l7.97-6.19z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M24 48c6.48 0 11.93-2.13 
                                        15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 
                                        2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 
                                        6.19C6.51 42.62 14.62 48 24 48z"
                                    />
                                </svg>
                            </ExternalLogin>

                            <ExternalLogin buttonText="GitHub" onClick={() => alert("GitHub")}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 0C5.37 0 0 5.37 0 
                                            12c0 5.3 3.44 9.8 8.21 
                                            11.39.6.11.82-.26.82-.58 
                                            0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 
                                            1.2.09 1.84 1.23 1.84 1.23 
                                            1.07 1.84 2.8 1.31 3.49 1 
                                            .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 
                                            0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 
                                            0 0 1-.32 3.3 1.23a11.47 
                                            11.47 0 013 0c2.3-1.55 3.3-1.23 
                                            3.3-1.23.65 1.65.24 2.87.12 
                                            3.17.76.84 1.23 1.91 1.23 
                                            3.22 0 4.62-2.8 5.65-5.48 
                                            5.95.43.37.81 1.1.81 2.22 
                                            0 1.6-.02 2.89-.02 3.28 
                                            0 .32.22.7.82.58C20.56 21.8 
                                            24 17.3 24 12c0-6.63-5.37-12-12-12z"
                                    />
                                </svg>
                            </ExternalLogin>

                            <ExternalLogin buttonText="LinkedIn" onClick={() => alert("LinkedIn")}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#0A66C2]">
                                    <path
                                        d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.12 1 2.5 1 4.98 2 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 
                                        1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 
                                        4.5 5.8V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 
                                        0-2.9 2-2.9 4v7.6h-4V8.5z"
                                    />
                                </svg>
                            </ExternalLogin>
                        </div>

                        <button className="register">Register</button>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
