import { TrendingUp, Target, Flame } from "lucide-react";

const DashboardStats = () => {
    const statBubbles = [
        { label: "This Week", icon: TrendingUp, value: 2, description: "workouts" },
        { label: "Total", icon: Target, value: 12, description: "exercises" },
        { label: "Streak", icon: Flame, value: 2, description: "days" },
        { label: "Calories", icon: TrendingUp, value: 3600, description: "this week" },
    ];

    return (
        <article className="dashboard-stats-content">
            {statBubbles.map(({ label, icon: StatsIcon, value, description }) => (
                <div className="dashboard-stats-bubble" key={label}>
                    <h3 className="dashboard-stats-label text-secondary">
                        <StatsIcon size={16} />
                        {label}
                    </h3>

                    <div className="dashboard-stats-info">
                        <div className="label-primary">{value}</div>
                        <div className="text-secondary">{description}</div>
                    </div>
                </div>
            ))}
        </article>
    );
};

export default DashboardStats;
