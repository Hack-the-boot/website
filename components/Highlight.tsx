import { ReactNode } from "react";

type HighlightProps = {
    children: ReactNode;
    className?: string;
};

export default function Highlight({ children, className = "" }: HighlightProps) {
    return <span className={`highlight ${className}`}>{children}</span>;
}
