import { createContext, useContext, useState, useEffect } from "react";

const WorkoutsContext = createContext();

const WorkoutsProvider = ({ children }) => {
    const getToday = () => new Date().toLocaleDateString("en-US", { weekday: "long" });

    const getSelectedDay = () => {
        const storedDay = localStorage.getItem("workoutsSelectedDay");

        if (storedDay) {
            return storedDay;
        } else {
            return getToday();
        }
    };

    const getWorkoutsByDay = () => {
        // gets a string from localStorage
        const storedWorkouts = localStorage.getItem("workoutsByDay");

        if (storedWorkouts) {
            // turns a JSON string into a JS object/array
            return JSON.parse(storedWorkouts);
        } else {
            return {
                Monday: { routineName: "", exercises: [] },
                Tuesday: { routineName: "", exercises: [] },
                Wednesday: { routineName: "", exercises: [] },
                Thursday: { routineName: "", exercises: [] },
                Friday: { routineName: "", exercises: [] },
                Saturday: { routineName: "", exercises: [] },
                Sunday: { routineName: "", exercises: [] },
            };
        }
    };

    const [selectedDay, setSelectedDay] = useState(getSelectedDay);
    useEffect(() => {
        localStorage.setItem("workoutsSelectedDay", selectedDay);
    }, [selectedDay]);

    const [workoutsByDay, setWorkoutsByDay] = useState(getWorkoutsByDay);
    useEffect(() => {
        // saves data to localStorage (must be a string)
        // converts a JS object/array into a JSON string
        localStorage.setItem("workoutsByDay", JSON.stringify(workoutsByDay));
    }, [workoutsByDay]);

    return (
        <WorkoutsContext.Provider value={{ selectedDay, setSelectedDay, workoutsByDay, setWorkoutsByDay }}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;

// custom hook to access workouts context values
export const useWorkouts = () => {
    return useContext(WorkoutsContext);
};
