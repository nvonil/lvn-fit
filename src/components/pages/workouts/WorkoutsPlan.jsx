import { Dumbbell, Plus, Trash } from "lucide-react";

const WorkoutsPlan = ({ handleModalOpen }) => {
    const exercises = [
        {
            name: "Machine Incline Chest Press",
            tag: "Chest",
            sets: 3,
            reps: "6-8",
            weight: "120lb",
            rest: "4 minutes",
        },
        {
            name: "Machine Shoulder Press",
            tag: "Shoulders",
            sets: 3,
            reps: "8-10",
            weight: "70lb",
            rest: "3 minutes",
        },
        {
            name: "Machine Chest Fly",
            tag: "Chest",
            sets: 3,
            reps: "6-8",
            weight: "80lb",
            rest: "3 minutes",
        },
        {
            name: "Dumbbell Lateral Raises",
            tag: "Shoulders",
            sets: 3,
            reps: "10-12",
            weight: "20lb",
            rest: "2 minutes",
        },
        {
            name: "Cable Tricep Pushdowns",
            tag: "Triceps",
            sets: 3,
            reps: "8-10",
            weight: "80lb",
            rest: "2 minutes",
        },
        {
            name: "Cable Overhead Tricep Extensions",
            tag: "Triceps",
            sets: 3,
            reps: "8-10",
            weight: "80lb",
            rest: "2 minutes",
        },
    ];

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
