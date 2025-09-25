import SidebarLink from "./SidebarLink";

import { House, Dumbbell, Utensils, ChartColumn, User, Settings, Info } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
    const sections = [
        {
            label: "MENU",
            links: [
                { name: "Dashboard", icon: House, path: "/" },
                { name: "Workouts", icon: Dumbbell, path: "/workouts" },
                { name: "Nutrition", icon: Utensils, path: "/nutrition" },
                { name: "Progress", icon: ChartColumn, path: "/progress" },
            ],
        },
        {
            label: "OTHERS",
            links: [
                { name: "Profile", icon: User, path: "/profile" },
                { name: "Settings", icon: Settings, path: "/settings" },
                { name: "Help", icon: Info, path: "/help" },
            ],
        },
    ];

    return (
        <aside className="sidebar">
            <h1 className="title-primary">LVN Fit</h1>

            <hr className="sidebar-divider" />

            {sections.map((section) => (
                <section className="sidebar-section" key={section.label}>
                    <h2 className="label-secondary">{section.label}</h2>
                    <nav className="sidebar-nav">
                        {section.links.map((link) => (
                            <SidebarLink key={link.name} link={link} />
                        ))}
                    </nav>
                </section>
            ))}
        </aside>
    );
};

export default Sidebar;
