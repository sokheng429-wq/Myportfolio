import { useTheme } from "../Contact/ThemContext";
import NavbarToggle from "./NavbarToggle";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import Brand from "./Brand";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const darkMode = theme === "dark";

    return (
        <section id="navbar">
            <nav className={`navbar navbar-expand-lg fixed-top pt-2 ${
                darkMode ? "navbar-dark" : "navbar-light"
            } theme-navbar`}>
                <div className="container-fluid">
                    
                    <Brand href="https://github.com/sokheng429-wq" label="THOEUN SOKHENG" />

                    <NavbarToggle />

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-4">
                            
                            <NavItem href="#hero" label="Home" />
                            <NavItem href="#about" label="About" />
                            <Dropdown />
                            <NavItem href="#contact" label="Contact" />

                            {/* ✅ Dark/Light Toggle Button */}
                            <li className="navbar-nav mx-4">
                                <button
                                    onClick={toggleTheme}
                                    className="btn btn-sm btn-outline-secondary ms-3 theme-toggle-btn"
                                >
                                    {darkMode ? "Light Mode" : "Dark Mode"}
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar