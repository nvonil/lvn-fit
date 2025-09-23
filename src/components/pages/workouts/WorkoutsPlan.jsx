import { useState, useEffect, useRef } from "react";

import { Dumbbell, Pencil, Plus, Trash } from "lucide-react";

const WorkoutsPlan = ({ handleModalOpen, exercises, handleRemoveExercise }) => {
    const [workoutLabel, setWorkoutLabel] = useState("Push Day Workout");
    const [isEditing, setIsEditing] = useState(false);

    const editInputRef = useRef(null);

    const handleWorkoutLabelChange = (e) => {
        setWorkoutLabel(e.target.value);
    };

    const handleEditLabel = () => {
        setIsEditing(true);
    };

    const handleEditLabelBlur = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className="workouts-plan">
            <header className="workouts-plan-header">
                <h2 className="workouts-label label-primary">
                    <Dumbbell size={18} />

                    {isEditing ? (
                        <input
                            type="text"
                            className="workouts-label-input label-primary"
                            value={workoutLabel}
                            onChange={handleWorkoutLabelChange}
                            onBlur={handleEditLabelBlur}
                            ref={editInputRef}
                        />
                    ) : (
                        workoutLabel
                    )}
                </h2>

                <div className="workouts-actions">
                    <button className="workouts-button button-primary" onClick={handleEditLabel}>
                        <Pencil size={18} />
                        Edit Title
                    </button>

                    <button className="workouts-button button-primary" onClick={handleModalOpen}>
                        <Plus size={18} />
                        Add Exercise
                    </button>
                </div>
            </header>

            <div className="workouts-plan-exercises">
                {exercises.map((exercise) => {
                    return (
                        <div className="workouts-exercise" key={exercise.name}>
                            <header className="workouts-exercise-header">
                                <div className="workouts-exercise-details">
                                    <div className="text-primary">{exercise.name}</div>
                                    <div className="workouts-tag"> {exercise.tag}</div>
                                </div>

                                <Trash
                                    size={18}
                                    className="workouts-delete"
                                    onClick={() => handleRemoveExercise(exercise.name)}
                                />
                            </header>

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
