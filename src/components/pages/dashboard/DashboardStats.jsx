import { TrendingUp, Target, Flame } from "lucide-react";

const DashboardStats = () => {
    const stats = [
        { label: "This Week", icon: TrendingUp, value: 3, description: "workouts" },
        { label: "Total", icon: Target, value: 18, description: "exercises" },
        { label: "Streak", icon: Flame, value: 4, description: "days" },
        { label: "Calories", icon: TrendingUp, value: 7200, description: "this week" },
    ];

    return (
        <section className="dashboard-stats-section">
            {stats.map((stat) => (
                <article className="dashboard-stats" key={stat.label}>
                    <h2 className="dashboard-stats-label text-secondary">
                        <stat.icon size={16} />
                        {stat.label}
                    </h2>

                    <div>
                        <div className="label-primary">{stat.value}</div>
                        <div className="text-secondary">{stat.description}</div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default DashboardStats;
