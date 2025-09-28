import React from "react";

type FieldProps = {
    text: string;
    required?: boolean;
    type?: string;
    id?: string;
    className?: string;
};

export function Field({ text, required = false, type = "text", id, className = "" }: FieldProps) {
    return (
        <div className={`field ${className}`}>
            {/* Label row */}
            <label htmlFor={id} className="field-label">
                <span className="arrow">{">"}</span>
                <span className="labelText">{text}:</span>
                {required && (
                    <span className="required" aria-hidden>
                        *
                    </span>
                )}
            </label>

            {/* Input */}
            <input className="inputText" type={type} id={id} aria-required={required} aria-label={text} />
        </div>
    );
}

type TerminalProps = {
    children: React.ReactNode;
};

export default function Terminal({ children }: TerminalProps) {
    return (
        <div className="terminal-block-input" role="region" aria-label="Terminal">
            <div className="terminal-center-input">
                <div className="terminal-input" aria-hidden={false}>
                    <div className="terminal-top-input">
                        <div className="trafficLights-input" aria-hidden="true">
                            <span className="dot-input dot-red-input" />
                            <span className="dot-input dot-yellow-input" />
                            <span className="dot-input dot-green-input" />
                        </div>

                        <span className="terminal-title-input">HackTheBoot — bash</span>
                    </div>

                    {/* content (children provided by page) */}
                    <div className="terminal-content-input">{children}</div>
                </div>
            </div>
        </div>
    );
}
