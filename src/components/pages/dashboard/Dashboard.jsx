import DashboardWorkout from "./DashboardWorkout";
import DashboardNutrition from "./DashboardNutrition";
import DashboardStats from "./DashboardStats";

import { Calendar, Utensils } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
    const dashboardSections = [
        { label: "Today's Workout", icon: Calendar, component: <DashboardWorkout /> },
        { label: "Today's Nutrition", icon: Utensils, component: <DashboardNutrition /> },
    ];

    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <h1 className="subtitle">Welcome back, @nvonil!</h1>
                <h2 className="text-secondary">Here is your summary for today,</h2>
            </header>

            {dashboardSections.map(({ label, icon: LabelIcon, component }) => (
                <section className="dashboard-section" key={label}>
                    <h2 className="dashboard-label label-primary">
                        <LabelIcon size={18} />
                        {label}
                    </h2>
                    {component}
                </section>
            ))}

            <DashboardStats />
        </main>
    );
};

export default Dashboard;
