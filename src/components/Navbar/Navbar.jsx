import { useTheme } from "../Contact/useTheme";
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

                            {/* Dark/Light Toggle */}
                            <li className="nav-item d-flex align-items-center ms-3">
                                <button
                                    onClick={toggleTheme}
                                    className="theme-toggle"
                                    aria-label="Toggle theme"
                                >
                                    <span className="theme-toggle-track">
                                        <span className="theme-toggle-thumb">
                                            {darkMode ? (
                                                <svg className="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                                </svg>
                                            ) : (
                                                <svg className="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="5" />
                                                    <line x1="12" y1="1" x2="12" y2="3" />
                                                    <line x1="12" y1="21" x2="12" y2="23" />
                                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                                    <line x1="1" y1="12" x2="3" y2="12" />
                                                    <line x1="21" y1="12" x2="23" y2="12" />
                                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
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