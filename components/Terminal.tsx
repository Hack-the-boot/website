"use client";

import { useState } from "react";

type FieldProps = {
    text: string;
    required?: boolean;
    type?: string;
    id?: string;
    className?: string;
    children?: React.ReactNode;
};

export function Field({ text, required = false, type = "text", id, className = "", children }: FieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("");

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className={`relative w-full font-mono text-[18px] ${className}`}>
            {/* Input */}
            <input id={id} name={id} type={inputType} value={value} onChange={(e) => setValue(e.target.value)} placeholder={text + (required ? " *" : "")} required={required} className="inputText pr-10 w-full focus:outline-none" aria-label={text} />

            {/* Show/hide password toggle */}
            {isPassword && (
                <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                        // Eye with slash icon (hide password)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.5 12c2.25 4.5 6.75 7.5 10.5 7.5 1.98 0 3.83-.63 5.36-1.707M21 21l-4.243-4.243m0 0A10.451 10.451 0 0 0 22.5 12c-2.25-4.5-6.75-7.5-10.5-7.5-1.607 0-3.126.39-4.447 1.086m9.204 11.171L9.75 9.75m0 0a3 3 0 1 0 4.5 4.5" />
                        </svg>
                    ) : (
                        // Eye icon (show password)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.008 9.963 7.178.07.207.07.431 0 .639C20.573 16.49 16.638 19.5 12 19.5c-4.638 0-8.573-3.008-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                    )}
                </button>
            )}

            {/* Children slot */}
            {children}
        </div>
    );
}

type TerminalProps = {
    children: React.ReactNode;
};

export default function Terminal({ children }: TerminalProps) {
    return (
        <div className="terminal-block-input">
            <div className="terminal-center-input">
                <div className="terminal-input">
                    <div className="terminal-top-input">
                        <div className="trafficLights-input" aria-hidden>
                            <span className="dot-input dot-red-input" />
                            <span className="dot-input dot-yellow-input" />
                            <span className="dot-input dot-green-input" />
                        </div>

                        <span className="terminal-title-input" aria-hidden="true" role="presentation">
                            HackTheBoot — bash
                        </span>
                    </div>

                    {/* Content (flex column now) */}
                    <div className="terminal-content-input flex flex-col gap-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
