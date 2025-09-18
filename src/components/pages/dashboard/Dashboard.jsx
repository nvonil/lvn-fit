import DashboardWorkout from "./DashboardWorkout";
import DashboardNutrition from "./DashboardNutrition";

import { Calendar, Utensils, TrendingUp } from "lucide-react";
import "./Dashboard.css";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Welcome back, @nvonil!</h1>
                <h2 className="dashboard-subtitle">Here is your summary for today,</h2>
            </header>

            <section className="dashboard-section">
                <h2 className="dashboard-label">
                    <Calendar size={18} />
                    Today's Workout
                </h2>
                <DashboardWorkout />
            </section>

            <section className="dashboard-section">
                <h2 className="dashboard-label">
                    <Utensils size={18} />
                    Today's Nutrition
                </h2>
                <DashboardNutrition />
            </section>

            <DashboardStats />
        </div>
    );
};

export default Dashboard;
