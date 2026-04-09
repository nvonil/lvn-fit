import { NavLink } from "react-router-dom";

const SidebarLink = ({ link, isCollapsed }) => {
    return (
        <NavLink to={link.path} className={({ isActive }) => `sidebar-link text-primary ${isActive ? "active" : ""}`}>
            <link.icon size={18} />
            {!isCollapsed && <span>{link.name}</span>}
        </NavLink>
    );
};

export default SidebarLink;
