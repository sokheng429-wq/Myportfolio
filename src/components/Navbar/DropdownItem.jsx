function DropdownItem ({href, label}) {
    return (
    <li>
        <a className="dropdown-item" href={href}>
           {label}
        </a>
    </li>
               
    )
}

export default DropdownItem