import { createContext, useContext, useState, useEffect } from "react";

const NutritionContext = createContext();

const NutritionProvider = ({ children }) => {
    const getToday = () => new Date().toLocaleDateString("en-US", { weekday: "long" });

    const getSelectedDay = () => {
        const storedDay = localStorage.getItem("nutritionSelectedDay");

        if (storedDay) {
            return storedDay;
        } else {
            return getToday();
        }
    };

    const getSelectedMeal = () => {
        const storedMeal = localStorage.getItem("nutritionSelectedMeal");

        if (storedMeal) {
            return storedMeal;
        } else {
            return "Breakfast";
        }
    };

    const getFoodsByDay = () => {
        const storedFoods = localStorage.getItem("foodsByDay");

        if (storedFoods) {
            return JSON.parse(storedFoods);
        } else {
            return {
                Monday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Tuesday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Wednesday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Thursday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Friday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Saturday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
                Sunday: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] },
            };
        }
    };

    const [selectedDay, setSelectedDay] = useState(getSelectedDay);
    useEffect(() => {
        localStorage.setItem("nutritionSelectedDay", selectedDay);
    }, [selectedDay]);

    const [selectedMeal, setSelectedMeal] = useState(getSelectedMeal);
    useEffect(() => {
        localStorage.setItem("nutritionSelectedMeal", selectedMeal);
    }, [selectedMeal]);

    const [foodsByDay, setFoodsByDay] = useState(getFoodsByDay);
    useEffect(() => {
        localStorage.setItem("foodsByDay", JSON.stringify(foodsByDay));
    }, [foodsByDay]);

    const addFood = (day, meal, food) => {
        setFoodsByDay((current) => ({
            ...current,
            [day]: {
                ...current[day],
                [meal]: [...current[day][meal], food],
            },
        }));
    };

    const removeFood = (day, meal, foodIndex) => {
        setFoodsByDay((current) => ({
            ...current,
            [day]: {
                ...current[day],
                [meal]: current[day][meal].filter((_, index) => index !== foodIndex),
            },
        }));
    };

    return (
        <NutritionContext.Provider
            value={{
                selectedDay,
                setSelectedDay,
                selectedMeal,
                setSelectedMeal,
                foodsByDay,
                setFoodsByDay,
                addFood,
                removeFood,
            }}
        >
            {children}
        </NutritionContext.Provider>
    );
};

export default NutritionProvider;

export const useNutrition = () => {
    return useContext(NutritionContext);
};
