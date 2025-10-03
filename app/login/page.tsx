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
                        <Field text="Email" required id="email" />

                        <Field text="Password" required type="password" id="password" />

                        <p className="agree">
                            By registering, you agree to our{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline font-bold">
                                Terms and Conditions
                            </Link>
                            .
                        </p>

                        <button className="register">Login</button>

                        <div className="orLoginWith flex items-center gap-3">
                            <span className="line" />
                            <span className="text-gray-400 font-mono text-[15px]">or login with</span>
                            <span className="line" />
                        </div>

                        {/* Social logins */}
                        <div className="containerLinks flex flex-row gap-4">
                            <ExternalLogin provider="google" />
                            <ExternalLogin provider="github" />
                            <ExternalLogin provider="linkedin" />
                        </div>

                        <Link href="/register" className="hover:underline font-mono text-[15px]">
                            Don't have an account? <span className="font-bold text-blue-600">Register</span>
                        </Link>
                    </Terminal>
                </div>
            </div>
        </>
    );
}
