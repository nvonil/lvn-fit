import NutritionWeek from "./NutritionWeek";
import NutritionMeals from "./NutritionMeals";

import "./Nutrition.css";
import NutritionMealsContent from "./NutritionMealsContent";

const Nutrition = () => {
    return (
        <main className="nutrition">
            <header className="nutrition-header">
                <h1 className="title-secondary">Nutrition Tracker</h1>
                <div className="text-secondary">Track your daily nutrition by tracking foods and meals</div>
            </header>

            <section className="nutrition-section">
                <NutritionWeek />
                <NutritionMeals />
                <NutritionMealsContent />
            </section>
        </main>
    );
};

export default Nutrition;
