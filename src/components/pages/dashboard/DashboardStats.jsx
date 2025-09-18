import { TrendingUp, Target, Flame } from "lucide-react";

const DashboardStats = () => {
    return (
        <div className="dashboard-stats-content">
            <div className="dashboard-stat-bubble">
                <div className="dashboard-stat-label">
                    <TrendingUp size={16} />
                    This Week
                </div>
                <div className="dashboard-stat-info">
                    <div className="dashboard-stat-value">2</div>
                    <div className="dashboard-stat-description">workouts</div>
                </div>
            </div>

            <div className="dashboard-stat-bubble">
                <div className="dashboard-stat-label">
                    <Target size={16} />
                    Total
                </div>
                <div className="dashboard-stat-info">
                    <div className="dashboard-stat-value">12</div>
                    <div className="dashboard-stat-description">exercises</div>
                </div>
            </div>

            <div className="dashboard-stat-bubble">
                <div className="dashboard-stat-label">
                    <Flame size={16} />
                    Streak
                </div>
                <div className="dashboard-stat-info">
                    <div className="dashboard-stat-value">2</div>
                    <div className="dashboard-stat-description">day</div>
                </div>
            </div>

            <div className="dashboard-stat-bubble">
                <div className="dashboard-stat-label">
                    <TrendingUp size={16} />
                    Calories
                </div>
                <div className="dashboard-stat-info">
                    <div className="dashboard-stat-value">3600</div>
                    <div className="dashboard-stat-description">this week</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
