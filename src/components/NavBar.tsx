import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="navBar">
      <img className="navLogo" src={logo} alt="Beta-logo" />
      <ul className="navList none">
        <li>Portfolio</li>
        <li>About</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
