import DashboardWorkout from "./DashboardWorkout";
import DashboardNutrition from "./DashboardNutrition";
import DashboardStats from "./DashboardStats";

import "./Dashboard.css";

const Dashboard = () => {
    return (
        <main className="dashboard">
            <header className="dashboard-header">
                <h1 className="title-secondary">Welcome back, @nvonil!</h1>
                <div className="text-secondary">Here is your summary for today</div>
            </header>

            <DashboardWorkout />
            <DashboardNutrition />
            <DashboardStats />
        </main>
    );
};

export default Dashboard;
