import { Target, Clock } from "lucide-react";

const DashboardWorkout = () => {
    return (
        <article className="dashboard-workout-content">
            <div className="dashboard-workout-info">
                <div className="text-primary">Push Day</div>

                <ul className="dashboard-workout-summary">
                    <li className="text-secondary">
                        <Target size={16} />6 Exercises
                    </li>
                    <li className="text-secondary">
                        <Clock size={16} />1 Hour
                    </li>
                </ul>
            </div>

            <button className="button">Start Workout</button>
        </article>
    );
};

export default DashboardWorkout;
