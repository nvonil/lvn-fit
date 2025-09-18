import { House, Dumbbell, Utensils, ChartColumn, User, Settings, Info } from "lucide-react";

export const sidebarLinks = {
    menu: [
        { name: "Dashboard", icon: House },
        { name: "Workouts", icon: Dumbbell },
        { name: "Nutrition", icon: Utensils },
        { name: "Progress", icon: ChartColumn },
    ],
    other: [
        { name: "Profile", icon: User },
        { name: "Settings", icon: Settings },
        { name: "Help", icon: Info },
    ],
};
