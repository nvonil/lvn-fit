import { Dumbbell, Plus, Trash } from "lucide-react";

const WorkoutsPlan = ({ handleModalOpen, exercises }) => {
    return (
        <div className="workouts-plan">
            <header className="workouts-plan-header">
                <h2 className="workouts-label label-primary">
                    <Dumbbell size={18} />
                    Push Day Workout
                </h2>

                <button className="workouts-button button-primary" onClick={handleModalOpen}>
                    <Plus size={18} />
                    Add Exercise
                </button>
            </header>

            <div className="workouts-plan-exercises">
                {exercises.map((exercise) => {
                    return (
                        <div className="workouts-exercise" key={exercise.name}>
                            <div className="workouts-exercise-header">
                                <div className="workouts-exercise-details">
                                    <div className="text-primary">{exercise.name}</div>
                                    <div className="workouts-tag"> {exercise.tag}</div>
                                </div>

                                <Trash className="workouts-delete" size={18} />
                            </div>

                            <ul className="workouts-metrics">
                                <li className="text-secondary">Sets: {exercise.sets}</li>
                                <li className="text-secondary">Reps: {exercise.reps}</li>
                                <li className="text-secondary">Weight: {exercise.weight}</li>
                                <li className="text-secondary">Rest: {exercise.rest}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkoutsPlan;
