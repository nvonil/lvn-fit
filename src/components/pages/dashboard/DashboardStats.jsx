import { TrendingUp, Target, Flame } from "lucide-react";

const DashboardStats = () => {
    const statBubbles = [
        { label: "This Week", icon: TrendingUp, value: 2, description: "workouts" },
        { label: "Total", icon: Target, value: 12, description: "exercises" },
        { label: "Streak", icon: Flame, value: 2, description: "days" },
        { label: "Calories", icon: TrendingUp, value: 3600, description: "this week" },
    ];

    return (
        <div className="dashboard-stats-content">
            {statBubbles.map(({ label, icon: Icon, value, description }) => (
                <div className="dashboard-stats-bubble" key={label}>
                    <header className="dashboard-stats-header">
                        <Icon size={16} />
                        {label}
                    </header>

                    <div className="dashboard-stats-info">
                        <div className="dashboard-stats-value">{value}</div>
                        <div className="dashboard-stats-description">{description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
