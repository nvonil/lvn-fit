import { Utensils } from "lucide-react";
import { useNutrition } from "../../contexts/NutritionContext";
import { useNavigate } from "react-router-dom";

const DashboardNutrition = () => {
    const { foodsByDay, goals } = useNutrition();
    const navigate = useNavigate();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = daysOfWeek[new Date().getDay()];
    const todaysFood = foodsByDay[today];

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    for (let meal of Object.values(todaysFood)) {
        for (let food of meal) {
            totalCalories += food.calories * food.quantity;
            totalProtein += food.protein * food.quantity;
            totalCarbs += food.carbs * food.quantity;
            totalFats += food.fats * food.quantity;
        }
    }

    const macros = [
        { name: "Calories", current: totalCalories, goal: goals.calories, unit: "cal", remaining: "remaining" },
        { name: "Protein", current: totalProtein, goal: goals.protein, unit: "g", remaining: "to go" },
        { name: "Carbs", current: totalCarbs, goal: goals.carbs, unit: "g", remaining: "to go" },
        { name: "Fats", current: totalFats, goal: goals.fats, unit: "g", remaining: "to go" },
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
                                style={{ width: `${Math.min((macro.current / macro.goal) * 100, 100)}%` }}
                            ></div>
                        </div>

                        <div className="text-secondary">
                            {macro.goal - macro.current}
                            {macro.unit} {macro.remaining}
                        </div>
                    </div>
                ))}
            </article>

            <button className="dashboard-nutrition-button button-primary" onClick={() => navigate("/nutrition")}>
                View Details
            </button>
        </section>
    );
};

export default DashboardNutrition;
