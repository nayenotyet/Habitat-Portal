import React from "react";

function NavItem(href, text, icon) {
    return (
        <li className="nav-item">
            <a href={href} className="nav-link text-dark rounded-2 mb-4 px-1" aria-current="page">
                {icon}
                {text}
            </a>
        </li>
    );
}

export default NavItem;