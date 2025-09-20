import { ReactNode } from "react";

type PrimaryButtonProps = {
    children: ReactNode;
    onClick?: () => void; // optional click handler
};

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
    return (
        <button className="primary-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
