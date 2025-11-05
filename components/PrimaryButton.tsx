import { ReactNode } from "react";
import Link from "next/link";
type PrimaryButtonProps = {
    children: ReactNode;
    onClick?: () => void; // optional click handler
};

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
    return (
        <Link href="/register">
            <button className="primary-button">Register</button>
        </Link>
    );
};

export default PrimaryButton;
