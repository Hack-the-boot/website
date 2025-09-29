"use client";

type ExternalProps = {
    children?: React.ReactNode;
    buttonText: string;
    onClick?: () => void;
};

export default function ExternalLogin({ children, buttonText, onClick }: ExternalProps) {
    return (
        <div className="externalLogin flex-1">
            <button className="externalLoginButton" type="button" aria-label={`Continue with ${buttonText}`} onClick={onClick}>
                {/* Service icon */}
                {children}

                {/* Button text */}
                <span className="text-white font-semibold text-base">{buttonText}</span>
            </button>
        </div>
    );
}
