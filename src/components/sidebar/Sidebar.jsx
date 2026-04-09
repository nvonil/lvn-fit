import SidebarLink from "./SidebarLink";

import { House, Dumbbell, Utensils, SquareChevronRight, SquareChevronLeft } from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ isCollapsed, onToggle }) => {
    const sections = [
        {
            label: "MENU",
            links: [
                { name: "Dashboard", icon: House, path: "/" },
                { name: "Workouts", icon: Dumbbell, path: "/workouts" },
                { name: "Nutrition", icon: Utensils, path: "/nutrition" },
            ],
        },
    ];

    return (
        <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <header className="sidebar-header">
                {!isCollapsed && <h1 className="title-primary">LVN Fit</h1>}
                {isCollapsed ? (
                    <SquareChevronRight size={18} onClick={onToggle} />
                ) : (
                    <SquareChevronLeft size={18} onClick={onToggle} />
                )}
            </header>

            <hr className="sidebar-divider" />

            {sections.map((section) => (
                <section className="sidebar-section" key={section.label}>
                    {!isCollapsed && <h2 className="label-secondary">{section.label}</h2>}
                    <nav className="sidebar-nav">
                        {section.links.map((link) => (
                            <SidebarLink key={link.name} link={link} isCollapsed={isCollapsed} />
                        ))}
                    </nav>
                </section>
            ))}
        </aside>
    );
};

export default Sidebar;
