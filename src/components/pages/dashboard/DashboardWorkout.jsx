import { useNavigate } from "react-router-dom";
import { useWorkouts } from "../../contexts/WorkoutsContext";

import { Calendar, Target, Repeat } from "lucide-react";

const DashboardWorkout = () => {
    const { workoutsByDay, setSelectedDay } = useWorkouts();
    const navigate = useNavigate();

    // figures out today's workout based on current date
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = daysOfWeek[new Date().getDay()];
    const todaysWorkout = workoutsByDay[today];

    let totalSets = 0;
    for (let i = 0; i < todaysWorkout.exercises.length; i++) {
        totalSets += Number(todaysWorkout.exercises[i].sets);
    }

    const openWorkout = () => {
        setSelectedDay(today);
        navigate("/workouts");
    };

    return (
        <section className="dashboard-section">
            <h2 className="dashboard-label label-primary">
                <Calendar size={18} />
                Today's Workout
            </h2>

            <article className="dashboard-workout">
                <div className="dashboard-workout-details">
                    <div className="text-primary">{todaysWorkout.routineName || "No workouts scheduled today"}</div>

                    <ul className="dashboard-workout-metrics">
                        <li className="text-secondary">
                            <Target size={16} />
                            {todaysWorkout.exercises.length} Exercises
                        </li>
                        <li className="text-secondary">
                            <Repeat size={16} />
                            {totalSets} Sets
                        </li>
                    </ul>
                </div>

                <button className="button-primary" onClick={openWorkout}>
                    Open Workout
                </button>
            </article>
        </section>
    );
};

export default DashboardWorkout;
