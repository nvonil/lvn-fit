import { useState } from "react";
import SidebarLink from "./SidebarLink.jsx";

import { sidebarMenuLinks, sidebarOtherLinks } from "./sidebarLinks.js";
import "./Sidebar.css";

const Sidebar = () => {
    // sets initial active state to "Dashboard"
    const [active, setActive] = useState(sidebarMenuLinks[0].name);

    return (
        <div className="sidebar">
            <div className="sidebar-title">LVN Fit</div>

            <hr className="sidebar-divider" />

            <div className="sidebar-section">
                <div className="sidebar-label">MENU</div>
                <nav className="sidebar-nav">
                    {sidebarMenuLinks.map((link) => {
                        // passes props to SidebarLink.jsx
                        return <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />;
                    })}
                </nav>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-label">OTHER</div>
                <nav className="sidebar-nav">
                    {sidebarOtherLinks.map((link) => {
                        return <SidebarLink key={link.name} link={link} active={active} setActive={setActive} />;
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
