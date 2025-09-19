import SidebarLink from "./SidebarLink";

import { sidebarLinks } from "./sidebarLinks";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h1 className="title">LVN Fit</h1>

            <hr className="sidebar-divider" />

            <section className="sidebar-section">
                <h2 className="label-secondary">MENU</h2>
                <nav className="sidebar-nav">
                    {sidebarLinks.menu.map((link) => (
                        <SidebarLink key={link.name} link={link} />
                    ))}
                </nav>
            </section>

            <section className="sidebar-section">
                <h2 className="label-secondary">OTHER</h2>
                <nav className="sidebar-nav">
                    {sidebarLinks.other.map((link) => (
                        <SidebarLink key={link.name} link={link} />
                    ))}
                </nav>
            </section>
        </aside>
    );
};

export default Sidebar;
