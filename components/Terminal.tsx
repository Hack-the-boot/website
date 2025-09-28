type FieldProps = {
    text: string;
    required?: boolean;
    type?: string;
    id?: string;
    className?: string;
};

export function Field({ text, required = false, type = "text", id, className = "" }: FieldProps) {
    return (
        <div className={`flex flex-col items-start gap-2 font-mono text-[18px] ${className}`}>
            {/* Label row */}
            <label htmlFor={id} className="flex items-center gap-2">
                <span className="text-blue-500">{">"}</span>
                <span className="font-bold text-gray-100">{text}:</span>
                {required && <span className="text-red-500">*</span>}
            </label>

            {/* Input */}
            <input className="inputText" type={type} id={id} />
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
