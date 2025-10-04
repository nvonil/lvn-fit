import NutritionWeek from "./NutritionWeek";

import "./Nutrition.css";

const Nutrition = () => {
    return (
        <main className="nutrition">
            <header className="nutrition-header">
                <h1 className="title-secondary">Nutrition Tracker</h1>
                <div className="text-secondary">Track your daily nutrition by tracking foods and meals</div>
            </header>

            <section className="nutrition-section">
                <NutritionWeek />
            </section>
        </main>
    );
};

export default Nutrition;
