import NavbarToggle from "./NavbarToggle"
import NavItem from "./NavItem"
import Dropdown from "./Dropdown"
import Brand from "./Brand"
function Navbar() {
    return (

        <section id="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top pt-2">
                <div className="container-fluid">
                    <Brand href="https://github.com/sokheng429-wq" label="THOEUN SOKHENG"/>
                    <NavbarToggle />
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-4" >
                            <NavItem href="#hero" label="Home"/>
                            <NavItem href="#about" label="About"/>
                            <Dropdown />
                            <NavItem href="#contact" label="Contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar