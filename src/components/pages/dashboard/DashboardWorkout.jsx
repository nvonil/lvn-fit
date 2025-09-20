import { Calendar, Target, Clock } from "lucide-react";

const DashboardWorkout = () => {
    return (
        <section className="dashboard-section">
            <h2 className="dashboard-label label-primary">
                <Calendar size={18} />
                Today's Workout
            </h2>

            <article className="dashboard-workout">
                <div className="dashboard-workout-details">
                    <div className="text-primary">Push Day</div>

                    <ul className="dashboard-workout-metrics">
                        <li className="text-secondary">
                            <Target size={16} />6 Exercises
                        </li>
                        <li className="text-secondary">
                            <Clock size={16} />1 Hour
                        </li>
                    </ul>
                </div>

                <button className="button-primary">Start Workout</button>
            </article>
        </section>
    );
};

export default DashboardWorkout;
