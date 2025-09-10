import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
const NavBar = () => {
  return (
    <nav className="nav-bar-no-logo ">
      <a href="">Event</a>
      <a href="">Who We Are</a>
      <a href="">Sponsors</a>
      <a href="">FAQs</a>
      <a href="">Contact Us</a>
      <div className="ml-110">
        <PrimaryButton />
      </div>
      <SecondaryButton />
    </nav>
  );
};

export default NavBar;
