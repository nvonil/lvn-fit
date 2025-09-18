import { useState } from "react";
import SidebarLink from "./SidebarLink";

import { sidebarLinks } from "./sidebarLinks";
import "./Sidebar.css";

const Sidebar = () => {
    // sets initial active state to "Dashboard"
    const [active, setActive] = useState(sidebarLinks.menu[0].name);

    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">LVN Fit</h1>

            <hr className="sidebar-divider" />

            <section className="sidebar-section">
                <h2 className="sidebar-label">MENU</h2>
                <nav className="sidebar-nav">
                    {sidebarLinks.menu.map((link) => (
                        <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />
                    ))}
                </nav>
            </section>

            <section className="sidebar-section">
                <h2 className="sidebar-label">OTHER</h2>
                <nav className="sidebar-nav">
                    {sidebarLinks.other.map((link) => (
                        <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />
                    ))}
                </nav>
            </section>
        </aside>
    );
};

export default Sidebar;
