import { Target, Clock } from "lucide-react";

const DashboardWorkout = () => {
    return (
        <div className="dashboard-workout-content">
            <div className="dashboard-workout-info">
                <h3 className="dashboard-workout-day">Push Day</h3>

                <ul className="dashboard-workout-summary">
                    <li>
                        <Target size={16} />6 Exercises
                    </li>
                    <li>
                        <Clock size={16} />1 Hour
                    </li>
                </ul>
            </div>

            <button type="button" className="dashboard-workout-button">
                Start Workout
            </button>
        </div>
    );
};

export default DashboardWorkout;
