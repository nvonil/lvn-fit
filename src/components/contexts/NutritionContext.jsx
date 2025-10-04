import { createContext, useContext, useState, useEffect } from "react";

const NutritionContext = createContext();

const NutritionProvider = ({ children }) => {
    const getSelectedDay = () => {
        const storedDay = localStorage.getItem("nutritionSelectedDay");

        if (storedDay) {
            return storedDay;
        } else {
            return null;
        }
    };

    const [selectedDay, setSelectedDay] = useState(getSelectedDay);
    useEffect(() => {
        localStorage.setItem("nutritionSelectedDay", selectedDay);
    }, [selectedDay]);

    return <NutritionContext.Provider value={{ selectedDay, setSelectedDay }}>{children}</NutritionContext.Provider>;
};

export default NutritionProvider;

export const useNutrition = () => {
    return useContext(NutritionContext);
};
