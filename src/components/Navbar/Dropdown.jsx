import DropdownItem from "./DropdownItem";
import projects from "../../assets/data/projectInfo"

function Dropdown() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
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
