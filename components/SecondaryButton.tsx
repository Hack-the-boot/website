import Link from "next/link";

const SecondaryButton = () => {
    return (
        <Link href="/login">
            <button className="secondary-button">Login</button>
        </Link>
    );
};

export default SecondaryButton;
