// recieves and destructures props from Sidebar.jsx
const SidebarLink = ({ link, active, setActive }) => {
    // gets the icon component from the link object
    const LinkIcon = link.icon;

    return (
        <a
            href="#"
            // checks if active state matches the link's name
            className={`sidebar-link ${active === link.name ? "active" : ""}`}
            // updates active state when link is clicked
            onClick={() => setActive(link.name)}
        >
            <LinkIcon size={18} />
            {link.name}
        </a>
    );
};

export default SidebarLink;
