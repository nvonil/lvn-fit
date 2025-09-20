import { Utensils } from "lucide-react";

const DashboardNutrition = () => {
    const macros = [
        { name: "Calories", current: 1200, goal: 1800, unit: "cal", remaining: "remaining" },
        { name: "Protein", current: 100, goal: 150, unit: "g", remaining: "to go" },
        { name: "Water", current: 40, goal: 120, unit: "oz", remaining: "left" },
    ];

    return (
        <section className="dashboard-section">
            <h2 className="dashboard-label label-primary">
                <Utensils size={18} />
                Today's Nutrition
            </h2>

            <article className="dashboard-nutrition">
                {macros.map((macro) => (
                    <div className="dashboard-nutrition-macro" key={macro.name}>
                        <div className="dashboard-nutrition-details">
                            <div className="text-primary">{macro.name}</div>
                            <div className="text-primary">
                                {macro.current}
                                {macro.unit} / {macro.goal}
                                {macro.unit}
                            </div>
                        </div>

                        <div className="dashboard-nutrition-bar">
                            <div
                                className="dashboard-nutrition-bar-fill"
                                style={{ width: `${(macro.current / macro.goal) * 100}%` }}
                            ></div>
                        </div>

                        <div className="text-secondary">
                            {macro.goal - macro.current}
                            {macro.unit} {macro.remaining}
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default DashboardNutrition;
