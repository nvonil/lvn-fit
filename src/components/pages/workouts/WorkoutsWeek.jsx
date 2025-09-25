import { useWorkouts } from "../../contexts/WorkoutsContext";

const WorkoutsWeek = () => {
    const { selectedDay, setSelectedDay } = useWorkouts();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <nav className="workouts-nav">
            {daysOfWeek.map((day) => (
                <div
                    key={day}
                    className={`workouts-day ${selectedDay === day ? "active" : ""}`}
                    onClick={() => setSelectedDay(day)}
                >
                    {day}
                </div>
            ))}
        </nav>
    );
};

export default WorkoutsWeek;
