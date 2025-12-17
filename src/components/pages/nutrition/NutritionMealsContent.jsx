import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNutrition } from "../../contexts/NutritionContext";

import { Coffee, Plus, Trash } from "lucide-react";
import NutritionFoodModal from "./NutritionFoodModal";

const NutritionMealsContent = () => {
    const { selectedDay, selectedMeal, foodsByDay, removeFood } = useNutrition();

    const [foodModalOpen, setFoodModalOpen] = useState(false);

    const foods = foodsByDay[selectedDay][selectedMeal];

    return (
        <section className="nutrition-meals-content">
            <header className="nutrition-meals-header">
                <h2 className="nutrition-label label-primary">
                    <Coffee size={18} />
                    {selectedMeal}
                </h2>

                <button className="nutrition-button button-primary" onClick={() => setFoodModalOpen(true)}>
                    <Plus size={18} />
                    Add Food
                </button>
            </header>

            <article className="nutrition-foods">
                {foods.length > 0 ? (
                    foods.map((food, index) => {
                        return (
                            <div className="nutrition-food" key={index}>
                                <header className="nutrition-food-header">
                                    <div className="nutrition-food-details">
                                        <div className="text-primary">{food.name}</div>
                                        <div className="nutrition-metrics">
                                            <div className="text-secondary">
                                                Amount: {food.quantity} x {food.size}
                                            </div>
                                            <div className="text-secondary">Calories: {food.calories}cal</div>
                                        </div>
                                    </div>

                                    <Trash
                                        size={18}
                                        className="nutrition-food-remove"
                                        onClick={() => removeFood(selectedDay, selectedMeal, index)}
                                    />
                                </header>

                                <div className="nutrition-macros">
                                    <div className="text-secondary">Protein: {food.protein}g</div>
                                    <div className="text-secondary">Carbs: {food.carbs}g</div>
                                    <div className="text-secondary">Fats: {food.fats}g</div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="nutrition-empty text-secondary">No foods added yet.</div>
                )}
            </article>

            <AnimatePresence>
                {foodModalOpen && <NutritionFoodModal handleFoodModalClose={() => setFoodModalOpen(false)} />}
            </AnimatePresence>
        </section>
    );
};
export default NutritionMealsContent;
