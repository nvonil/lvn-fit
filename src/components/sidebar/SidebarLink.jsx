import { NavLink } from "react-router-dom";

const SidebarLink = ({ link }) => {
    return (
        <NavLink to={link.path} className={({ isActive }) => `sidebar-link text-primary ${isActive ? "active" : ""}`}>
            <link.icon size={18} />
            {link.name}
        </NavLink>
    );
};

export default SidebarLink;
