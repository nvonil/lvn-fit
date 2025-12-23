import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNutrition } from "../../contexts/NutritionContext";

const NutritionGoalsModal = ({ handleGoalsModalClose }) => {
    const { goals, setGoals } = useNutrition();

    const [calories, setCalories] = useState(goals.calories);
    const [protein, setProtein] = useState(goals.protein);
    const [carbs, setCarbs] = useState(goals.carbs);
    const [fats, setFats] = useState(goals.fats);

    const caloriesInputRef = useRef(null);

    const handleInputFocus = () => {
        if (caloriesInputRef.current) {
            caloriesInputRef.current.focus();
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!calories || !protein || !carbs || !fats) {
            alert("Please fill out all fields");
            return;
        }

        setGoals({ calories, protein, carbs, fats });
        handleGoalsModalClose();
    };

    return (
        <motion.div
            className="nutrition-modal-overlay"
            onClick={handleGoalsModalClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="nutrition-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onAnimationComplete={handleInputFocus}
            >
                <header className="nutrition-modal-header">
                    <h1 className="label-primary">Set Nutrition Goals</h1>
                    <div className="text-secondary">Customize your daily nutrition targets</div>
                </header>

                <form className="nutrition-modal-form" onSubmit={handleFormSubmit} autoComplete="off">
                    <div className="nutrition-modal-form-group">
                        {/* Calories */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="calories" className="form-label">
                                Calories *
                            </label>
                            <input
                                type="number"
                                id="calories"
                                className="form-input"
                                placeholder="e.g. 1800"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                ref={caloriesInputRef}
                                min={0}
                            />
                        </div>

                        {/* Protein */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="protein" className="form-label">
                                Protein *
                            </label>
                            <input
                                type="number"
                                id="protein"
                                className="nutrition-input form-input"
                                placeholder="e.g. 150"
                                value={protein}
                                onChange={(e) => setProtein(e.target.value)}
                                min={0}
                            />
                        </div>
                    </div>

                    <div className="nutrition-modal-form-group">
                        {/* Carbs */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="carbs" className="form-label">
                                Carbs *
                            </label>
                            <input
                                type="number"
                                id="carbs"
                                className="nutrition-input form-input"
                                placeholder="e.g. 100"
                                value={carbs}
                                onChange={(e) => setCarbs(e.target.value)}
                                min={0}
                            />
                        </div>

                        {/* Fats */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="fats" className="form-label">
                                Fats *
                            </label>
                            <input
                                type="number"
                                id="fats"
                                className="nutrition-input form-input"
                                placeholder="e.g. 50"
                                value={fats}
                                onChange={(e) => setFats(e.target.value)}
                                min={0}
                            />
                        </div>
                    </div>

                    <div className="nutrition-modal-form-actions nutrition-actions">
                        <button type="submit" className="form-button button-primary">
                            Save Goals
                        </button>

                        <button type="button" className="form-button button-secondary" onClick={handleGoalsModalClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};
export default NutritionGoalsModal;
