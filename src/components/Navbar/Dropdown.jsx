import DropdownItem from "./DropdownItem";
import projects from "../../assets/data/projectInfo";

function Dropdown({ active }) {
    return (
        <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle ${active ? "active" : ""}`} href="#project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
                <span className="nav-indicator"></span>
            </a>
            <ul className="dropdown-menu">
                {projects.map((item, index) => (
                    <DropdownItem key={index} href={`#proj${item.navId}`} label={item.title} />
                ))}
            </ul>
        </li>
    );
}

export default Dropdown;
