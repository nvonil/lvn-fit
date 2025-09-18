const DashboardNutrition = () => {
    const nutritionMacros = [
        { label: "Calories", current: 1200, goal: 1800, unit: "", suffix: "remaining" },
        { label: "Protein", current: 110, goal: 150, unit: "g", suffix: "to go" },
        { label: "Water", current: 80, goal: 120, unit: "oz", suffix: "left" },
    ];

    return (
        <div className="dashboard-nutrition-content">
            {nutritionMacros.map(({ label, current, goal, unit, suffix }) => (
                <div className="dashboard-nutrition-macro" key={label}>
                    <header className="dashboard-nutrition-header">
                        <h3>{label}</h3>
                        <span>
                            {current}
                            {unit} / {goal}
                            {unit}
                        </span>
                    </header>

                    <div className="dashboard-nutrition-progress-bar">
                        <div
                            className="dashboard-nutrition-progress-fill"
                            style={{ width: `${(current / goal) * 100}%` }}
                        ></div>
                    </div>

                    <div className="dashboard-nutrition-suffix">
                        {goal - current}
                        {unit} {suffix}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardNutrition;
