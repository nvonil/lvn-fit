// recieves and destructures props from Sidebar.jsx
const SidebarLink = ({ link, active, setActive }) => {
    const LinkIcon = link.icon;

    return (
        <div
            // checks if active state matches the link's name
            className={`sidebar-link ${active === link.name ? "active" : ""}`}
            // updates active state when link is clicked
            onClick={() => setActive(link.name)}
        >
            <LinkIcon size={18} />
            {link.name}
        </div>
    );
};

export default SidebarLink;
