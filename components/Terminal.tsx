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

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className={`relative w-full font-mono text-[18px] ${className}`}>
            {/* Input */}
            <input
                id={id}
                type={inputType}
                placeholder=" " // invisible placeholder to trigger peer
                required={required}
                className="peer inputText pr-10 w-full placeholder-transparent focus:outline-none"
            />

            {/* Floating label */}
            <label
                htmlFor={id}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 transition-all
                           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500
                           peer-placeholder-shown:text-base
                           peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
            >
                {text} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Show/hide password toggle */}
            {isPassword && (
                <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? "🙈" : "👁️"}
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

                        <span className="terminal-title-input">HackTheBoot — bash</span>
                    </div>

                    {/* content (flex column now) */}
                    <div className="terminal-content-input flex flex-col gap-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
