import { useNutrition } from "../../contexts/NutritionContext";

const NutritionMeals = () => {
    const { selectedMeal, setSelectedMeal } = useNutrition();
    const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

    return (
        <nav className="nutrition-meals">
            {meals.map((meal) => (
                <div
                    key={meal}
                    className={`nutrition-meal ${selectedMeal == meal ? "active" : ""}`}
                    onClick={() => setSelectedMeal(meal)}
                >
                    {meal}
                </div>
            ))}
        </nav>
    );
};

export default NutritionMeals;
