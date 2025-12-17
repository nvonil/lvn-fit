import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNutrition } from "../../contexts/NutritionContext";

const NutritionFoodModal = ({ handleFoodModalClose }) => {
    const { selectedDay, selectedMeal, addFood } = useNutrition();

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [calories, setCalories] = useState("");
    const [quantity, setQuantity] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fats, setFats] = useState("");

    const nameInputRef = useRef(null);

    const handleInputFocus = () => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !size || !calories || !quantity || !protein || !carbs || !fats) {
            alert("Please fill out all fields");
            return;
        }

        addFood(selectedDay, selectedMeal, { name, size, calories, quantity, protein, carbs, fats });
        handleFoodModalClose();
    };

    return (
        <motion.div
            className="nutrition-modal-overlay"
            onClick={handleFoodModalClose}
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
                    <h1 className="label-primary">Add Food to Meal</h1>
                    <div className="text-secondary">Enter the nutritional information for your food</div>
                </header>

                <form className="nutrition-modal-form" onSubmit={handleFormSubmit} autoComplete="off">
                    <div className="nutrition-modal-form-group">
                        {/* Name */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="name" className="form-label">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="e.g. Vanilla Greek Yogurt"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                ref={nameInputRef}
                            />
                        </div>

                        {/* Size */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="size" className="form-label">
                                Serving Size *
                            </label>
                            <input
                                type="text"
                                id="size"
                                className="form-input"
                                placeholder="e.g. 170g"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </div>
                    </div>

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
                                placeholder="e.g. 160"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                min={0}
                            />
                        </div>

                        {/* Quantity */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="quantity" className="form-label">
                                Quantity *
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-input"
                                placeholder="e.g. 1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                min={0}
                            />
                        </div>
                    </div>

                    <div className="nutrition-modal-form-group">
                        {/* Protein */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="protein" className="form-label">
                                Protein *
                            </label>
                            <input
                                type="number"
                                id="protein"
                                className="nutrition-input form-input"
                                placeholder="e.g. 23"
                                value={protein}
                                onChange={(e) => setProtein(e.target.value)}
                                min={0}
                            />
                        </div>

                        {/* Carbs */}
                        <div className="nutrition-modal-form-field">
                            <label htmlFor="carbs" className="form-label">
                                Carbs *
                            </label>
                            <input
                                type="number"
                                id="carbs"
                                className="nutrition-input form-input"
                                placeholder="e.g. 9"
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
                                placeholder="e.g. 3"
                                value={fats}
                                onChange={(e) => setFats(e.target.value)}
                                min={0}
                            />
                        </div>
                    </div>

                    <div className="nutrition-modal-form-actions">
                        <button type="submit" className="form-button button-primary">
                            Add to Meal
                        </button>

                        <button type="button" className="form-button button-secondary" onClick={handleFoodModalClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};
export default NutritionFoodModal;
