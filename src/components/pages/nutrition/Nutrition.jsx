import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NutritionWeek from "./NutritionWeek";
import NutritionMeals from "./NutritionMeals";
import NutritionMealsContent from "./NutritionMealsContent";
import NutritionGoalsModal from "./NutritionGoalsModal";

import "./Nutrition.css";

import { Settings } from "lucide-react";

const Nutrition = () => {
    const [goalsModalOpen, setGoalsModalOpen] = useState(false);

    return (
        <main className="nutrition">
            <header className="nutrition-header">
                <div className="nutrition-titles">
                    <h1 className="title-secondary">Nutrition Tracker</h1>
                    <div className="text-secondary">Track your daily nutrition by tracking foods and meals</div>
                </div>

                <button className="nutrition-button button-primary" onClick={() => setGoalsModalOpen(true)}>
                    <Settings size={18} />
                    Set Goals
                </button>
            </header>

            <section className="nutrition-section">
                <NutritionWeek />
                <NutritionMeals />
                <NutritionMealsContent />
            </section>

            <AnimatePresence>
                {goalsModalOpen && <NutritionGoalsModal handleGoalsModalClose={() => setGoalsModalOpen(false)} />}
            </AnimatePresence>
        </main>
    );
};

export default Nutrition;
