import { useState } from "react";
import SidebarLink from "./SidebarLink.jsx";

import { sidebarMenuLinks, sidebarOtherLinks } from "./sidebarLinks.js";
import "./Sidebar.css";

const Sidebar = () => {
    // sets initial active state to "Dashboard"
    const [active, setActive] = useState(sidebarMenuLinks[0].name);

    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">LVN Fit</h1>

            <hr className="sidebar-divider" />

            <section className="sidebar-section">
                <h2 className="sidebar-label">MENU</h2>
                <nav className="sidebar-nav">
                    {sidebarMenuLinks.map((link) => {
                        // passes props to SidebarLink.jsx
                        return <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />;
                    })}
                </nav>
            </section>

            <section className="sidebar-section">
                <h2 className="sidebar-label">OTHER</h2>
                <nav className="sidebar-nav">
                    {sidebarOtherLinks.map((link) => {
                        return <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />;
                    })}
                </nav>
            </section>
        </aside>
    );
};

export default Sidebar;
