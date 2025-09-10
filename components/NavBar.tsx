import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const NavBar = () => {
    return (
        <nav className="nav-bar-no-logo sm:nav-bar-no-logo-hamburger">
            {/* left side: nav links */}
            <div className="nav-links">
                <a href="">Event</a>
                <a href="">Who We Are</a>
                <a href="">Sponsors</a>
                <a href="">FAQs</a>
                <a href="">Contact Us</a>
            </div>

            {/* right side: buttons */}
            <div className="nav-actions">
                <PrimaryButton />
                <SecondaryButton />
            </div>
        </nav>
    );
};

export default NavBar;
