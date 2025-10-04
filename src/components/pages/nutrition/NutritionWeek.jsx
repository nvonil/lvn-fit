import { useNutrition } from "../../contexts/NutritionContext";

const NutritionWeek = () => {
    const { selectedDay, setSelectedDay } = useNutrition();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <nav className="nutrition-nav">
            {daysOfWeek.map((day) => (
                <div
                    key={day}
                    className={`nutrition-day ${selectedDay === day ? "active" : ""}`}
                    onClick={() => setSelectedDay(day)}
                >
                    {day}
                </div>
            ))}
        </nav>
    );
};

export default NutritionWeek;
