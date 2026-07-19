function NavItem({ href, label, active }) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${active ? "active" : ""}`} href={href}>
                {label}
                <span className="nav-indicator"></span>
            </a>
        </li>
    );
}

export default NavItem;
