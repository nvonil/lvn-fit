import { Link, useLocation } from "react-router-dom";

const SidebarLink = ({ link }) => {
    const location = useLocation();
    const LinkIcon = link.icon;

    return (
        <Link to={link.path} className={`sidebar-link text-primary ${location.pathname === link.path ? "active" : ""}`}>
            <LinkIcon size={18} />
            {link.name}
        </Link>
    );
};

export default SidebarLink;
