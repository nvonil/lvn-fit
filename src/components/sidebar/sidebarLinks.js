import { House, Dumbbell, Utensils, ChartColumn, User, Settings, Info } from "lucide-react";

export const sidebarLinks = {
    menu: [
        { name: "Dashboard", icon: House, path: "/" },
        { name: "Workouts", icon: Dumbbell, path: "/workouts" },
        { name: "Nutrition", icon: Utensils, path: "/nutrition" },
        { name: "Progress", icon: ChartColumn, path: "/progress" },
    ],
    other: [
        { name: "Profile", icon: User, path: "/profile" },
        { name: "Settings", icon: Settings, path: "/settings" },
        { name: "Help", icon: Info, path: "/help" },
    ],
};
